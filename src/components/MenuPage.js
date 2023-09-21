import '../statics/css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroArea from './HeroArea';
// import Langs from './Langs';
// import { useState } from 'react';
import MenuContainer from './MenuContainer';


const MenuPage = () => {
    // const [active_menu, setActiveMenu] = useState('en');

    return (
        <Router>
            <HeroArea />
            <Routes >
                <Route path="/" element={<MenuContainer />} />
            </Routes>
            
        </Router>
    );
}

export default MenuPage;