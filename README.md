# Online learning system

As mentiond in the title this project is all about online learning system as students and instructors can interact with each other and students got learnd in a less effor as they can be graduated and got their certification based on what they perform at the end of each course as each course has its own subtitles and each of these has its own exam every student have to pass the exam to be able to got his certificate also it provide a way for company to contact the admin of the system to register for specific courses and be able to take this course without payment.  
also you can visit the website as a guest but nothing will be accessible.for things to be accessible you have to login.  


## Motivation
we have created this project to reinforce the idea behind the online learning as it the fastest way for both students and acadmeic members to gain informaiton
and put all of there efforts on just learning.  
 

## Build Status

The project work properly with no errors or bugs.  


## Code Style
This project can be divided into 2 sections the frontend and backend .  
#### Backend
The backend have been written in MVC design pattern and there is a controller handel all the logic of the database access and the router which have to manage all the routes in the backend and the APIs
All backend tables has a schema folder that you have to follow to be able to interact with the database.  
#### frontend
For the frontend have been written in standard format and folder are structured as follows :  
Components folder is folder which contains every component you will see in more than one page as we used it more than once 
also the app.js file which run the server in the component folder you can access it to show the which page render when.  
pages Folder which have all the pages that render when the user interact with the application user can be either Admin , Indiviual , Company trainee , Guest or Instructor  
everyone of these has its own pages which beeing render when this specific user interact with a specific part of the application.  


## Tech/Framework used

The Tech used to implement this project is MERNSTACK which include:  
- Mongodb Database 
- Express 
- Nodejs 
- React  
**To get all out of this project you have to know Mongodb in deepth and quite good knowledge of Express , Nodejs and React**  


## Features

- Users Hierarchy 
- Quick access meets users need 
- Responsive  


## Installation
As you might know this project needs :  
- Express 
- Nodejs
- React 
All of these Tech need to be installed on you PC.  

Follow the guide below to help you install all of these.  


**Nodejs** 



First you have to install Node js from the Link below. it is a straight forward process and you select the type of you OS and download then set it up.   

