
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTaskStore } from '../../store/taskStore';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <ListItem className="task-item" divider>
      <Checkbox checked={task.completed} onChange={() => toggleTask(task.id)} />
      <ListItemText 
        primary={task.text} 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
      <IconButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
