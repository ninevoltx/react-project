import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './header';
import InTheaters from './pages/InTheaters';
import Upcoming from './pages/Upcoming';
import Future from './pages/News';
import Past from './pages/Past';
import Showings from './pages/Showings';
import Theaters from './pages/Theaters';
import Database from './pages/Database';
import MovieDetails from './pages/MovieDetails';
import ActorDetails from './pages/ActorDetails';
import TheaterDetailPage from './pages/TheaterDetailPage';
import HomePage from './pages/home';



function App() {

  return (<>
  <Router>
    <Header />
    <Routes>
      <Route path="/intheaters" element={<InTheaters />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/future" component={Future} />
      <Route path="/past" element={<Past />} />
      <Route path="/showings" component={Showings} />
      <Route path="/theaters" element={<Theaters />} />
      <Route path="/database" element={<Database />}/>
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/actors/:id" element={<ActorDetails />} />
      <Route path="/theaters/:id" element={<TheaterDetailPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
    </>
  );
};

export default App;
