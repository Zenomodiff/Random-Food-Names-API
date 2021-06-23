# Food Names API 🍗🍔🍕🍜

An API that will return random Food Names 🍡🥧🎂🌮

## Usage:

+ `https://food-names-api.herokuapp.com` to get the documentation.
+ `https://food-names-api.herokuapp.com/api/Food-Names/all` to get all the facts at once.
+ Change `all` to parameter `?number=` to specify the number of facts you want to receive.
+ Change `all` to parameter `?index=` to specify the index of the fact you are targeting.

Note: The project is being hosted by [Heroku](https://www.heroku.com/)

## Rebuild the project:
+ Clone the repo.
+ Run `python -m venv .env` to create a virtual environment.
+ Run `source .env/bin/activate` to activate the virtual environment.
+ Run `pip install requirements.txt`.
+ Run `python app.py`.
+ App starts at `http://localhost:5000` by default, but can be configured with a `.env` file. 

## Example:

+ `https://food-names-api.herokuapp.com/api/Food-Names?number=1` returns: ↓
```JSON
[
  {
    "Food_Name": "Mushroom"
  }
]
```

+ `https://food-names-api.herokuapp.com/api/Food-Names?number=2` returns: ↓
```JSON
[
  {
    "Food_Name": "Grape Juice"
  }, 
  {
    "Food_Name": "Carrot Juice"
  }
]
```
