
import { TextField, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useTaskStore } from '../../store/taskStore';
import './SearchBar.css';

const SearchBar = () => {
  const searchTerm = useTaskStore((state) => state.searchTerm);
  const setSearchTerm = useTaskStore((state) => state.setSearchTerm);

  return (
    <Box className="search-bar-container">
      <Search className="search-bar-icon" />
      <TextField
        className="search-bar-input"
        fullWidth
        variant="standard"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
