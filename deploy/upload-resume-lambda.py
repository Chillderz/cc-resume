import boto3
import io
import zipfile
import mimetypes
import os

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    sns = boto3.resource('sns')
    topic = sns.Topic(os.environ['SNSTOPIC'])

    location = {
        "bucketName": os.environ['BUILDBUCKET'],
        "objectKey": os.environ['BUILDOBJECTKEY']
    }
    try:
        job = event.get("CodePipeline.job")
        print(event)
        
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "BuildArtifact":
                    location = artifact["location"]["s3Location"]
            
        print("Building resume from " + str(location))
                
        resume_bucket = s3.Bucket(os.environ['WEBSITEBUCKET'])
        build_bucket = s3.Bucket(location["bucketName"])
        
        resume_zip = io.BytesIO()
        build_bucket.download_fileobj(location["objectKey"], resume_zip)
        
        with zipfile.ZipFile(resume_zip) as myzip:  
            for nm in myzip.namelist():  
                obj = myzip.open(nm)  
                mime_type = mimetypes.guess_type(nm)[0]  
                resume_bucket.upload_fileobj(obj, nm,  
                ExtraArgs={'ContentType': str(mime_type)})  
                resume_bucket.Object(nm).Acl().put(ACL='public-read')
           
        print("Job Done")     
        topic.publish(Subject="Resume Deployed", Message="Resume deployed successfully")
        
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        topic.publish(Subject="Resume Deploy Failed", Message="The Resume was not deployed successfully")
        raise
        
    return 'Completed'
