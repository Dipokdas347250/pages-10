import RootLayout from "./components/root/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home"
import {
  createBrowserRouter, createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Ourblog from "./pages/Ourblog";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/features" element={<Features/>}></Route>
    <Route path="/ourblog" element={<Ourblog/>}></Route>
  </Route>
))

function App() {


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    
    </>
  )
}

export default App
