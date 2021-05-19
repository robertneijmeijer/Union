from minio import Minio
from minio.error import S3Error

def file_uploader():
    print("running")
    client = Minio(
        "minio:9000",
        access_key="minio",
        secret_key="minio123",
        secure= False,
    )

    found = client.bucket_exists("union")
    if not found:
        client.make_bucket("union")
        print("Made bucket")
    else:
        print("Bucket already exists")


if __name__ == "__file_uploader__":
    try:
        file_uploader()
    except S3Error as exc:
        print("error occurred", exc)