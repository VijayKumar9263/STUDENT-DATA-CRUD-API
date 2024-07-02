# Project Title: Student Data CRUD API

This project demonstrates a CRUD (Create, Read, Update, Delete) application for managing student data using a custom API built with Node.js and a React.js frontend. The API stores data in a JSON file, allowing operations like adding new students, editing existing ones, and deleting students directly from the UI.

## Project Structure

The project is divided into two main parts:
- **Node.js API**: Handles CRUD operations with dummy data stored in a JSON file.
- **React.js UI**: Provides a user-friendly interface to interact with the API, displaying student data in a tabular format.

## Features

- View a list of students with details such as name, age, and grade.
- Add new students to the list.
- Edit existing student details.
- Delete students from the list.
- Data updates are reflected in real-time in the JSON file used as a database.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js
- **Data Storage**: JSON file


## Dependencies

To run this project locally, ensure you have the following dependencies installed:
- Node.js
- Axios (for API requests in React)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VijayKumar9263/STUDENT-DATA-CRUD-API.git
    ```

2. **Navigate to the project directory:**
    ```bash
   cd STUDENT-DATA-CRUD-API
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Start the server:**
    ```bash
    # FOR BACKEND
       cd server
       node index.js

    # FOR FRONTEND
        cd frontend
        npm start
    ```
    
## Usage
1. **Access the server for API data:**
    Open your web browser and go to `http://localhost:3000/api/users`.

2. **Access the server for UI:**
    Open your web browser and go to `http://localhost:3001`.

## Screenshots

### UI
![image](https://github.com/VijayKumar9263/STUDENT-DATA-CRUD-API/assets/134833144/e4b656fc-4b11-4ced-9af7-2d3c1eeab134)


### ADD NEW STUDENT DETAILS
![image](https://github.com/VijayKumar9263/STUDENT-DATA-CRUD-API/assets/134833144/86c7af2d-ca4a-4d89-854b-3484aae36473)


### EDIT STUDENT DETAILS
![image](https://github.com/VijayKumar9263/STUDENT-DATA-CRUD-API/assets/134833144/2a3675ed-0ed6-42a3-890f-7c3032902b34)


### STUDENT DETAILS IN JSON FORMATE
![image](https://github.com/VijayKumar9263/STUDENT-DATA-CRUD-API/assets/134833144/5db97949-44c1-4359-ace0-4e068bb31283)


## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspiration from various web development tutorials.
- Thanks to the open-source community for their valuable resources.