[Nodejs Installation](https://nodejs.org/en/download/)

Then you can create an empty folder on you PC and open up the terminal and be ready for the rest.  

**Express** 

you can install express from the terminal as follows :

NOTE make sure you are in the right folder that you want to use express in.  

```bash
  npm init
  npm install express
```
It is that simple YES.  
Also you an access the link below for more illustration :  

[Express Installation](https://expressjs.com/en/starter/installing.html)   



**React**   
You can install react just by running a react basic application in you project 
just create a folder for the frontend where all the React application will work and be implemented then write in the terminal : 

```bash
  npx create-react-app foldername
```

It will create a basic react applicatoin in your foldername and if it do not exist it will create one for you with the name of the folder you have typed  

Also for more details and guide step by step you can visit the link below:  
[React Setup](https://linuxhint.com/setup-reactjs-on-client-side-in-mern-stack-development/)

these are the main softwares that you may need to install if you need to insall all the packages in the package.json in the project you can install any package by jsut writing: 

```bash
  npm install packagename
```
**Postman**  
the last one you may need just for testing you backend called Postman : 
it is for the developer to know if the backend in total work properly or not by typing the url he want to fetch either post , put or get the data from the backend and hit the send button and see the response  
in other words it simulate the functionality of the client side before implementing it.  
it is a web application and the Installation is a straight forward one you can install it  below:  

[postman Installation](https://www.postman.com/downloads/)  

## Screenshots  
**User Signup**  

![user Signup](Images/userLogin.png)  

**user Login**  

![user Login](Images/userSignuppng.png)  

**user Dashboard**  

![user Dashboard](Images/userDashboard.png)  

**user RegisteredCourses**  

![user RegisteredCourses](Images/userRegistered.png)  

**user All Courses**  

![user allcourses](Images/userAllCourses.png)  

**Admin Dashboard**  

![admin Dashboard](Images/adminDashboard.png)  

**admin add instructor**  

![admin add instructor](Images/adminAddInstructor.png)  

**admin add subject**  

![subject addtion](Images/adminAddSubject.png)  

**admin add another Admin**  

![admin addtoin](Images/adminAddAdmin.png)  

**admin add Company Trainee**  

![admin Add company trainee](Images/adminAddCor.png)  

**instructor add course**  

![instructor add course](Images/instructorAddCourse.png)  

**instrucor add subtitle**  

![add subtitle](Images/instructorAddSubtitle.png)  

**instructor add exam**  

![add exam](Images/instructorAddExam.png)  

**instructor Add Question to Exam** 

![Add Question](Images/instructorAddQuestion.png)  

**instructor view all course**  

![view Course](Images/instructorAllCourses.png)  

**instructor view his courses**  

![view my courses](Images/instructorViewHisCourses.png)  

**instructor change his password**  

![Change Password](Images/instructorChangePassword.png)  

**request signin**  

![signin request](Imgaes/requestSigning.png)  

**Admin keep track of requests**  

![View Requests](Images/adminShowRequests.png)  

**Admin add discount to courses**  

![Course Discount](Images/addDisToAll.png)  

**User try to receive a link to reset his password**  

![Reset Password email](Images/userTryToResetHisPassword.png)  


**Form for the user to reset his password**  

![Reset password Form](Images/userResetHisPasswordForm.png)  

**Instructor view his contract**  

![View Contract](Images/CCCCC.png)  

**Instructor changes his email**  

![Change email](Images/changeHisEmail.png)  

**User Acceptance of Terms and Policy of the system**  

![Terms And Policy](Images/TermsAndPolicy.png) 

**User View courses he is enrolled in**  

![Enrolled courses](Images/regesterdCourseView.png)  


**User View His Registered Courses*  

![Registered Courses](Images/regesterdCourseView.png)  


**User write notes and view videos*  

![View Videos](Images/writeAnote.png)  

**User show the exam*  

![Show Exam](Images/showExam.png)  

**User solve the exam and got a grade**  

![Get The grade](Images/solveAndGotTheGrade.png)  
























## API Reference

#### Add instructor

```http
  post /admin/addinstrutor
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**.|
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|  

#### Add Company Trainee

```http
  post /admin/addcortrainee
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**.  |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**.|
| `Company` | `string` | **Required**.|  

#### Add  new Admin

```http
  post /admin/addadmin
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**.  |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**.| 

#### Add subject

```http
  get /admin/addsubject
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `subject` | `string` | **Required**.  |  

#### Add 

```http
  post /admin/getsubject
```

**returns all subject fetching the data from this API** 

#### get all courses

```http
  get /admin/allcourses
```

**Get all the data about all the courses by Fetching this API**

#### Change password

```http
  put /change/user/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of the user to access the database based on it |  

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `old` | `string` | **Required**. |
| `password` | `string` | **Required**.|  


#### view courses for cortrainee

```http
  get /cortrainee/viewcourse
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `subject` | `string` | **Required**.  |  

**Get all the data about all the courses by Fetching this API but the price of the course**  

#### view courses for cortrainee

```http
  get /course
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. to return this specific course|  

#### register for a course

```http
  post /register/individual/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of the user  |  

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. for the course|

**it used to get the user and add this specific course to its registered course**  

#### instructor add course

```http
  post /instructor/addcourse
```
 

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Title` | `string` | **Required**.|
| `Total Hours` | `Number` | **Required**.|
| `Price` | `Number` | **Required**.|
| `SubjectID` | `string` | **Required**.|
| `Subtitles` | `Array of IDs` | **Required**.|
| `ShortSummary` | `string` | **Required**.|
| `ID` | `string` | **Required**. the instructor who created the course| 

#### view specific instructor courses

```http
  get /instructor/dashboard/:id
```
 

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.this instructor id| 

#### instructor add subtitle

```http
  post /instructor/subtitle
```
 

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `weekOne` | `mongodb document` | **Required**.|
| `Exam` | ` ID` | **Required**. id for the exam for this subtitle |


#### instructor add Exam

```http
  post /instructor/show
```


| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `question` | `array` | **Required**. array of IDs of question|

#### instructor question

```http
  post /instructor/show
```
 

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `theQuestion` | `string` | **Required**.|
| `firstAnswer` | `string` | **Required**.|
| `sercondAnswer` | `string` | **Required**.|
| `thirdAnswer` | `string` | **Required**.|
| `fourthAnswer` | `string` | **Required**.|
| `rightAnswer` | `string` | **Required**.|


#### Signin

```http
  post /signin/user
```
 

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|

**It applied for all type of users**

#### Signup

```http
  post /signup/user
```
**It applied for all type of users**


| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**.|
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|

#### admin change password

```http
  put /change/admin/:id
```
**It applied for all type of users**
|  Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of the admin who needs to edit|

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `old` | `string` | **Required**.|
| `password` | `string` | **Required**.|

#### instructor edit his bio 

```http
  put /instructor/bio/:id
```
|  Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of the instructor who needs to edit his bio|

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bio` | `string` | **Required**. the new bio|  

#### instructor set the grades 

```http
  post /instructor/submit-answers
```
| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `answers` | `array of objects` | **Required**. Array consists of each question ID and the answer the user have choosen|  

#### instructor get the exam 

```http
  post /instructor/show
```
| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `questionArray` | `array` | **Required**.all the questions that will be in the exam|  


#### instructor update that he has accepted the contract

```http
  put /instructor/contract/:id
```
|  Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of the instructor |  

#### user send his email to reset his password

```http
  post /individual/reset-password
```
| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. the email of the user who need to reset his password|  

#### trainee send a request to access the course

```http
  post /accessrequest/:id
```
|  Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of the course |

| Request Body | Type     | Description         |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. id of the trainee who requests the access |  

#### user add rating to the cousre

```http
  post /user/addrating
```
| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `courseId` | `string` | **Required**.| 
| `rating` | `number` | **Required**. the rating of the course|  

#### user add rating to the cousre

```http
  post /user/addrating
```
| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `courseId` | `string` | **Required**.| 
| `rating` | `number` | **Required**. the rating of the course|  

#### addmin update the state of the request as rejected

```http
  post /accessrequest/:id
```
|  Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of the course |

| Request Body | Type     | Description         |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. id of the admin |  

#### guest selecting the gender

```http
  post /guest/createguest
```
| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `gender` | `string` | **Required**.|  








## Running Tests
**note that all the test done in postman application**  

**keep in mind all POST requests done you have to select the body and being row json format**  
**Also all the GET requests have no body just the response**



#### for the question  
write in postman URL **"localhost:8000/question"** post request  
at the body write:  

```bash
{
"theQuestion" : "What is the main purpose of this subtitle", 
"firstAnswer":"abstraction" , 
"secondAnswer" : "poly", 
"thirdAnswer" : "inheritance", 
"fourthAnswer":"none of the above" ,
"rightAnswer":"none of the above"
}
```
**you have to get a response like this:**  
```bash
{
    "Q": "What is the main purpose of this subtitle",
    "firstAnswer": "abstraction",
    "secondAnswer": "poly",
    "thirdAnswer": "inheritance",
    "fourthAnswer": "none of the above",
    "A": "none of the above",
    "_id": "63b8b44a916b4fcdc5a210f8",
    "createdAt": "2023-01-06T23:52:42.636Z",
    "updatedAt": "2023-01-06T23:52:42.636Z",
    "__v": 0
}
``` 

**for add instructor**  
write in postman URL **"localhost:8000/admin/addinstructor"** **post** request  
at the body write:  

```bash
{
        "username":"ahmed" , "email":"mah2@gmail.com" , "password":"nopass"
}
```
**you have to get a response like this:**  
```bash
{
    "successMessage": "new instructor added"
}
``` 


**for add companytrainee**  
write in postman URL **"localhost:8000/admin/addcortrainee"** **post** request  
at the body write:  

```bash
{
        "Name":"ahmed" , "Email":"cor2@gmail.com" , "Password":"nopass" , "Company":"Vodafone"
}
```
**you have to get a response like this:**  
```bash
{
    "successMessage": " Company Trainee added Successfully"
}
``` 

**for add admin**  
write in postman URL **"localhost:8000/admin/addadmin"** **post** request  
at the body write:  

```bash
{
        "username":"ahmed" , "email":"admind@gmail.com" , "password":"nopass" 
}
```
**you have to get a response like this:**  
```bash
{
    "successMessage": "new admin has been added"
}
``` 

**for add subject**  
write in postman URL **"localhost:8000/admin/addsubject"** **post** request  
at the body write:  

```bash
{
        "subject":"Data Science"
}
```
**you have to get a response like this:**  
```bash
{
    "subject": "Data Science",
    "_id": "63b8b6b1916b4fcdc5a21107",
    "createdAt": "2023-01-07T00:02:57.358Z",
    "updatedAt": "2023-01-07T00:02:57.358Z",
    "__v": 0
}
```

**for get subject**  
write in postman URL **"localhost:8000/admin/getsubject"** **GET** request.

**There is no body in this method**  

**you have to get a response like this: ArrayList of JSon of subjects**  
```bash
[
    {
        "_id": "6366c21055dcc6a4d520261d",
        "subject": "Cs",
        "createdAt": "2022-11-05T20:05:36.690Z",
        "updatedAt": "2022-11-05T20:05:36.690Z",
        "__v": 0
    },
    {
        "_id": "6366c27155dcc6a4d5202620",
        "subject": "LVD",
        "createdAt": "2022-11-05T20:07:13.362Z",
        "updatedAt": "2022-11-05T20:07:13.362Z",
        "__v": 0
    },
    {
        "_id": "6366c32c55dcc6a4d5202623",
        "subject": "ddd",
        "createdAt": "2022-11-05T20:10:20.069Z",
        "updatedAt": "2022-11-05T20:10:20.069Z",
        "__v": 0
    },
    {
        "_id": "6366c468a9b3ad1a05ccbaf9",
        "subject": "b",
        "createdAt": "2022-11-05T20:15:36.608Z",
        "updatedAt": "2022-11-05T20:15:36.608Z",
        "__v": 0
    },
    {
        "_id": "6366c4dda9b3ad1a05ccbb00",
        "subject": "c",
        "createdAt": "2022-11-05T20:17:33.579Z",
        "updatedAt": "2022-11-05T20:17:33.579Z",
        "__v": 0
    },
    {
        "_id": "6366c502a9b3ad1a05ccbb05",
        "subject": "Web Development",
        "createdAt": "2022-11-05T20:18:10.224Z",
        "updatedAt": "2022-11-05T20:18:10.224Z",
        "__v": 0
    },
    {
        "_id": "6380861908d784e21be09d0b",
        "subject": "WEB",
        "createdAt": "2022-11-25T09:08:41.469Z",
        "updatedAt": "2022-11-25T09:08:41.469Z",
        "__v": 0
    },
    {
        "_id": "63b8b6b1916b4fcdc5a21107",
        "subject": "Data Science",
        "createdAt": "2023-01-07T00:02:57.358Z",
        "updatedAt": "2023-01-07T00:02:57.358Z",
        "__v": 0
    }
]
```

**for get All Courses**  
write in postman URL **"localhost:8000/admin/allcourses"** **GET** request  
**There is no body in this method**  

**you have to get a response like this: ArrayList of JSon of subjects** 

**you have to get a response like this:**  
```bash
[
    {
        "_id": "63b7f29a8bd4c0cff1fd10f5",
        "Title": "test1",
        "Subtitles": "63b7f29a8bd4c0cff1fd10f4",
        "Rating": 3,
        "TotalHours": 5,
        "Price": 400,
        "Subject": "Cs",
        "ShortSummary": "c1",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T10:06:18.233Z",
        "updatedAt": "2023-01-06T13:33:10.907Z",
        "__v": 0
    },
    {
        "_id": "63b7f44a8bd4c0cff1fd1140",
        "Title": "test2",
        "Subtitles": "63b7f44a8bd4c0cff1fd113f",
        "Rating": 0,
        "TotalHours": 5,
        "Price": 600,
        "Subject": "ddd",
        "ShortSummary": "c2",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T10:13:30.576Z",
        "updatedAt": "2023-01-06T10:13:30.576Z",
        "__v": 0
    },
    {
        "_id": "63b7f4a08bd4c0cff1fd1143",
        "Title": "test3",
        "Subtitles": "63b7f4a08bd4c0cff1fd1142",
        "Rating": 0,
        "TotalHours": 7,
        "Price": 800,
        "Subject": "b",
        "ShortSummary": "c3",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T10:14:56.891Z",
        "updatedAt": "2023-01-06T10:14:56.891Z",
        "__v": 0
    },
    {
        "_id": "63b7f4c78bd4c0cff1fd114a",
        "Title": "test4",
        "Subtitles": "63b7f4c78bd4c0cff1fd1149",
        "Rating": 0,
        "TotalHours": 8,
        "Price": 900,
        "Subject": "WEB",
        "ShortSummary": "c5",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T10:15:35.676Z",
        "updatedAt": "2023-01-06T10:15:35.676Z",
        "__v": 0
    },
    {
        "_id": "63b80abd8f84b64ed5c368c4",
        "Title": "test6",
        "Subtitles": "63b80abd8f84b64ed5c368c3",
        "Rating": 0,
        "TotalHours": 5,
        "Price": 500,
        "Subject": "ddd",
        "ShortSummary": "tt333",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T11:49:17.448Z",
        "updatedAt": "2023-01-06T11:49:17.448Z",
        "__v": 0
    },
    {
        "_id": "63b80fd9a94c2ba46a72a7e3",
        "Title": "t1",
        "Subtitles": "63b80fd9a94c2ba46a72a7e2",
        "Rating": 0,
        "TotalHours": 1,
        "Price": 30,
        "Subject": "ddd",
        "ShortSummary": "t1",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T12:11:05.756Z",
        "updatedAt": "2023-01-06T13:50:30.223Z",
        "__v": 0
    }
]
```

**for change password for a user**  
write in postman URL **localhost:8000/change/user/63b8b86f916b4fcdc5a21112** **PUT** request  
at the body write:  

```bash
{
        "old":"asdasd" , "password":"nopass"
}
```
**you have to get a response like this:**  
```bash
{
    "successMessage": "Password Changed Successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I4Yjg2ZjkxNmI0ZmNkYzVhMjExMTIiLCJpYXQiOjE2NzMwNTAzMjMsImV4cCI6MTY3MzIyMzEyM30.FX--eBew0g4_vVFbU-eBfmjsWZLoWWfBohvl5SThSHw"
}
```


**for get courses for company trainee**  
write in postman URL **"localhost:8000/cortrainee/viewcourse"** **GET** request  

**you have to get a response like this: All courses without the price**  
```bash
[
    {
        "Title": "test1",
        "Rating": "3",
        "TotalHours": 5
    },
    {
        "Title": "test2",
        "Rating": "0",
        "TotalHours": 5
    },
    {
        "Title": "test3",
        "Rating": "0",
        "TotalHours": 7
    },
    {
        "Title": "test4",
        "Rating": "0",
        "TotalHours": 8
    },
    {
        "Title": "test6",
        "Rating": "0",
        "TotalHours": 5
    },
    {
        "Title": "t1",
        "Rating": "0",
        "TotalHours": 1
    }
]
}
```


**for registering for a course**  
write in postman URL **"localhost:8000/register/individual/63b8b86f916b4fcdc5a21112"** **PUT** request  
at the body write The id of the course:  

```bash
{
        {
       "_id":"63b80fd9a94c2ba46a72a7e3"
}
}
```
**you have to get a response like this:**  
```bash
{
    "_id": "63b8b86f916b4fcdc5a21112",
    "role": 2,
    "courses": [
        "63b80fd9a94c2ba46a72a7e3"
    ],
    "username": "eid",
    "email": "eidman@gmail.com",
    "password": "$2a$10$9ttgHeQATLCJz6WopKE4Bes.aBxOg.sT70ui/12g2kiuLBYph3Nca",
    "createdAt": "2023-01-07T00:10:23.325Z",
    "updatedAt": "2023-01-07T00:12:03.416Z",
    "__v": 0
}
```


**for geth the registed courses**  
write in postman URL **"localhost:8000/getregistered/individual/63b8b86f916b4fcdc5a21112"** **GET** request  

**you have to get a response like this:**  
```bash
[
    {
        "_id": "63b80fd9a94c2ba46a72a7e3",
        "Title": "t1",
        "Subtitles": [
            "63b80fd9a94c2ba46a72a7e2"
        ],
        "Rating": "0",
        "TotalHours": 1,
        "Price": 30,
        "Subject": "6366c32c55dcc6a4d5202623",
        "ShortSummary": "t1",
        "instructor": "63b0837b0500300d3f0643fc",
        "createdAt": "2023-01-06T12:11:05.756Z",
        "updatedAt": "2023-01-06T13:50:30.223Z",
        "__v": 0
    }
]
```


**for user signup**  
write in postman URL **"localhost:8000/signup/user"** **POST** request  
at the body write:  

```bash
{"username" : "eid" , "email" : "ei@gmail.com" , "password":"demopassword"}
```
**you have to get a response like this:**  
```bash
{
    "successMessage": "registration success. please signin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I4YmQ4ZjkxNmI0ZmNkYzVhMjExMWQiLCJpYXQiOjE2NzMwNTE1MzYsImV4cCI6MTY3MzIyNDMzNn0.yM7sLDSh4rd-r110JeKx-boD9g9QJbEtjiSjzS0yoFE"
}
```


**for admin signup**  
write in postman URL **"localhost:8000/signup/admin"** **POST** request  
at the body write:  

```bash
{
{"username" : "eid" , "email" : "eiadmin@gmail.com" , "password":"demopassword"}
}
```
**you have to get a response like this:**  
```bash
{
    "successMessage": "registration success. please signin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I4YmRmNzkxNmI0ZmNkYzVhMjExMjAiLCJpYXQiOjE2NzMwNTE2MzksImV4cCI6MTY3MzIyNDQzOX0.kv5w3UI-JV0c2sM3f3zhOacuGnMbed1h1didYvh57Iw"
}
```


**for signin admin**  
write in postman URL **"localhost:8000/signin/admin"** **POST** request  
at the body write:  

```bash
{
{ "email" : "eiadmin@gmail.com" , "password":"demopassword"}}
```
**you have to get a response like this:**  
```bash
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0Ijp7Il9pZCI6IjYzYjhiZGY3OTE2YjRmY2RjNWEyMTEyMCJ9LCJpYXQiOjE2NzMwNTI3OTUsImV4cCI6MTY3MzEzOTE5NX0.WtIZzu-XjBwVFlW5PP5SGJyYR2UcdPFlZyODlItvS60",
    "inst": {
        "_id": "63b8bdf7916b4fcdc5a21120",
        "username": "eid",
        "email": "eiadmin@gmail.com",
        "role": 0
    }
}
```

**for signin user**  
write in postman URL **"localhost:8000/signin/user"** **POST** request  
at the body write:  

```bash
{ "email" : "ei@gmail.com" , "password":"demopassword"}
```
**you have to get a response like this:**  
```bash
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0Ijp7Il9pZCI6IjYzYjhiZDhmOTE2YjRmY2RjNWEyMTExZCJ9LCJpYXQiOjE2NzMwNTI4NjcsImV4cCI6MTY3MzEzOTI2N30.OQOVemnNVz5Qp2cRbqQcg5lYBxy9ZFCAGV-azSf92hM",
    "inst": {
        "_id": "63b8bd8f916b4fcdc5a2111d",
        "username": "eid",
        "email": "ei@gmail.com",
        "role": 2
    }
}
```


**for individual get coures**  
write in postman URL **"localhost:8000/individual/viewcourse"** **GET** request  
at the body write:  

**you have to get a response like this: courses with the price**  
```bash
[
    {
        "Title": "test1",
        "Rating": "3",
        "TotalHours": 5,
        "Price": 400,
        "Subject": "6366c21055dcc6a4d520261d"
    },
    {
        "Title": "test2",
        "Rating": "0",
        "TotalHours": 5,
        "Price": 600,
        "Subject": "6366c32c55dcc6a4d5202623"
    },
    {
        "Title": "test3",
        "Rating": "0",
        "TotalHours": 7,
        "Price": 800,
        "Subject": "6366c468a9b3ad1a05ccbaf9"
    },
    {
        "Title": "test4",
        "Rating": "0",
        "TotalHours": 8,
        "Price": 900,
        "Subject": "6380861908d784e21be09d0b"
    },
    {
        "Title": "test6",
        "Rating": "0",
        "TotalHours": 5,
        "Price": 500,
        "Subject": "6366c32c55dcc6a4d5202623"
    },
    {
        "Title": "t1",
        "Rating": "0",
        "TotalHours": 1,
        "Price": 30,
        "Subject": "6366c32c55dcc6a4d5202623"
    }
]
```


**for instructor add exam**  
write in postman URL **"localhost:8000/instructor/sbow"** **POST** request  
at the body write:  

```bash
{
    "questionArray":["63b8b44a916b4fcdc5a210f8","63b7c7a773f7aeeee5bdc09f"]

}
```
**you have to get a response like this:**  
```bash
{
    "exam": "63b8c42f916b4fcdc5a21125",
    "_id": "63b8c42f916b4fcdc5a21126",
    "createdAt": "2023-01-07T01:00:31.885Z",
    "updatedAt": "2023-01-07T01:00:31.885Z",
    "__v": 0
}
```

**for add subtitle with the exam **  
write in postman URL **"localhost:8000/instructor"** **post** request  
at the body write: EXAM MongoID

```bash
 {

"weekOne": {
"title":"probability",
"video":"https://www.google.com",
"videoDescription":"nothing to tell"

}, "EXAM":"63b8c42f916b4fcdc5a21125"

}

```
**you have to get a response like this:**  
```bash
{
    "weekOne": {
        "title": "probability",
        "video": "https://www.google.com",
        "videoDescription": "nothing to tell"
    },
    "exam": "63b8c42f916b4fcdc5a21125",
    "_id": "63b8c4de916b4fcdc5a21128",
    "createdAt": "2023-01-07T01:03:26.370Z",
    "updatedAt": "2023-01-07T01:03:26.370Z",
    "__v": 0
}
```

**for instructor to get his courses**  
write in postman URL **"localhost:8000/instructor/dashboard/63b8b547916b4fcdc5a210fb"** **GET** request  

**you have to get a response like this: if the instructor did not create any course**  
```bash
[]
```

**for instructor to get his courses**  
write in postman URL **"localhost:8000/instructor/dashboard/63b8c682916b4fcdc5a2112f"** **GET** request  

**you have to get a response like this: is he have created one course and so on**  
```bash
[
    {
        "_id": "63b8c6ad916b4fcdc5a21137",
        "Title": "DemoTitle",
        "Subtitles": [],
        "Rating": "Not Rated Yet",
        "TotalHours": 5,
        "Price": 400,
        "Subject": "Cs",
        "ShortSummary": "Demo Summary",
        "instructor": "mohamed",
        "createdAt": "2023-01-07T01:11:09.420Z",
        "updatedAt": "2023-01-07T01:11:09.420Z",
        "__v": 0
    }
]
```  
**for admin to update the price of the course **  
Write in postman URL **"localhost:8000/admin/updateprice"** **PUT** request  
**In the body of the request write**  
```bash
{

"courseid":"63bb788a402efb7979f895b3" ,"newPrice":120
}


```


**You have to get a response like this as it returns all course info including the updated price**
```bash
{
    "course1": {
        "_id": "63bb788a402efb7979f895b3",
        "Title": "csen2",
        "Subtitles": [
            "63bb7885402efb7979f895b1"
        ],
        "ratingList": [],
        "Rating": 0,
        "view": 0,
        "technical": [],
        "financial": [],
        "other": [],
        "TotalHours": 6,
        "Price": 0,
        "Subject": "63b9ee2092100d7dbd8db8b7",
        "ShortSummary": "test1",
        "instructor": "63ba8d85ebfd119b3ff54abc",
        "previewLink": "test1",
        "createdAt": "2023-01-09T02:14:34.212Z",
        "updatedAt": "2023-01-10T21:33:22.915Z",
        "__v": 0,
        "expire": 0,
        "discount": 53,
        "newprice": 47
    }
}

```  

**for admin to request to be accepted one **  
Write in postman URL **"localhost:8000/admin/updaterequest/63bbfcb55c9ddfdb7510fef0"** **PUT** request  
**In the body of the request write**  
```bash
{
"_id":"63bce1ed7d0cc7e28b83db78" 

}
```  
**You will get an response like this: **  

```blash
{
    "successMessage": "Request Accepted"
}
```  
**For instructor to edit his email **  
Write in postman URL **"localhost:8000/instructor/editemail/63bbfcb55c9ddfdb7510fef0"** **PUT** request  
**In the body of the request write**  
```blash
{

"newEmail":"blabla@gmail.com" 
}
```  
**You will get this response: **  
```blash
{
    "success": "Updated Successfully"
}
```  
**For instructor to remark the exam**  
Write in postman URL **localhost:8000/instructor/submit-answers** **POST** request  
**In the body of the request write**  
```blash
{
"63ba8e904c6785ba62968041":"564"
}
```  
**Note here it is an exam of one question but you got the idea**  
**Also it is an object of the question id and the choosen answer**

**You will get this response: **  
```blash
{
    "success": "you got 0 out of 1"
}
```


## Code Examples  

**below an example of the Modal form that was appeared a lot in this project **

```blash 
const showExam = ()=> (
        <div id ="addExam" className='modal fade' data-backdrop="static">
                <div className='modal-dialog modal-dialog-center modal-lg'>
                    <div className='modal-content'>
                    <form onSubmit={handelExamSubmit}>
                        <div className='modal-header bg-danger text-white' >
                             <h5 className='modal-title'>Exam</h5>
                             <button className='close' data-dismiss='modal'>
                                <span> <i className='fas fa-times'></i></span>
                             </button>
                              </div>
                              <div className='modal-body my-2'>
                            {errorMsg&& showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}


                            {
                                loading ? (
                                     showloading()
                                ) :(
                                    <Fragment>
                               <button className='btn btn-outline-dark btn-block  my-2' data-toggle='modal'  data-target='#addquestion' >
                                                                <i className='fas fa-plus' aria-hidden='true'>Question</i>
                                </button>
</Fragment>


                                )
                             }
                                 
                        </div>
                        <div className='modal-footer'>
                           
                        <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-danger '> Sumbit</button>
                             </div>
                        </form>
                    </div>

                </div>
        </div>
            



    )
```  
Also the handel submit function:  

```blash

const [myExam , setMyExam] =useState({
    EXAM : "" ,
}) 
const {EXAM }= myExam
const handelExamSubmit = async(evt)=>{
    evt.preventDefault(); 

const wholeExam  = {questionArray}
console.log(wholeExam)
const response = await fetch("/exam/show" , 
                            {
                                method:'POST',
                                body:JSON.stringify(wholeExam),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }   
)

        const json = await response.json()

        if(!response.ok){

            setMyExam({...myExam , errorMsg:json.errorMessage})
        }

        if(response.ok){
            setMyExam({EXAM:json._id})
            console.log(myExam)
            }
 }

``` 
#### this handel submit will fetch the data from this API mentioned in the fetch function and also update every thig if you got preplexed about my exam in the state it is just for send it with the request to add subtitle as an id.  

**Snippet for add Subject from the admin**

```blash
const addSubject = async (req,res) => {

    const {subject} = req.body 
    try {
        const subjectExist = await Subject.findOne({subject}) ; 

        if(subjectExist){

            return res.status(400).json({

                errorMessage:"Subject Already Exists"
            })
        }
        const addition = await Subject.create({subject})
        res.status(200).json(addition);


    }
    catch (error) {
        res.status(400).json({error : error.message})

    }
}
```  
#### take from the request the subject and search the database if it is already exits if not create a new one and respond with the new Document created.  

**Snippet for admin add cortrainee**  

```blash
const addcortrainee = async (req , res ) => {
    const {Name , Email , Password , Company} =  req.body 
try{
    const check = await cortrainee.findOne({Email})
    if(check){ return res.status(400).json({errorMessage:"Email already Exist"})}
    const newcorTrainee =  new cortrainee()
    newcorTrainee.Name=Name 
    newcorTrainee.Email = Email 
    newcorTrainee.Company  = Company
    const salt = await bycrpt.genSalt(10); 
    newcorTrainee.Password = await bycrpt.hash(Password, salt); 
    await newcorTrainee.save()
    const token = createToken(newcorTrainee._id)
    res.status(200).json({
        successMessage:" Company Trainee added Successfully"
    })
    // const addition = await cortrainee.create({Name , Email , Password , Company})
    // res.status(200).json(addition)
}
catch(error){
    console.log(error)
    res.status(400).json({errorMessage:"Not Added"})
}
}

```  
#### take all the data from the request and search by mail as it supposed to be unique and if not create new one and hash the password using bycrpt and salt then send the response back to the frontend to handel any thing with the id.Also of course create a token and cookie for any user. 

**For getting all courses by the admin**  
```blash
const getCourses = async (req , res ) => {

    try {

        const courses = await Course.find({}).lean()
        for (var i =0 ; i<courses.length ; i++){
            const temp = await Subject.findById(courses[i].Subject)
           
            const sub = temp.subject 
            courses[i].Subject = sub
           

        }
        

        res.status(200).json(courses)
        console.log(courses)
 

    }
    catch(error){
        res.status(400).json({error: error.message})
   }
}
```
#### when this API fetched and call this function it just search the database for the table who contain the courses and get it all back to the user.  

**Connecting with mongoDb and user the routes** 

```blash 
mongoose.connect(process.env.MONGOURI)
    .then(() =>{
        console.log("MongoDB is connected ")
        app.listen(process.env.PORT, () => {
        console.log("Hello im listening ")
            })
    })
    .catch((error) => {
        console.log(error)
    })
app.use("/api",homeRoutes); 
app.use ("/individual",userRoutes); 
app.use("/instructor" , instructorRoutes);
app.use("/admin", adminRoutes);
app.use("/cortrainee",cortraineeRoutes);
app.use ("/guest" , guestRoutes);
app.use("/signup",signupValidator,validatorResult );
app.use("/signup", signupRoutes);
app.use("/signin",signinRoutes);
  
app.use('/change',changePasswordRoutes)

app.use('/course',eachCourseRoutes)

app.use("/register" , registerRoutes)

app.use("/getregistered" , getRegisteredRoutes)
app.use("/question" , instructorRoutes)
app.use("/exam" , instructorRoutes)
```  
#### Easy it is what express does just connecting with mongodb and respond if it listen to me also app.use is a afunction you call it and told her if the API beging with something -the first argument- go to the routes folder and check the rest of the API and excute the function the route will tell you to call.  

**admin router**  

```blash
const express = require("express") 
const router = express.Router()
const adminController = require("../Controller/admin")


router.post("/addinstructor" ,adminController.addinstructor)


router.post("/addcortrainee", adminController.addcortrainee)


router.post("/addadmin" , adminController.addadmin)

router.post("/addSubject" ,adminController.addSubject)
router.get("/getsubject" ,adminController.getSubject)

router.get("/allcourses" , adminController.getCourses)
```
#### Here we just take the beginning of the API from the app.use which is mentioned above and Complete the whole API from here and call the function from the controller such as add instructor..etc.  

**Admin Schema**  

```blash
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema ( { 

username : {
    type : String , 
    required : true
}, 

email: {
    type :String , 
    required : true
} , 

password : {
    type : String , 
    required : true 
},
role :{
    type :Number ,
    default:0

}
}, {timestamps:true} )

module.exports = mongoose.model("admin",adminSchema)
```

#### Easy one just here you put the model you need anyone need to add a document in the database have to follow it then export it for further use.  

**Frontend the main App Rendering**  
```blash

  <BrowserRouter>
    {isAusthenticated() ? <AuthHeader/> : <Header/>} 
    {/* <Header/> */}
    <main>    
       <Routes>
         
        <Route path="/" element={<Home/>}/>
        <Route exact path = "/signup" element = {<Signup/>} /> 
        <Route exact path = "/signup/instructor" element = {<InstructorsignupForm/>} /> 
        <Route exact path = "/signup/user" element = {<UsersignupForm/>}/> 
        <Route exact path = "/signup/admin" element = {<AdminSignupForm/>}/> 
        <Route  path = "/signin" element = {<Signin/>} />
        <Route exact path = "/signin/user" element = {<Userlogin/>} />
        <Route exact path = "/signin/admin" element = {<SigninForm/>} />
        <Route exact path = "/signin/instructor" element = {<Instructorlogin/>} />
        <Route exact path = "/signin/cortrainee" element = {<CortraineeLogin/>} />
        <Route exact path = "/admin/dashboard" element = {<AdminDashboard/>} />
        <Route exact path = "/registeredcourses" element = {<RegisterdCourses/>}/>
        <Route  path = "/instructor/dashboard" element = {<InstructorDashboard/>} />
        <Route exact path = "/individual/dashboard" element = {<UserDashboard/>} />
        <Route exact path = "/cortrainee/dashboard" element = {<Cortraineedashboard/>} />
        <Route exact path = "/guest/dashboard" element = {<GuestDashboard/>} />
        <Route exact path = "/instructor/dashboard/mycourses" element = {<InstructorCourses/>} />
        <Route exact path = "/allcourses" element = {<AllCourses/>} />
        <Route path="/course" element={<EachCourse/>}/>
        <Route exact path = "/mycourses" element = {<InstructorCourses/>} />  
  
        <Route element = {<NotFound/>} />  

    </Routes>  

  
    </main>
    
    
    
  </BrowserRouter>
```  
#### You tell the Application that if you find this path in the URL just Render this element.  

**add admin Button**  
```blash
<div className='col-md-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal' data-target='#addadmin'>
                            <i className='fas fa-plus' aria-hidden='true'> Add Admin</i>
                        </button>
 </div>
```  
#### I have mentioned it here because it is importat to nore that in the button the **data-target** has to be the same string when you call the function which render the modal itself as below.  

```blash
const showadmin =() =>(
            <div id ="addadmin" className='modal'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handleadminSubmission}>
                    <div className='modal-header bg-info text-white' >
                         <h5 className='modal-title'>Add Admin</h5>
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>

                          
                    <div className='modal-body my-2'>
                            <label className='text-secondary'> User Name </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelinstructorchange}
                            name='username'
                            value={username}
                            />

                            <label className='text-secondary py-1'> Email </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelinstructorchange}
                            name="email"
                            value={email}
                            />
                            <label className='text-secondary py-1'> Password </label>
                            <input
                            type='password'
                            className='form-control'
                            onChange={handelinstructorchange}
                            name='password'
                            value={password}
                            />
                           
                    </div>
                    <div className='modal-footer'>

                        <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-info '> Add Admin</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>
 )

```  
**Instructor set the grade**  
```blash
const setThegrade = async (req,res)=> {

try {
    let grade = 0
    const answers = req.body
    const all = Object.keys(answers).length
    console.log(answers);
    for(let key in answers){
    const ques = await question.findById(mongoose.Types.ObjectId(key))
    const answer = ques.A.trim().toLocaleLowerCase()
    console.log(answer)
        // Object.entries(answers).forEach(([key, answer], index) => {
        // const ques =  question.findById(mongoose.Types.ObjectId(key))
             if(answer===answers[key].trim().toLocaleLowerCase()){
                grade+=1

    }
    
  }
  res.status(200).json({success:`you got ${grade} out of ${all}`})




}
catch(error){  
    res.status(400).json({error:error.message})
    }
}
```  
#### The request body contanis an object of pairs of every question ID and the choosen answer it loops over the object and get the question also set an intial variable 0 and increment it if the right answer which is saved in the question database meets the choosen one.  

**Instuctor request to reset his password**  
```blash
const emailToReset = async(req , res)=> {  


    

    const {email} = req.body
    try {
   
                var transporter = nodemailer.createTransport({
                    service:'gmail',    // true for 465, false for other ports
                    auth: {
                        user: "eidmansour469@gmail.com", // generated ethereal user
                        pass: "fopfiypfrmgpkavx" // generated ethereal password
                    },
                   tls:{ rejectUnauthorized: false}
                })

        const findUser = await instructor.findOne({email})

        if(!findUser) return res.status(400).json({error:"email does not found"})



        
        const token = createToken(findUser._id)

         const mailOptions = {
            from: "eidmansour469@gmail.com", // sender address
            to: findUser.email, // list of receivers
            subject: "Reset Password", // Subject line
            text: `Click on the link to reset your password: http://localhost:3000/instructor/reset/${findUser._id}/${token}`, // plain text body
        }
        // const info = await transporter.sendMail(mailOptions);
        transporter.sendMail(mailOptions, function (error , info){

                if(error){
                    console.log(error)
                
                }
                else{
                    console.log("Success")
                }


        })
        
          

       


    }
    catch(error){
        res.status(400).json({error : error.message})
    }


}
```  
#### the instructor send his email in the request body by filling a form appear to him as shown in images above. the function take this email and check if he is exist in the data base if not return. if he is an exist one it creates a token for him for later authantication also send a reset password link for him to fill a form to update his password.  

**Admin requests in the database**  

```blash
  const getRequests = async (req ,res ) => {

    try {


      const re = await admin.findById(mongoose.Types.ObjectId(req.params)).populate({path:'requests', populate:{path:'cor'},populate:{path:'course'}}).populate({path:'requests', populate:{path:'cor'}})
      res.status(200).json(re.requests)

     }

    catch (error) {
      res.status(400).json({ error: error.message });
    }
  

  }
```  

#### Here the function all it do is just get the id of the admin from the params as authanticated and search for him returning an arraylist of objects of requests to hadel it on his requests page on dashboard.  

**User reset password form**  

```blash
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/individual/updatepassword", {
        method: "PUT",
        body: JSON.stringify({ email , password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        return;
      }
      setError("");
      setSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Password reset successful.</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
     
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};
```  

#### It is a clientside work it is a form has all its input field when the user submit this form the handelSubmit function start execution and it send all the data filled in the form to the above API to take it and update in the database also it has to check first on the token and on the email filled in the form.  

**Render the Exam and Download Pdf**  

```blash
const Sub = ({Subtitle , index})=>{
  const [notes, setNotes] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const videoId = Subtitle.weekOne.video.split("=")[1];
  const examModalId = `exam-modal-${index}`;

const handleNotesChange = e => {
  setNotes(e.target.value);
}
const handleDownloadPdf = () => {
  const pdf = new jsPDF();
  pdf.text(notes, 10, 10);
  pdf.save("notes.pdf");
}
  const videoContainerId = `video-container-${index}`;
  return  (<div className="text-left">
    <ExamModal subtitleId={Subtitle._id} key={Subtitle._id} questions={Subtitle.exam.question} />
 <button className="btn-link" data-toggle="collapse" data-target={`#${videoContainerId}`}><p><strong>Subtitle {index+1}: </strong>{Subtitle.weekOne.title}</p></button>
 
 <div id={videoContainerId} class="collapse">
 
  <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div className='py-1'>
   <textarea id="notes-textarea" value={notes} onChange={handleNotesChange} />
   <button className='btn btn-outline-danger btn-block' onClick={handleDownloadPdf} disabled={notes.length===0}>
      <i className='fas fa-download' aria-hidden='true'>Notes as PDF</i>
    </button>
    </div>
  <div className='py-1'><p>{Subtitle.weekOne.videoDescription}</p></div>
  <div className='py-1'><p><strong>Hours : </strong>{Subtitle.TotalHours}</p></div>
  <div className='py-1'><button className='btn btn-outline-danger btn-block' data-toggle='modal'  data-target='#exam'>
                            <i className='fas fa-danger' aria-hidden='true'> Exam</i>

                        </button>
  </div>
 </div>
    </div>
    )
}
```  

#### Sub component here take the subtitle and the index it is passed from anothr Component which handel the course it self so it is as a child of it so it take each subtitle in the course and perform mapping for it as it access all the subtitle fields and show them as the exam. also each exam has a textarea under it as shown in the images above the button of download pdf became enable when the user type anything in textarea as shown in button disabled attribute when the length is zero it will be disabled.  

**Render enrolled courses**  

```blash
if (role ===1){
        return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {course &&
                        <BeforeRegistrationCourseDetails key={course._id} course={course}/>
                 }
            </div>
        </div>

        )
                    
    
                    }
    else if (role===4 ){
        return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {course &&
                        <Syllabus key={course._id} course={course}/>
                 }
            </div>
        </div>

        )

        
    }
    else if (role ===2){
        return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {course &&
                        <Syllabus key={course._id} course={course}/>
                 }
            </div>
        </div>

        )
    }
   
    
}
```  
#### In this code snippet there is a check on the role of the user as every type of users of the application has a unique role nubmer and never got updated it is default value in the backend after authanticate the user set this value while creating him/her.  
#### we check if the user's role is 2 that means this is an individual user if it is 1 it means he is an instructor and see the course details in different way  is the company trainee who can not see the course price even if he is enrolled in the course.



## How to Use It  

it is as easy as you can see a **Src** folder contain all backend login and also an important folder inside it **Frontend** which hold all the frontend logic inside in as mentioned in the code Examples above you can navigate form her to there and link both applications with each other via APIs fetching and controller handling.  


## Contributing

Contributions are always welcome!

you can send me email via `eidmansour45@gmail.com` to ask for contribution.  


## Credit

A lot of credit goes for net ninja and Web store maker both are youtube channels.  
they helped us a lot to reach this point in this project. you can reach their channels by the link below:  
[WebStoreMaker](https://www.youtube.com/@WebStoreMaker)  
[TheNetNinja](https://www.youtube.com/@NetNinja)  


## License

[Eid Mansour](https://www.linkedin.com/in/eid-mansour-45892a218/)  [Youssef Samy](https://github.com/youssefsamy20)
















  
 











#   E l e a r n i n g  
 