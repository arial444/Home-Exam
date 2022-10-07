# Lendlord-home-exam

# backend

Backend already configured using koa, works with cors
You would need a local version of mongodb installed on your machine.

- `npm i`

# front

A simple create-react-app with lendlord's logo

- `npm i`

# Assignment

You are asked to describe a model following user roles:
Manager 
Worker
Driver

Each user have the following attributes:
- firstName
- lastName
- email
- dateStarted
- salary 

Each worker / driver has a specific manager to manage him.

Define the following APIs:
- getAllUsers - returns an array of users
- getUserById
- update
- create
- delete
- getManagerAndEmployees - returns a manager object with an array of his employees

Frontend:
Create a table to display all of the information.
Add to the table the following actions: 
Create,
Edit,
Delete

Table should display all information along with the manager name for each employee

Bonus: Add sort and filter for the table

You can use a local mongo db or the following db: https://mockaroo.com/

You can use the following design or any other design you’d like:


<img width="1104" alt="Screen Shot 2022-03-22 at 19 21 43" src="https://user-images.githubusercontent.com/33543070/159538946-e977754c-9580-43b6-9383-3a45b9605d5d.png">



<img width="599" alt="Screen Shot 2022-03-22 at 19 22 01" src="https://user-images.githubusercontent.com/33543070/159538990-ff14e72c-fd4e-471c-9679-1998fccbab97.png">

