import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from './components/Signup';
import Income from './components/Income';
import Expense from './components/Expense';
import Settings from './components/Settings';
import Categories from './components/Categories';

let App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App