import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={LoginPage}/>
        <Route path='/register' Component={RegisterPage}/>
      </Routes>
    </Router>
  );
}

export default App;
