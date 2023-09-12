# Skyleap - Social Media App

Skyleap is a social media web application that allows users to create accounts, log in, create posts, read posts from other users, and comment on them. It's built using Node.js, Express.js, MySQL, and React.js.

## Features

- **User Login:** Skyleap provides user registration and login functionality.
- **Create Posts:** Logged-in users can create and share their posts.
- **Read Posts:** Users can view posts created by other users and written by them as well.
- **Commenting:** Users can engage in discussions by commenting on posts.

## Technologies Used

- **Frontend:** React.js is used to build the client-side of the application.
- **Backend:** Node.js and Express.js are used to create the server and handle API requests.
- **Database:** MySQL is used for data storage.
- **Styling:** CSS and Bootstarp are used for styling.

## Setup Instructions

1. Clone the repository to your local machine:
   
   git clone <repository-url>
   
2. Navigate to the project directory:
   
   cd skyleap
   
3. Install the required dependencies for both the frontend and backend:
   
   cd client
   npm install
   cd ../server
   npm install
   
4. Configure the database:
   
- Set up a MySQL database and create the necessary tables (users, posts, comments, etc.). Update the database configuration in the server's `.env` file.
  
5. Start the backend server:
   
  cd server
  npm start
  
6. Start the frontend development server:
   
  cd client
  npm start
    
7. Access the app in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to contribute to Skyleap, please fork the repository and create a pull request.








