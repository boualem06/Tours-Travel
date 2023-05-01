


import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Card from './components/Card';
import TourDetail from './pages/TourDetail';
import NewProduct from './components/newProduct';
function App() {
  return (

  // <Router>
  //   <Routes>
  //     <Route path={'/Annonces'} element={<Annonce />}></Route>
  //     <Route path={'/Favoris'} element={<Favoris />}></Route>
  //   </Routes>
  // </Router>

  <Layout/>

  // <NewProduct></NewProduct>

  );
}




export default App;
