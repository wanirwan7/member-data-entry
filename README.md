# Member Data Entry Project

This project is designed to facilitate the entry of member data through a web form. It includes fields for various member details and saves the data to a database using JavaScript.

## Project Structure

```
member-data-entry
├── src
│   ├── css
│   │   └── styles.css        # Styles for the member data entry form
│   ├── js
│   │   └── scripts.js        # Client-side JavaScript for form handling
│   └── index.html            # Main HTML document with the member data form
├── server
│   ├── app.js                # Entry point for the server-side application
│   └── database.js           # Manages database connection and data saving
├── package.json              # npm configuration file with project dependencies
└── README.md                 # Project documentation
```

## Features

- User-friendly form for entering member data.
- Input fields for:
  - Name
  - Date of Birth
  - Place of Birth
  - Email
  - Contact Number
  - Address
  - KTP Photo
  - Institution
- Data validation and submission handling using JavaScript.
- Server-side handling of data storage in a database.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd member-data-entry
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   node server/app.js
   ```

5. Open your browser and go to `http://localhost:3000` to access the member data entry form.

## Usage Guidelines

- Fill in all required fields in the form.
- Ensure that the email and contact number are in the correct format.
- Upload a valid KTP photo.
- Submit the form to save the data to the database.

## License

This project is licensed under the MIT License.# member-data-entry
