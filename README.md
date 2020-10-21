# Kanye-Quotes

![Image of Website](./src/assets/github-readme-image.PNG)

Kanye is one of the greatest philosophers of our time.
This application enables everybody to see the wisdom of the Socrates of our time complemented with a matching image.


### About this project
Kanye-Quotes uses a Flask backend to retrieve Tweets from Kanye West. The backend tries to find nouns in the tweet with the help of the Natural Language Toolkit.
If nouns are found, it retrieves a matching image to this noun from unsplash.com, using their Developer API, if not it returns a random image.

### Demo

check it out under: https://kanye-quote-ac0ba.web.app/

Since the backend is hosted on heroku, please allow for a delayed response for the server to wake up.