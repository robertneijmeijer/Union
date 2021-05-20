from django.core import files
from minio import Minio
from minio.error import S3Error
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django import forms
import os, sys, logging

MINIO_ADDRESS= os.environ.get('MINIO_ADDRESS')
MINIO_ACCESS_KEY= os.environ.get('MINIO_ACCESS_KEY')
MINIO_SECRET_KEY= os.environ.get('MINIO_SECRET_KEY')

class UploadFileForm(forms.Form):
    file = forms.FileField()

def SaveFile(request):
    model_file = request.FILES['banner']

    path = default_storage.save('./tempStorage', ContentFile(b))






    logging.warning("CONTENT")
    logging.warning(model_file.content_type)
    with open('./tempStorage', 'wb+') as destination:
        for chunk in model_file.chunks():
            destination.write(chunk)


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

    logging.warning(file)
    url = client.fput_object(
        bucketName,name,'https://cdn.searchenginejournal.com/wp-content/uploads/2020/05/reverse-image-search-your-complete-guide-5ef5f5435f949-760x400.png'
    )
    logging.warning("Result of put", url)
    return url


if __name__ == "__file_uploader__":
    try:
        file_uploader()
    except S3Error as exc:
        print("error occurred", exc)