# FitBits - Layered Architecture Implementation

This project implements a fitness tracking application using a layered architecture pattern with Django backend and React frontend.

## Project Structure

```
FitBits_layered/
├── backend/
│   └── fitbits/
│       ├── fitbits/
│       │   ├── settings.py
│       │   └── ...
│       └── workouts/
│           ├── models.py
│           ├── serializers.py
│           ├── views.py
│           ├── services.py
│           └── repositories.py
└── frontend/
    ├── package.json
    └── src/
        ├── components/
        │   ├── WorkoutList.js
        │   ├── WorkoutForm.js
        │   └── ...
        ├── contexts/
        │   └── AuthContext.js
        ├── services/
        │   └── workoutService.js
        └── App.js
```

## Architecture Layers

### Backend (Django)

1. **Presentation Layer (Views)**
   - Handles HTTP requests and responses
   - Validates input data
   - Delegates to business logic layer
   - Returns appropriate HTTP responses

2. **Business Logic Layer (Services)**
   - Implements business rules and logic
   - Manages transactions
   - Coordinates between presentation and data access layers
   - Handles business-specific operations

3. **Data Access Layer (Repositories)**
   - Encapsulates database operations
   - Provides clean interface for CRUD operations
   - Abstracts database implementation details
   - Uses Django ORM for database operations

4. **Database Layer**
   - PostgreSQL database
   - Managed by Django ORM
   - Handles data persistence
   - Provides data integrity and relationships

### Frontend (React)

1. **Presentation Layer (Components)**
   - Displays workout data
   - Handles user interactions
   - Provides UI components
   - Manages form state

2. **Business Logic Layer (Services)**
   - Manages API communication
   - Handles data transformation
   - Implements frontend business rules
   - Manages state and data flow

3. **Data Access Layer (API)**
   - Axios HTTP client
   - Handles API requests and responses
   - Manages authentication
   - Provides data caching and error handling

4. **State Management Layer**
   - React Context API
   - Manages application state
   - Handles user authentication
   - Provides global state access

## Setup Instructions

### Backend Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   cd backend/fitbits
   pip install -r requirements.txt
   ```

3. Set up the database:
   ```bash
   python manage.py migrate
   ```

4. Run the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
DJANGO_SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=fitbits
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

## API Endpoints

- GET /api/workouts/ - List all workouts
- POST /api/workouts/ - Create a new workout
- GET /api/workouts/{id}/ - Get a specific workout
- PUT /api/workouts/{id}/ - Update a workout
- DELETE /api/workouts/{id}/ - Delete a workout

## Features

- User authentication
- Workout tracking
- CRUD operations for workouts
- Responsive UI
- Form validation
- Error handling
- Data persistence 