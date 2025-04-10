import { Box, Paper, AppBar, Toolbar, Typography } from '@mui/material';
import TaskForm from './components/TaskForm/TaskForm';
import SearchBar from './components/SearchBar/SearchBar';
import FilterTabs from './components/FilterTabs/FilterTabs';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: '#455a64' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <TaskForm />
        <SearchBar />
        <FilterTabs />
        <TaskList />
      </Paper>
    </Box>
  );
}

export default App;
