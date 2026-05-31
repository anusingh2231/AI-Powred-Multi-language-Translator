from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from googletrans import Translator

app = FastAPI()

# CORS (safe to keep)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

translator = Translator()

class TranslationRequest(BaseModel):
    text: str
    source_language: str
    target_language: str

@app.post("/translate")
def translate_text(request: TranslationRequest):

    translated = translator.translate(
        request.text,
        src=request.source_language,
        dest=request.target_language
    )

    return {
        "translation": translated.text
    }

# Serve React static files
app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")

@app.get("/{full_path:path}")
def serve_react_app(full_path: str):
    return FileResponse("../frontend/build/index.html")
