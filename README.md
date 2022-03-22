# Jason Paraser
This simple project gets a hardcoded JSON object and renders the content dynamically on the screen. 
## Run the project
To run the project on your local server you have to do the following actions:
*  npm install
*  npm start


### Information about the project
I used React to implement my solution. I have some basic components to build the layout of the application. 
I pass the data via props through the components. 
The basic component is the List. Inside the list we have the listItems. And for each item there is a button that you can press
to see more details. With that button the ListItemInfo component is rendered. If you press it again the info is hidden. 
For the dynamic handling of the content I used the useState hook from react. 

![screenshot](https://user-images.githubusercontent.com/75163039/159562249-7735e3ac-cb24-4a71-9eb6-e5d5fa8ec55c.png)

### Similarities with previous projects of mine
I have implemented similar solutions to projects like that in the Past. 
The full stack app (fast charger) that exists in my github repo uses react in the frontend to get Data with API call
from the backend and display the data in the screen. 
The Burger builder project uses React in a more complex manner in the frontend as well.

