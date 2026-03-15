from fastapi import FastAPI
from pydantic import BaseModel
import analyzer
from scrapper import hackernews

app = FastAPI()

@app.get('/')
def root_url():
    return {"message": "Product validation"}


@app.get('/validate')
def validate_product(text:str):
    comments = hackernews.scrape_hn(text)
    analyzer_response = analyzer.analyze(text,comments)
    return {"validation_result": analyzer_response}