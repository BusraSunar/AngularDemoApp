## My Deployed app

- https://angular-demo-app.netlify.app

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```ng serve```
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

## Fake Data

For my fake data i have used json placeholders photo data. This is the link i have used to get my data;
- https://jsonplaceholder.typicode.com/photos

## Content

There are 2 pages. One is **All** the other is **AddData**.

- **All Page:** I get the datas with get http request from https://jsonplaceholder.typicode.com/photos?_limit=5 (i limited it to 5, so that i will not overwork it) i have presented the datas as a card, at the card headers you can see a remove icon; it helps to remove data but if you refresh the page you can see that the removed datas will comeback as its a fake data from json placeholder.
-  **AddData Page:**  In this page you can add new data and remove the existing data. The simple form group will add new data. (the first added data will have id of 5001 as json placehodlers photo data has 5000 datas) In this page the existing data are shown in Table tag. You can remove data from the table by clicking the remove icon of the data you want to delete.


