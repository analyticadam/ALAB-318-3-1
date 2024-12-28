# **Fruits and Vegetables CRUD App**

## **Overview**

This project is a full-stack CRUD (Create, Read, Update, Delete) application that manages a collection of fruits and vegetables. It demonstrates server-side rendering, RESTful API design, and middleware integration. The project is designed for learning and practicing full-stack web development.

---

## **Features**

- **Fruits and Vegetables Management**:
  - Add, view, update, delete, and partially update fruits and vegetables.
- **RESTful API**:
  - Separate endpoints for fruits and vegetables with full CRUD operations.
- **Forms**:
  - User-friendly forms for adding new fruits and vegetables via server-side rendering.
- **Error Handling**:
  - Clear JSON error responses for invalid inputs or missing data.

---

## **Getting Started**

### **Prerequisites**

- Node.js installed on your machine.
- A package manager like `npm` or `yarn`.

---

### **Installation**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

### **Usage**

1. Start the server:

   ```bash
   node index.js
   ```

2. Open your browser and test the following routes:

   - [Home Page](http://localhost:3000/)
   - [Fruits Form](http://localhost:3000/fruits/new)
   - [Vegetables Form](http://localhost:3000/vegetables/new)

---

### **Routes**

#### **Rendered Views**

| Method | Route             | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | `/`               | Home page                       |
| GET    | `/index`          | Displays a simple index message |
| GET    | `/fruits/new`     | Form to add a new fruit         |
| GET    | `/vegetables/new` | Form to add a new vegetable     |

#### **RESTful API**

| Method | Route                 | Description                        |
| ------ | --------------------- | ---------------------------------- |
| GET    | `/api/fruits`         | View all fruits                    |
| GET    | `/api/fruits/:id`     | View a specific fruit by ID        |
| POST   | `/api/fruits`         | Add a new fruit                    |
| DELETE | `/api/fruits/:id`     | Delete a fruit by ID               |
| PUT    | `/api/fruits/:id`     | Replace a fruit by ID              |
| PATCH  | `/api/fruits/:id`     | Partially update a fruit by ID     |
| GET    | `/api/vegetables`     | View all vegetables                |
| GET    | `/api/vegetables/:id` | View a specific vegetable by ID    |
| POST   | `/api/vegetables`     | Add a new vegetable                |
| DELETE | `/api/vegetables/:id` | Delete a vegetable by ID           |
| PUT    | `/api/vegetables/:id` | Replace a vegetable by ID          |
| PATCH  | `/api/vegetables/:id` | Partially update a vegetable by ID |

---

### **Technologies Used**

- **Node.js**: Backend runtime.
- **Express**: Web framework.
- **express-react-views**: Server-side rendering of JSX views.
- **Body-Parser**: Middleware for parsing incoming request bodies.

---

### **Testing**

#### Using Postman or cURL

Test the RESTful API endpoints with JSON payloads.

Example POST request to add a new fruit:

```bash
curl -X POST http://localhost:3000/api/fruits \
     -H "Content-Type: application/json" \
     -d '{"name": "Apple", "color": "Red"}'
```

#### Browser

Visit `/fruits/new` or `/vegetables/new` to add new items via forms.

---

### **Error Handling**

- **Invalid IDs**:
  ```json
  { "error": "Invalid ID" }
  ```
- **Missing Fields**:
  ```json
  { "error": "Name and color are required." }
  ```

---

### **Project Structure**

```
ALAB-318-3-1/
│
├── data/
│   ├── fruits.js       # Array of fruits
│   └── vegetables.js   # Array of vegetables
│
├── views/
│   ├── fruits/
│   │   └── New.jsx     # Form for adding new fruits
│   ├── vegetables/
│   │   └── New.jsx     # Form for adding new vegetables
│
├── index.js            # Main application file
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

### **Future Improvements**

- Add a front-end interface for displaying and interacting with the data.
- Implement database integration for persistent storage.
- Add user authentication for data management.
- Enhance API responses with additional metadata.

---

### **Known Issues**

- Currently, data is stored in memory and will reset upon server restart.
- Limited front-end interactivity.

---

### **Author**

Adam Farley - Developer of the project
