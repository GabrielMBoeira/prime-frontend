import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import RevenueList from "../pages/Revenue";
import RevenueCreate from "../pages/RevenueCreate";

function MyRouter() {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<About />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
            <Route path="/revenues" element={<RevenueList />}></Route>
            <Route path="/revenues/create" element={<RevenueCreate />}></Route>
        </Routes>
    )
}

export default MyRouter;