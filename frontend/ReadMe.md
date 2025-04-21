src/
  components/        # Presentational (UI) components
    NavBar.jsx
    Dashboard.jsx
    ActivityForm.jsx
    ActivityList.jsx
    WorkoutForm.jsx
    WorkoutList.jsx
    StatsOverview.jsx
    GraphStats.jsx  # npm install recharts
    GoalForm.jsx
    GoalList.jsx
  containers/        # Smart/container components (state, logic)
    ActivityContainer.jsx
    WorkoutContainer.jsx
    StatsContainer.jsx
    GoalContainer.jsx
  services/          # API and data-fetching logic
    activityService.js
    workoutService.js
    statsService.js
    goalService.js
  utils/             # Utility functions/helpers
    dateUtils.js
  App.jsx            # Main app, routing, layout
  index.js           # Entry point
  index.css          # Global styles
  App.css            # App-specific styles
