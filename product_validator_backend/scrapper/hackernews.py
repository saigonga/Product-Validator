import requests


def scrape_hn(query:str):
    url ="https://hn.algolia.com/api/v1/search?&tags=comment&hitsPerPage=10"
    response = requests.get(url, params={"query": query, "tags": "comment", "hitsPerPage": 10})
    comments_text = response.json()
    comments=[]
    for hit in comments_text["hits"]:
        if hit["comment_text"] is not None:
            comments.append(hit["comment_text"])
    return "\n\n".join(comments)

