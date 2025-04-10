
import { List, Typography } from '@mui/material';
import { useTaskStore } from '../../store/taskStore';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
  const { tasks, filter, searchTerm } = useTaskStore();

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'completed' && task.completed) || 
      (filter === 'active' && !task.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <List className={`task-list-container ${filteredTasks.length > 5 ? 'scrollable-list' : ''}`}>
      {filteredTasks.length === 0 ? (
        <Typography className="empty-state" variant="body1">
          No tasks found
        </Typography>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </List>
  );
};

export default TaskList;
