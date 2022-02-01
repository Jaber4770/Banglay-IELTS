import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FAQ from './component/FAQ/FAQ';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './component/Review/Review';
import Service from './component/Service/Service';
import { AuthContext } from './ContextApi/AuthProvider';

function App() {
  // all router are set here for landing page i used "/" and home, services, contact, about, faq, review and for wrong url i add * and not found page.
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Service></Service>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/login'>

            </Route>
            <Route path='/signin'>
              
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
