## Getting Started with Node.js

This repository contains the revised working code for the final project of the free Simplilearn.com course "Getting Started with Node.js". The original project used a local MongoDB Community Server for database management, but this version has been updated to utilize MongoDB Atlas, a cloud-based database service.

**Key Changes:**

* **MongoDB Atlas Integration:** The code has been adapted to connect to MongoDB Atlas instead of the local MongoDB server.
* **Enhanced Security:** The insecure use of `allowInsecurePrototypeAccess` for the Handlebars templating engine has been removed.
* **Mongoose Conversion:** Mongoose documents are now converted to plain objects, providing a cleaner and more efficient approach.
* **Environment Variables:**  The database configuration is now stored in a `.env` file, following best practices.
* **Control Flow with `.then` and `.catch`:** `.then` and `.catch` blocks are used effectively to manage asynchronous operations and error handling.

**Project Description:**

This project utilizes Node.js, Express, MongoDB Atlas, and Handlebars to create a basic web application. The application allows users to create, read, update, and delete data within a MongoDB database. 

**Getting Started:**

1. **Prerequisites:**
    * Node.js and npm installed
    * MongoDB Atlas account
2. **Clone the Repository:**
    ```bash
    git clone https://github.com/shaul-mo/getting-started-with-nodejs.git
    ```
3. **Create a `.env` File:**
    * Create a file named `.env` in the root directory.
    * Add the following environment variables:
        ```
        MONGODB_URI=your_mongodb_atlas_connection_string
        ```
    * Replace `your_mongodb_atlas_connection_string` with your actual connection string from MongoDB Atlas.
4. **Install Dependencies:**
    ```bash
    npm install
    ```
5. **Start the Server:**
    ```bash
    npm start
    ```

**Further Exploration:**

* **MongoDB Atlas Documentation:** [https://www.mongodb.com/docs/atlas/](https://www.mongodb.com/docs/atlas/)
* **Node.js Documentation:** [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
* **Express Documentation:** [https://expressjs.com/](https://expressjs.com/)
* **Handlebars Documentation:** [https://handlebarsjs.com/](https://handlebarsjs.com/)
* **Simplilearn: Getting started with NodeJS** [https://www.simplilearn.com/learn-nodejs-basics-free-course-skillup/](https://www.simplilearn.com/learn-nodejs-basics-free-course-skillup/)

**Contributing:**

Contributions are welcome! Feel free to submit a pull request with bug fixes or improvements. 

**License:**

This project is licensed under the MIT License. 

