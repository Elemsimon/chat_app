import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navber from './comps/Navber';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AuthProvider from './context/auth';
import PrivateRoute from './comps/PrivateRoute';


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
      <Navber />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
