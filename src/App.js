import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={HomePage}/>
        <Route path='/register' Component={RegisterPage}/>
      </Routes>
    </Router>
  );
}

export default App;
