# Codesticth-Challenge

A web application for a fictional e-commerce platform built in reactjs with redux, hooks and scss.

<img src="https://github.com/ConfidenceDev/Codesticth-Challenge/blob/main/public/logo.png" width="96" alt="icon">

# Demo

<p float="left">
<img src="https://github.com/ConfidenceDev/Codesticth-Challenge/blob/main/src/assets/demo.png" width="800" alt="demo">
</p>

# How to Run

1. Clone or Download project and unzip
2. Authentication: We will utilize firebase free authentication service for our login and registration. Create a new firebase project at <a href="https://console.firebase.google.com/">https://console.firebase.google.com/</a> and copy config object, similar to:

```
    export const firebaseConfig = {
        apiKey: "<Your API Key>",
        authDomain: "<Your Auth Domain>",
        projectId: "<Your Project ID>",
        storageBucket: "<Your Storage Bucket>",
        messagingSenderId: "<Your Sender ID>",
        appId: "<Your APP ID>",
    };
```

3. Update project firebase config with your config in the file: src/firebase/config.js
4. Install Packages: You will need NodeJS installed on your machine to run the project, if you don't have NodeJS installed, head over to: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a> <br />
   Run this command to install all required packages

```
npm install
```

5. Run Backend: No database is currently implemented therefore, all data is stored in json files in the <b>db</b> folder: src/db <br />
   The backend sever simply stores data to the json files, when placing orders and writing reviews.

```
npm run backend
```

6. Run Frontend: To run application use

```
npm run frontend
```

# Contact

For inquires, support, bug reports and suggestions send me a mail@: confidostic3@gmail.com

- Twitter: @ConfidenceDev
