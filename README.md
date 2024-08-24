# 🏥 CRM Medical Center

CRM Medical Center is a management dashboard created for a medical center that
allows for the administration of client data, employees, exercises, and other
information. This project is built using Vue 3, Composition API, Pinia, Axios,
TailwindCSS, Vite, and Firebase.

## 🚀 Features

### 📋 Sidebar Menu

The sidebar menu is located on the left side and contains the following tabs:

- **🖨️ Scanner:** Functionality to scan documents or other information
  (optional, depending on future requirements).
- **👥 Employees:** View and manage the list of employees (add, edit, delete).
- **🧑‍⚕️ Clients:** View and manage the list of clients.
- **🏋️ Exercises:** View and manage the list of exercises.
- **🖼️ Banners:** Manage the banners used in the medical center.
- **🔐 Logout/Login:** Button for logging in and out of the system.

### 🔝 Top Navigation Bar

The top navigation bar contains:

- **🏥 Logo** (left side): Displays the medical center logo.
- **🧑‍💻 User Avatar** (right side): Displays the avatar of the logged-in user.

### 📇 Client Management

Clicking on the "Clients" tab opens the client management component:

- **📃 Client List:** Displays the clients' names, categories, phone numbers,
  and last update dates.
- **❌ Delete Client:** Option to delete a client from the list.
- **➕ Add Client:** A button to open a form for adding a new client. The form
  fields include name, category, and phone number.
- **🔍 Search Clients:** Search functionality based on input characters. The
  search results are automatically updated in the client list.
- **📑 Category Selector:** A dropdown to select a specific category to filter
  and display only clients belonging to the selected category.

### 🛡️ Authentication

- **👤 User Authentication:** Integrated with Firebase for secure user login and registration.
- **🔐 Password Recovery:** Ability to reset password via email.
- **🔑 Default Admin Login:** Use the username and password combination `admin` to log in with administrative privileges.

### 🔍 Advanced Search & Filters

- **⚡ Fast Search:** Real-time search and filtering capabilities for quick access to client and employee information.
- **🔍 Category Filters:** Filter clients and employees by categories for more organized management.

## 🛠️ Technologies

The project is built using the following technologies:

- **⚙️ Vue 3** with Composition API: For building the user interface.
- **📦 Pinia:** For state management.
- **📡 Axios:** For making HTTP requests to the API.
- **⚡ Vite:** For fast build and development.
- **🔥 Firebase:** For user authentication and data storage.
- **🧹 Biome.js:** For linting, formatting, and type checking.

## 📝 Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/medical-center-crm.git
   ```

Navigate to the project directory: `cd medical-center-crm` Install the
dependencies: `npm install` Start the development server: `npm run dev`

The project will be running on your local server at http://localhost:3000.

🔧 Firebase Setup

1. Create a new project in Firebase and get your configuration details.
2. Create a firebaseConfig.js file in the src directory and add your Firebase
   configurations.
3. Make sure to set up authentication and Firestore in your Firebase project.

📜 License

This project is licensed under the MIT License. See the LICENSE file for more
details

This updated `README.md` includes emojis to visually break up the sections and
make the document more appealing. If you need further customization or
additional sections, just let me know!
