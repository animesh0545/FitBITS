import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { format } from 'date-fns';
import { useAuth } from '../contexts/AuthContext';
import { workoutService } from '../services/workoutService';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      loadWorkouts();
    }
  }, [user]);

  const loadWorkouts = async () => {
    try {
      const data = await workoutService.getWorkouts();
      setWorkouts(data);
    } catch (error) {
      console.error('Error loading workouts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await workoutService.deleteWorkout(id);
      loadWorkouts();
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        My Workouts
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => navigate('/workouts/new')}
        sx={{ mb: 2 }}
      >
        Add Workout
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Duration (min)</TableCell>
              <TableCell>Calories Burnt</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workouts.map((workout) => (
              <TableRow key={workout.id}>
                <TableCell>{format(new Date(workout.date), 'MMM dd, yyyy')}</TableCell>
                <TableCell>{workout.type}</TableCell>
                <TableCell>{workout.duration}</TableCell>
                <TableCell>{workout.calories_burnt}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/workouts/${workout.id}/edit`)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(workout.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default WorkoutList; 