The aim of this project was to build a website using React that showcases all of PUNK API’s beers. It should also have a search filter and a checkbox filter that has three conditions.

**Requirements:**

- Built entirely in React
- Repo on github
- Use Punk API for beer data [https://punkapi.com/](https://punkapi.com/)
- Test where possible (RTL)

**Plan:**

1. All the wireframe content in black is the first part of the challenge - that is, the sidenav, the main section containing the beers and beer cards for each piece of data. The component tree is below to help you get started.

2. Once you've got the design and layout sorted to render the elements, it's time to add some search functionality. Make it so you can search the beers by their name, and the page content should update as you type each letter in the box.

3. Finally attempt to make it so you can filter the content on three conditions:
   High Alcohol (ABV value greater than 6%)
   Classic Range (Was first brewed before 2010)
   High Acidity (pH lower than 4)

4. Style the website however you see fit! Go wild!

Dev notes from app - these explain my logic in app.jsx

- Setting the states of all the following to false/empty so that there are no filters on the beer API.
- This waits for the following to trigger a re-render of the beers API with relevant filter (stops infinite re-rendering).
- This gets an unfiltered aray of beers from the API as default.
- If one of these filters is used, the url has the question mark added onto it.
- If its one of the following filters, then the relevant section of url code is added.
- ph needed to be filtered manually as there is no exact term for ph in the documentation.
- Returns relevant beers from the API to whichever filter/or no filter has been triggered.
- These target the event of typing in the search bar and checking the checkbox.
