from minio import Minio
from minio.error import S3Error

def fileUploader():
    print("running")
    client = Minio(
        "http://localhost:9000/minio/",
        access_key="minio",
        secret_key="minio123",
    )

    found = client.bucket_exists("union")
    if not found:
        client.make_bucket("union")
        print("Made bucket")
    else:
        print("Bucket already exists")

    client.fput_object(
        "union","",""
    )

if __name__ == "__fileUploader__":
    try:
        fileUploader()
    except S3Error as exc:
        print("error occurred", exc)