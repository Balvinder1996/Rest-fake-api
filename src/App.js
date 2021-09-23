import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './components/Home';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
