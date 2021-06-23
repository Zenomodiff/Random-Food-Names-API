# Dog Facts API

An API that will return random Food Names.

## Usage:

+ `https://food-names-api.herokuapp.com/api/Food-Names/all` to get all the facts at once.
+ Change `all` to parameter `?number=` to specify the number of facts you want to receive.
+ Change `all` to parameter `?index=` to specify the index of the fact you are targeting.

> Note: The project is being hosted by Heroku with free dyno; thus, there will be potential delay the first time you make a request (app went to sleep after dyno does not receive traffic in 1 hour). Please be patient, and the call will be faster next time.

## Rebuild the project:
+ Clone the repo.
+ Run `python3 -m venv .env` to create a virtual environment.
+ Run `source .env/bin/activate` to activate the virtual environment.
+ Run `pip install requirements.txt`.
+ Run `python3 app.py`.
+ App starts at port 5000 by default, but can be configured with a `.env` file. 

## Example:
+ `https://food-names-api.herokuapp.com/api/Food-Names?number=1` returns:
```JSON
[
    {
        "fact": "Many foot disorders in dogs are caused by long toenails."
    }
]
```

+ `https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=2` returns:
```JSON
[
    {
        "fact": "Endal was the first dog to ride on the London Eye (the characteristic ferris wheel in London, England), and was also the first known dog to successfully use a ATM machine."
    },
    {
        "fact": "At the age of 4 weeks, most dogs have developed the majority of their vocalizations."
    }
]
```
