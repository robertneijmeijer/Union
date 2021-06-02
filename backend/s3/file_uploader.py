from datetime import timedelta
from django.forms.fields import ImageField
from minio import Minio
from minio.error import S3Error
import os
import json
import uuid

MINIO_ADDRESS = os.environ.get('MINIO_ADDRESS')
MINIO_ACCESS_KEY = os.environ.get('MINIO_ACCESS_KEY')
MINIO_SECRET_KEY = os.environ.get('MINIO_SECRET_KEY')

policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {"AWS": "*"},
            "Action": [
                "s3:GetBucketLocation",
                "s3:ListBucket",
                "s3:ListBucketMultipartUploads",
            ],
            "Resource": "arn:aws:s3:::union",
        },
        {
            "Effect": "Allow",
            "Principal": {"AWS": "*"},
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject",
                "s3:ListMultipartUploadParts",
                "s3:AbortMultipartUpload",
            ],
            "Resource": "arn:aws:s3:::union/*",
        },
    ],
}


def file_uploader(name, file):
    if not name or not file:
        return

    bucketName = "union"
    client = Minio(
        "minio:9000",
        access_key="minio",
        secret_key="minio123",
        secure=False,
    )

    name = str(uuid.uuid4()) + name.replace(" ", "")

    bucketExists = client.bucket_exists(bucketName)
    if not bucketExists:
        client.make_bucket(bucketName)
        # Set policy for images so that the frontend can get them
        client.set_bucket_policy(
            bucket_name=bucketName, policy=json.dumps(policy))
    else:
        print("Bucket already exists")

    client.put_object(bucket_name=bucketName, object_name=name,
                      data=file, length=file.size)
    return "http://localhost:9000/" + bucketName + "/" + name


if __name__ == "__file_uploader__":
    try:
        file_uploader()
    except S3Error as exc:
        print("error occurred", exc)
