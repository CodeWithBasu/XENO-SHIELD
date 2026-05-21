from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time
from database import test_db_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await test_db_connection()

@app.get("/")
def read_root():
    return {"message": "XENO-SHIELD Backend Active"}

@app.get("/status")
def get_status():
    return {
        "status": "active",
        "threat_level": "low",
        "timestamp": time.time()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
