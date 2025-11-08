# Todo App - INI POC UI

A modern, dockerized Todo application built with React that allows users to create, edit, modify, and delete tasks.

## Features

✨ **Full CRUD Operations**
- ✅ Create new tasks
- ✏️ Edit existing tasks
- ✓ Mark tasks as complete/incomplete
- 🗑️ Delete tasks

📊 **Task Statistics**
- Total tasks counter
- Completed tasks tracker
- Pending tasks counter

🎨 **Modern UI**
- Clean and intuitive interface
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Beautiful gradient color scheme

## Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (for local development)

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/krishnanMurali/ini-poc-ui.git
cd ini-poc-ui
```

2. Build and run with Docker Compose:
```bash
docker-compose up -d
```

3. Access the application:
```
http://localhost:3000
```

4. Stop the application:
```bash
docker-compose down
```

### Running Locally (Development)

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser:
```
http://localhost:3000
```

## Building for Production

### Build Docker Image
```bash
docker build -t ini-poc-ui .
```

### Run Docker Container
```bash
docker run -d -p 3000:80 --name todo-app ini-poc-ui
```

## Technology Stack

- **Frontend**: React 18
- **Styling**: Custom CSS with gradient designs
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (for production)

## Project Structure

```
ini-poc-ui/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Styling
│   └── index.js        # Entry point
├── Dockerfile          # Docker build configuration
├── docker-compose.yml  # Docker Compose configuration
├── package.json        # Dependencies
└── README.md          # Documentation
```

## Usage Guide

### Creating Tasks
1. Type your task in the input field
2. Click "Add Task" or press Enter
3. Task appears in the list with timestamp

### Editing Tasks
1. Click the "✏️ Edit" button on any task
2. Modify the text in the input field
3. Click "✓ Save" or press Enter to save
4. Click "✕ Cancel" or press Escape to discard changes

### Completing Tasks
1. Click the checkbox next to any task
2. Task will be marked with strikethrough
3. Click again to mark as incomplete

### Deleting Tasks
1. Click the "🗑️ Delete" button on any task
2. Task is immediately removed from the list

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License

---

**Created for INI Organization Proof of Concept**