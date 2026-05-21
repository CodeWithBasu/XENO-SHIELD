from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise ValueError("No MONGO_URI found in environment variables")

# Initialize the async MongoDB client
client = AsyncIOMotorClient(MONGO_URI)

# Connect to a database named 'xeno_shield'
db = client.xeno_shield

# Define collections that we will use
alerts_collection = db.get_collection("alerts")
traffic_logs_collection = db.get_collection("traffic_logs")

async def test_db_connection():
    try:
        # Ping the database to verify the connection
        await client.admin.command('ping')
        print("✅ Successfully connected to MongoDB Atlas!")
    except Exception as e:
        print(f"❌ Could not connect to MongoDB: {e}")
