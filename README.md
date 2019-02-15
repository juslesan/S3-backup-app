# S3-backup-app

Node.js script that uploads changes in files in a directory to an S3 bucket periodically.

Required .env fields. 

AWS_ACCESS_KEY_ID = Your aws access key id

AWS_SECRET_ACCESS_KEY = Your aws secret access key

AWS_SESSION_TOKEN = Your aws session token

BUCKET_NAME = Your bucket name

DIR_PATH = File path to your local directory

AWS_REGION = The region that your bucket is in

REFRESH_TIME = Refresh time for your uploads in milliseconds
