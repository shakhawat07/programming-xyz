import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route> */}


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
