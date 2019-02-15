# S3-backup-app

Node.js script that uploads changes in files in a directory to an S3 bucket periodically.

Required .env fields:

AWS_ACCESS_KEY_ID = Your aws access key id

AWS_SECRET_ACCESS_KEY = Your aws secret access key

AWS_SESSION_TOKEN = Your aws session token

BUCKET_NAME = Your bucket name

DIR_PATH = File path to your local directory

AWS_REGION = The region that your bucket is in

REFRESH_TIME = Refresh time for your uploads in milliseconds

## FOR CCFUN week4 exercise 3:

My bucket has version control enabled. This allows me to see all the previous file versions and download them if necessary. Bucket versioning is a great tool to allow version control and recovery in case of mishaps.

I also added some lifetime cycles. Current versions are moved to standard-1A afetr 30 days. This is done because after 30 days it's fair to assume that either the script is no longer running and backup retrieval isn't as necessary.

Previous versions are moved to glacier after 30 days. This is done because a previous version of a backup is most likely not going to be retrieved after 30 days. If the script is no longer running and there is a current backup in standard-1A it can still be accessed quickly.
