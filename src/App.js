import './App.css';
import Homepage from './pages/homepage';
import AllBookPage from './pages/allbookpage'
import OneBookPage from './pages/onebookpage';
import Loginpage from './pages/loginpage'
import SignupPage from './pages/signuppage'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
            {/* define the routes within the return*/}
        <Routes>
          <Route path="/" element={<Loginpage/>} />
          <Route path="/books" element={<AllBookPage/>} />
          <Route path="/book" element={<OneBookPage/>} />
          <Route path="/auth1" element={<SignupPage/>} />
          <Route path="/home" element={<Homepage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
