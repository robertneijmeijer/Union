from minio import Minio
from minio.error import S3Error
import os, sys, logging

MINIO_ADDRESS= os.environ.get('MINIO_ADDRESS')
MINIO_ACCESS_KEY= os.environ.get('MINIO_ACCESS_KEY')
MINIO_SECRET_KEY= os.environ.get('MINIO_SECRET_KEY')

def file_uploader(name,file):
    if not name or not file:
        logging.warning(name)
        logging.warning(file)
        return

    bucketName = "union"
    client = Minio(
        "minio:9000",
        access_key="minio",
        secret_key="minio123",
        secure= False,
    )

    bucketExists = client.bucket_exists(bucketName)
    if not bucketExists:
        client.make_bucket(bucketName)
    else:
        print("Bucket already exists")

    try:
        result = client.fput_object(
            bucketName,name,file
        )
        print(result)
    except:
        print("error while putting")


if __name__ == "__file_uploader__":
    try:
        file_uploader()
    except S3Error as exc:
        print("error occurred", exc)