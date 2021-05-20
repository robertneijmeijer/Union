from django.forms.fields import ImageField
from minio import Minio
from minio.error import S3Error
import os, logging
from PIL import Image
from django import forms
from django.core.files.uploadedfile import SimpleUploadedFile

MINIO_ADDRESS= os.environ.get('MINIO_ADDRESS')
MINIO_ACCESS_KEY= os.environ.get('MINIO_ACCESS_KEY')
MINIO_SECRET_KEY= os.environ.get('MINIO_SECRET_KEY')

class ImageForm(forms.Form):
    img = forms.ImageField()


def file_uploader(name,file):
    if not name or not file:
        logging.warning(name)
        logging.warning(file)
        return

    file_data = {'img': SimpleUploadedFile('name', file.read() )}
    form = ImageForm({}, file_data)

    form.is_valid()

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

    logging.warning(file)
    url = client.put_object( bucketName,name,file.read(),file.size)
    logging.warning("Result of put", url)
    return url


if __name__ == "__file_uploader__":
    try:
        file_uploader()
    except S3Error as exc:
        print("error occurred", exc)