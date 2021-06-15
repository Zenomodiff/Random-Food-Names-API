# Food-Names-API

An API that will return random Food Names 🍕🍜


## Usage:

+  to get all the names at once.
+ Change `all` to parameter `?number=` to specify the number of names you want to receive.
+ Change `all` to parameter `?index=` to specify the index of the names you are targeting.

This Project Is Made Possible With [Heroku](https://dashboard.heroku.com/)

## Rebuild the project:
+ Clone the repo.
+ Run `python3 -m venv .env` to create a virtual environment.
+ Run `source .env/bin/activate` to activate the virtual environment.
+ Run `pip install requirements.txt`.
+ Run `python3 app.py`.
+ App starts at port 5000 by default, but can be configured with a `.env` file. 

## Example:
+  returns: ⬇️
```JSON
[
    {"Food_Name" : "Noodels"}
]
```

+  returns: ⬇️
```JSON
[
  {"Food_Name" : "Chicken Soup"},
  {"Food_Name" : "Schezwan Noodles"},
]
```
