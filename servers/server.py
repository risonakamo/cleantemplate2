from os.path import dirname,realpath,join
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn

HERE=dirname(realpath(__file__))

app=FastAPI()

app.mount("/",StaticFiles(
    directory=join(HERE,"../build"),
    html=True
),name="root")

uvicorn.run(
    app,
    host="0.0.0.0",
    port=4250
)