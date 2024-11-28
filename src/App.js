import logo from './logo.svg';
import './App.scss';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
      <MainLayout>
        <HomePage />
      </MainLayout>
    );
  }

export default App;
