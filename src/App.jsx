import './App.css'
import {HomePage} from "./Components/HomePage"
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./Components/Navbar"
import {ProductsPage} from "./Components/ProductsPage"
import {ProductsDetailsPage} from "./Components/ProductsDetailsPage"


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path = {"/"} element={<HomePage/>}></Route>
          <Route path= {"/homepage"} element ={<HomePage/>}></Route>
          <Route path={"/product"} element = {<ProductsPage/>}></Route>
          {/* <Route path={"/productDetails"} element = {<ProductsPage/>}></Route> */}
          <Route path={"/products/:name"} element = {<ProductsDetailsPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
