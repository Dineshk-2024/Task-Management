
import { TextField, Button, Box } from '@mui/material';
import { useTaskStore } from '../../store/taskStore';
import { useState } from 'react';
import './TaskForm.css';

const TaskForm = () => {
  const [newTask, setNewTask] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    addTask(newTask);
    setNewTask('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="task-form">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" type="submit">Add</Button>
    </Box>
  );
};

export default TaskForm;
