### Home Assignment 
This assignment will be similar to what you will be doing in your daily task. As a mobile developer, you will be creating new features by working with the various stakeholders to deliver great user experience to our customers. 

In your day to day work, you will be liaising with the various departments, from backend to product owners to understand the requirements, refine stories and deliver what is needed in scrum sprints. 

In this assignment, the backend, a mock server, is already setup and you will just need to deliver the UI portion of it. 

We have also provided wireframes for your reference but please feel free to amend it as you see fit and we can walkthrough your ideas during your follow up interview. 

5 APIs have been provided for you to complete it:
1. authenticate/login 
2. account/balances
3. account/transactions
4. account/payees
5. transfer

Your project should utilise all the APIs and we will evaluate your project based on the following project criteria:

1. Project runs as expected without crashing
2. User is able to login
3. User is able to see the balances / transactions in the account
4. User is able to retrieve his/her list of payees
5. User is able to make a transfer 

<b>You are free to use any other libraries that you feel is needed for this project. But we are hoping candidate DO NOT heavily rely on UI library so that we can analyse your coding skills better.</b>

Have fun with the project and good luck!

### Prerequisites
[Node.js](https://nodejs.org/en/)

### Setup Mock Server
1. Clone the repo into your local machine.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the mock server. Your mock server should start on `http://localhost:8080` by default.
4. Install postman into your computer and import the [postman collection](https://github.com/RDCMDT/mdt-mockserver/tree/master/postman_collection) we provided.
5. You may now interact with the mock server via the Restful APIs. Please find the sample header and sample body for the APIs in the postman collection.

### Instruction
1. Authenticate the user and retrieve the jwt token via "/authenticate/login"
   ```
   username: ocbc
   password: 123456
   ```
2. In the subsequence apis call, pass the token into the header.
   ```
   Content-Type: "application/json"
   Accept: "application/json"
   Authorization: {{your-token}}
   ```
   
### Wireframe
The wireframe is just for your references. If you have good sense on design, feel free to amend it and show us your creativity 😘

![01 - Landing](https://user-images.githubusercontent.com/16426747/134101268-17618b7a-819d-4a9a-93cd-3acc57f92614.png)
![02 - Balance](https://user-images.githubusercontent.com/16426747/134101234-c1ad8a39-80d5-4d47-ab40-79ec7d2cd43a.png)
![03 - Transfer](https://user-images.githubusercontent.com/16426747/134101254-1f1594d1-cbc7-45f5-90ff-d87f32fac00f.png)


### Submission
Push your source code to github and submit the repo link.


### Evaluation Criteria

* The required functions are working:
	* Login
	* Display dashboard	
	* Make transaction
	* Refresh

* The code is well-designed
	* Function
	* Interaction

* The UI is sensible and looks good

* The code isn't more complex than it needs to be

* Code has appropriate unit tests
	* Tests are well designed
	* Coverage

* Code is properly documented in README.md
