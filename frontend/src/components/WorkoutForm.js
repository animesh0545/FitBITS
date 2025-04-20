import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { workoutService } from '../services/workoutService';

const WORKOUT_TYPES = [
  'Running',
  'Cycling',
  'Swimming',
  'Weight Training',
  'Yoga',
  'HIIT',
  'Walking',
  'Other',
];

function WorkoutForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState({
    date: new Date(),
    type: '',
    duration: '',
    calories_burnt: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      loadWorkout();
    }
  }, [id]);

  const loadWorkout = async () => {
    try {
      const data = await workoutService.getWorkout(id);
      setWorkout({
        ...data,
        date: new Date(data.date),
      });
    } catch (error) {
      console.error('Error loading workout:', error);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!workout.date) newErrors.date = 'Date is required';
    if (!workout.type) newErrors.type = 'Type is required';
    if (!workout.duration || workout.duration <= 0) newErrors.duration = 'Duration must be greater than 0';
    if (!workout.calories_burnt || workout.calories_burnt <= 0) newErrors.calories_burnt = 'Calories burnt must be greater than 0';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (id) {
        await workoutService.updateWorkout(id, workout);
      } else {
        await workoutService.createWorkout(workout);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving workout:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          {id ? 'Edit Workout' : 'Add Workout'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={workout.date}
                  onChange={(date) => setWorkout({ ...workout, date })}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={!!errors.date}
                      helperText={errors.date}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Type"
                value={workout.type}
                onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
                fullWidth
                error={!!errors.type}
                helperText={errors.type}
              >
                {WORKOUT_TYPES.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Duration (minutes)"
                type="number"
                value={workout.duration}
                onChange={(e) => setWorkout({ ...workout, duration: parseInt(e.target.value) })}
                fullWidth
                error={!!errors.duration}
                helperText={errors.duration}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Calories Burnt"
                type="number"
                value={workout.calories_burnt}
                onChange={(e) => setWorkout({ ...workout, calories_burnt: parseInt(e.target.value) })}
                fullWidth
                error={!!errors.calories_burnt}
                helperText={errors.calories_burnt}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {id ? 'Update Workout' : 'Add Workout'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default WorkoutForm; 