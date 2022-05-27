# Brewology
##### An easy to use and visually appealing menu maker web application developed using ReactJS
*Team members: Mert Dallar, Esrah Zahid, Alexandru Marian Vulc*

![Screenshot 2022-05-26 234649](https://user-images.githubusercontent.com/81852894/170581198-45cdb3be-25db-40e7-ba9c-faaea908f78b.jpg)
![image](https://user-images.githubusercontent.com/81852894/170581278-6c740f38-bf83-4057-8859-0c4982c872d0.png)
![image](https://user-images.githubusercontent.com/81852894/170581343-716454d9-d0d1-4e38-99f6-62d938019d93.png)


### Project Description
Brewology is a website developed for the needs of small businesses such as coffee shops or tea houses. It provides an user friendly interface to build elegant menus.

### Usage scenarios
Coffee shop owner: 
- the user is presented with the home page
- when **Create Menu Now!** button is pressed on the **homepage**, the user is sent to the **AddProduct** page where he can start building his menu
- easy to navigate through the pages using the navbar : **Home**, **Menu** and **AddProduct**
- in the **Menu** page, there is a table displaying all the contents of the designed menu; the user has the option of deleting an item by clicking the button on the right side of the table
- in the **Menu** page, the user is welcomed with a very intuitive and simple to use interface; he has the option of adding 2 different products( coffee or tea) by clicking their specific buttons

### Individual contributions
###### Mert Dallar
- Made usage of Axios API post, get, add and delete with ReactJS for REST API for efficient handling of menu data
- Made connections between react and bootstrap
- Worked on bug fixes, some enhancements in JavaScript, HTML and CSS.
- Made router connections between pages
- Made the base structure of all pages and styled them


------------
###### Esrah Zahid
- Designed the navigation bar, site logo, menu and add coffee/tea form
- Wrote functional components for updating the **Menu** with each user input
- Made usage of Axios API post, get and delete with ReactJS for REST API for efficient handling of menu data
- Made react bootstrap edits in various locations
- Worked on bug fixes, some enhancements in JavaScript, HTML and CSS.

------------
###### Alexandru Marian Vulc
- worked on the design of the product
- created the add tea part in the **addproduct** page
- worked on the **home** page look and feel
- did updates on the **menu** page
- debugged the code with my team mates

------------

### How to run
- first clone the repository
- open a GitBash terminal and run the following command to start the server
`$ json-server --watch src/data.json`
- open a separate terminal and run the following command to start the web application
`$ npm start`
- if you get a npm error, use the following command
`$ npm install`
