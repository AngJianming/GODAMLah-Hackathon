# auth.py

import os
from dotenv import load_dotenv
from supabase import create_client, Client
import sys

# Load environment variables from .env file
load_dotenv()

# Fetch Supabase credentials from environment variables
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY')

# Validate environment variables
if not SUPABASE_URL or not SUPABASE_ANON_KEY:
    print("Error: SUPABASE_URL and SUPABASE_ANON_KEY must be set in the .env file.")
    sys.exit(1)

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_ANON_KEY)


# register new users
def register_user(email: str, password: str) -> dict:
    try:
        response = supabase.auth.sign_up(email=email, password=password)
        if response.error:
            return {"error": response.error.message}
        return {"data": response.data}
    except Exception as e:
        return {"error": str(e)}


def login_user(email: str, password: str) -> dict:
    try:
        response = supabase.auth.sign_in(email=email, password=password)
        if response.error:
            return {"error": response.error.message}
        return {"data": response.data}
    except Exception as e:
        return {"error": str(e)}


# retrieves the currently authenticated user's details.
def get_current_user() -> dict:
    try:
        user = supabase.auth.user()
        if user:
            return {"data": user}
        else:
            return {"error": "No user is currently logged in."}
    except Exception as e:
        return {"error": str(e)}


def logout_user() -> dict:
    try:
        response = supabase.auth.sign_out()
        if response.error:
            return {"error": response.error.message}
        return {"data": "User successfully logged out."}
    except Exception as e:
        return {"error": str(e)}


# demo values and usage  of auth
def main():
    print("Welcome to Supabase Authentication Demo")
    print("1. Register")
    print("2. Login")
    print("3. Get Current User")
    print("4. Logout")
    print("5. Exit")

    while True:
        choice = input("\nEnter your choice (1-5): ")

        if choice == '1':
            email = input("Enter email: ")
            password = input("Enter password: ")
            result = register_user(email, password)
            if 'error' in result:
                print(f"Registration Error: {result['error']}")
            else:
                print("Registration successful!")
                print(f"User Data: {result['data']}")

        elif choice == '2':
            email = input("Enter email: ")
            password = input("Enter password: ")
            result = login_user(email, password)
            if 'error' in result:
                print(f"Login Error: {result['error']}")
            else:
                print("Login successful!")
                print(f"User Data: {result['data']}")

        elif choice == '3':
            result = get_current_user()
            if 'error' in result:
                print(f"Error: {result['error']}")
            else:
                print("Current User:")
                print(result['data'])

        elif choice == '4':
            result = logout_user()
            if 'error' in result:
                print(f"Logout Error: {result['error']}")
            else:
                print(result['data'])

        elif choice == '5':
            print("Exiting the application.")
            break

        else:
            print("Invalid choice. Please select a valid option.")

if __name__ == "__main__":
    main()
