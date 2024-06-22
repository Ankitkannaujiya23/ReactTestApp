import './App.css';
import HomePage from './mainPages/homepage/HomePage';
import {BrowserRouter as Router,Route, Routes}from 'react-router-dom';
import Login from './mainPages/login-auth/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
function App() {


  return (
    <div className="App  ">
<Router>
    <Routes>
    <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
