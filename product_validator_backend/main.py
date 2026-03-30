from fastapi import FastAPI
from pydantic import BaseModel
import analyzer
from scrapper import hackernews
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def root_url():
    return {"message": "Product validation"}


@app.get('/validate')
def validate_product(text:str):
    comments = hackernews.scrape_hn(text)
    analyzer_response = analyzer.analyze(text,comments)
    return {"validation_result": analyzer_response}

@app.get("/test")
def test_endpoint(query: str):
    from scrapper.productHunt import scrape_product_hunt
    result = scrape_product_hunt(query)
    return {"result": result}