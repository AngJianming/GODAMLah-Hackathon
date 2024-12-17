
from dotenv import load_dotenv
import os
from supabase import create_client, Client

env_path = Path('.') / 'config' / 'my_env_file.env'
load_dotenv(dotenv_path=env_path)

# Load environment variables from .env file
load_dotenv()

# Access the variables
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY')
if not SUPABASE_ANON_KEY:
    raise ValueError("API_KEY is not set in the environment variables.")

# Use the variables as needed
print(f"Supabase URL: {SUPABASE_URL}")
print(f"Supabase ANON Key: {SUPABASE_ANON_KEY}")

