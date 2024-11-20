# React User Management System

A web application built with React.js that allows users to view, add, edit, and delete user details through a mock backend API.

## 🚀 Demo

Live demo: [Project Demo Link](https://github.com/raviteja-salva198/Ajackus-Assignment)

## ✨ Features

- View list of users with their details
- Add new users to the system
- Edit existing user information
- Delete users from the system
- Pagination/Infinite scrolling for user list
- Client-side form validation
- Error handling for API failures

## 🛠️ Technologies Used

- React.js
- Styled Components
- Axios
- JSONPlaceholder API

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/raviteja-salva198/Ajackus-Assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Ajackus-Assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 💻 Usage

### View Users
- The homepage displays a list of users with their ID, First Name, Last Name, Email, and Department
- Users are displayed in a paginated format

### Add User
1. Click on the "Add User" button
2. Fill in the required details in the form
3. Submit the form to add a new user

### Edit User
1. Click on the "Edit" button next to a user
2. Modify the user details in the form
3. Save changes to update the user information

### Delete User
1. Click on the "Delete" button next to a user
2. Confirm the deletion in the popup dialog

## 🌟 Features in Detail

### User Interface
- Clean and intuitive design
- Responsive layout
- Easy-to-use forms for data input
- Clear feedback messages for user actions

### Backend Integration
- Integration with JSONPlaceholder API
- Endpoints used:
  - GET `/users` - Fetch all users
  - POST `/users` - Add new user
  - PUT `/users/:id` - Update user
  - DELETE `/users/:id` - Delete user

### Error Handling
- Graceful handling of API failures
- User-friendly error messages
- Loading states for better UX

### Form Validation
- Client-side validation for all input fields
- Real-time validation feedback
- Required field checks
