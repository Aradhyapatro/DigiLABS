import './App.css';
import Header from './Components/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginForm from "./pages/LoginForm"
import Second from "./pages/Second"
import Success from "./pages/Success"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path="/Second" element={<Second />}></Route>
          <Route path="/Success" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
