
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import products from './data/products.json'
import Body from './components/Body/Body'
import LandingPage from './pages/Landing/LandingPage'
import ProductListing from './pages/ProductListing/ProductListing'
import SingleProductPage from './pages/SingleProduct/SingleProductPage'




function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/products' element={<ProductListing/>}/>
            <Route path='/products/:skuCode' element={<SingleProductPage products={products}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
