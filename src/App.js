import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/' exact Component={LoginPage}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
