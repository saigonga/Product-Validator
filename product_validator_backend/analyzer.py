
from dotenv import load_dotenv
import os


load_dotenv()
api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise RuntimeError("GROQ_API_KEY not set in environment")

from groq import Groq

client = Groq(api_key=api_key)

def analyze(text:str,comments:str):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content":  f"""
                        You are an energetic and honest product validation expert.

                        A person has this product idea: {text}

                        Real discussions from Hacker News:{comments}

                        Your job is to validate this idea and MOTIVATE the builder. 
                        Even if competition exists, help them stand out.

                        Respond in EXACTLY this format:

                        VERDICT: GO / MAYBE / NO-GO

                        MARKET POTENTIAL:
                        (Is there real demand? Is the timing right?)

                        PAIN POINTS THIS SOLVES:
                        1.
                        2.
                        3.

                        COMPETITION EXISTS? YES/NO
                        IF YES — HERE IS HOW YOU STAND OUT:
                        1.
                        2.
                        3.

                        YOUR UNFAIR ADVANTAGE:
                        (What unique angle can this builder take?)

                        MOTIVATION:
                        (One powerful line to push them to build this)
                """ }
        ],
        model= "llama-3.3-70b-versatile"
    )
    return chat_completion.choices[0].message.content
