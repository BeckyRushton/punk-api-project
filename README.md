The aim of this project was to build a website using React that showcases all of PUNK API’s beers. It should also have a filter so you can see the beers based on three conditions.

**Requirements:**

- Built entirely in React
- Repo on github
- Use Punk API (after using date file first)
- Test where possible (RTL)

**Should look similar to this:**

![punkApi.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/825c3fc7-adf6-4271-affa-83d8b3dc5c36/punkApi.jpg)

**Plan:**

1. All the wireframe content in black is the first part of the challenge - that is, the sidenav, the main section containing the beers and beer cards for each piece of data. The component tree is below to help you get started.

2. Once you've got the design and layout sorted to render the elements, it's time to add some search functionality. Make it so you can search the beers by their name, and the page content should update as you type each letter in the box.

3. Finally attempt to make it so you can filter the content on three conditions:
   High Alcohol (ABV value greater than 6%)
   Classic Range (Was first brewed before 2010)
   High Acidity (pH lower than 4)

4. Style the website however you see fit! Go wild!

Component tree for reference:
![component tree.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22b5c620-63bc-43ec-8e2b-3c1887117c21/component_tree.jpg)

My drawn visualisation of tree structure
![heiarchy of react.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f187d87-3359-4f2c-bfe6-cfff441637d7/heiarchy_of_react.png)

[https://punkapi.com/](https://punkapi.com/)

To Do's

- Add a multifunctional checkbox system
- Reduce about to one sentence and then find out more
- When click find out more, open overlay to have all info
- need a back button

To use for url -
const getBeers = async () => {
const url = "";
const res = await fetch(url);
const data = await res.json();
setUsers(data.results);
};
