
import { Tabs, Tab } from '@mui/material';
import { useTaskStore } from '../../store/taskStore';
import './FilterTabs.css';

const FilterTabs = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);

  return (
    <Tabs value={filter} onChange={(e, newValue) => setFilter(newValue)} className="filter-tabs-container">
      <Tab label="All" value="all" />
      <Tab label="Active" value="active" />
      <Tab label="Completed" value="completed" />
    </Tabs>
  );
};

export default FilterTabs;
