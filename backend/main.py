from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
from langdetect import detect
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class TranslationRequest(BaseModel):
    text: str
    target_language: str
    tone: str = "Neutral"

@app.post("/translate")
def translate_text(request: TranslationRequest):

    source_language = detect(request.text)

    prompt = f"""
    You are a professional multilingual translator.

    Translate the following text from {source_language} to {request.target_language}.
    Maintain contextual meaning.
    Use {request.tone} tone.

    Provide:
    1. Only translated text.
    2. A confidence score (0-100).
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return {
        "source_language": source_language,
        "translation": response.choices[0].message.content
    }