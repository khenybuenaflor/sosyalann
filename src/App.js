import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AllPages from './pages/AllPages';
// import AllPages2 from './pages/AllPages2';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={AllPages} />
        <Route path='/register' Component={RegisterPage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/homepage' Component={HomePage}/>
      </Routes>
    </Router>
      
  );
}

export default App;
