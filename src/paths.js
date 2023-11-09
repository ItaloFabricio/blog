
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Pages
import About from "pages/Home/About";
import Contact from "pages/Home/Contact";
import Login from "pages/Home/Login";
import NotFound from "pages/Home/NotFound";
import Post from "pages/Home/Post";
import Profile from "pages/Home/Profile";
import Search from "pages/Home/Search";
import Home from "pages/Home";

const Paths = () => {

    return(
        <>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/profile" element={<Profile></Profile>}></Route>
                    <Route path="/post" element={<Post></Post>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>

                    <Route path="*" element={<NotFound></NotFound>}></Route>

                </Routes>
            </BrowserRouter>

        </>
    );

}

export default Paths;