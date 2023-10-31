import { Container } from '@mui/material';
import './App.css';
import TasksDesk from './components/TasksDesk';
import ThemeContext from './components/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeContext>
      <Container>
        <Header />
        <TasksDesk />
      </Container>
    </ThemeContext>
  );
}

export default App;
