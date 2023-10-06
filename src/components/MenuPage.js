import '../statics/css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroArea from './HeroArea';
// import Langs from './Langs';
// import { useState } from 'react';
import MenuContainerItalian from './MenuContainerItalian';
import MenuContainerArabic from './MenuContainerArabic';
import MenuContainerEnglish from './MenuContainerEnglish';


const MenuPage = () => {
    // const [active_menu, setActiveMenu] = useState('en');

    return (
        <Router>
            <HeroArea />
            <Routes >
                <Route exact path="/en" element={<MenuContainerEnglish />} />
                {/* <Route exact path="/fa" element={<MenuContainer />} /> */}
                <Route exact path="/ar" element={<MenuContainerArabic />} />
                <Route exact path="/it" element={<MenuContainerItalian />} />
                <Route path="/" element={<MenuContainerEnglish />} />
            </Routes>
            
        </Router>
    );
}

export default MenuPage;