import "./App.css"
import Products_info from "./pages/ProductList";
import Home from "./pages/Home";
import { GlobalProvider } from './context'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Products_info />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
