# OCBC Interview Homework - Simple Mobile App

A simple Mobile banking app built with React, NodeJS, CSS & HTML
Other frameworks & Libraries used includes MomentJS & Axios

## Set Up Information

Dependencies installation
```npm install```

## Features

There are 5 main pages in this app.

- **Login screen** ("/")
  - A simple login screen with a GET request towards the backend providing login info while getting the JWT token in return which is then stored in LocalStorage for authentication in the app.

Preview of page


![Login](/ocbc/ReadMeImages/OCBClogin.gif)

- **Account View** (/account)
  - Account viewer was done with the aim of keeping it minimalist while still providing enough information that one expects from a mobile banking app, functions includes hide/unhide account balance as well as looking through past transactions.

Preview of page


![account](/ocbc/ReadMeImages/OCBCaccountbalance.gif)

- **Transfer Payee Page** (/transfer)
  - This page allows users to select payee from the list of payees they've on their friend list. Simple search function is included to allow users to search for payees should the list be too long.
  - Selecting a payee will lead you to the next page.

Preview of page

![transfer](/ocbc/ReadMeImages/OCBCpayee.gif)

- **Transfer Confirmation Page** (/confirmation)
  - Simple form built in that accepts two inputs, amount in SGD & comments for the recipient.
  - POST request will be made upon submitting.
 
Preview of page

![confirmation](/ocbc/ReadMeImages/OCBCsuccess.gif)

- **Transfer Success Page** (/confirmation)
  - Confirmation of transfer page with summarised information for user
  - buttons included are Home button which will bring users back to Account View (/account) or make another transfer which will bring users back to Transfer Payee Page (/transfer)
 
Preview of page

![success](/ocbc/ReadMeImages/OCBCsummary.gif)

## About

Project is created by Daryl Aw for an Interview with OCBC.



