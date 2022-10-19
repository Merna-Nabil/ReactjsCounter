import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/Index";
import Cart from "./components/Cart";
import CounterAction from "./components/counter/CounterAction";
import Home from "./components/Home/Index";
import Navbar from "./components/Navbar/Index";
// import NotFound from "./components/notFound";
import Details from "./components/Shop/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Index";
import Singup from "./components/signUp/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/counter" element={<CounterAction />} />
        <Route path="/shop/:id" element={<Details />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/signup" element={<Singup />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
