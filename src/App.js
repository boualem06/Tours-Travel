


import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Card from './components/Card';
import TourDetail from './pages/TourDetail';
function App() {
  return (

  // <Router>
  //   <Routes>
  //     <Route path={'/Annonces'} element={<Annonce />}></Route>
  //     <Route path={'/Favoris'} element={<Favoris />}></Route>
  //   </Routes>
  // </Router>

  <Layout/>

  );
}




export default App;
