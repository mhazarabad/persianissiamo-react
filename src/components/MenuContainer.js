
import logo_image from '../statics/images/logo.png';
import { useState } from 'react';
import menu_en from './menu_en.json';
import menu_it from './menu_it.json';
import menu_ar from './menu_ar.json';

const MenuContainer = () => {
    const [currentMenu,setCurrentMenu] = useState(menu_en);
    const [menuItems, setMenuItems] = useState(currentMenu.menuItems);
    const [menuCategory, setMenuCategory] = useState(currentMenu.menuCategory);
    const [ourMenu, setOurMenu] = useState(currentMenu.ourmenu);
    const [activeMenu, setActiveMenu] = useState('');

    const itemFilter = (category) => {
        setMenuItems(currentMenu.menuItems.filter(item => item.category === category));
        setActiveMenu(category);
        setMenuCategory(menuCategory);
    }

    const langSwitcher = (menu_json) => {
        setCurrentMenu(menu_json);
        setMenuItems(menu_json.menuItems);
        setMenuCategory(menu_json.menuCategory);
        setOurMenu(menu_json.ourmenu);
    }


    const slugifier = (name) => {
        return name.replaceAll(' ', '_');
    };

    return (
        <section className='food_section layout_padding'>
            <ul className='langl' style={{ marginTop: "-30px", marginBottom: "60px" }}>
                <li onClick={()=>langSwitcher(menu_en)} className='lang-links'>English</li>
                <li onClick={()=>langSwitcher(menu_it)} className='lang-links'>Italiano</li>
                <li onClick={()=>langSwitcher(menu_ar)} className='lang-links'>العربیه</li>
            </ul>

            <div className="container">

                <div className="heading_container heading_center">
                    <h2>{ourMenu}</h2>
                </div>

                <ul className="filters_menu">
                    {menuCategory.map((category) => (
                        <li className={activeMenu === category.name ? 'active' : 'not-active'} key={category.id} onClick={() => itemFilter(category.name)}>{category.name}</li>
                    ))}
                </ul>

                <div className="filters-content">
                    <div className="row grid">
                        {menuItems.map((food) => (
                            <div key={food.id} className={"col-sm-6 col-lg-4 all " + slugifier(food.category)}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src={food.image_src ? food.image_src : logo_image} alt="persianissiamo" />
                                        </div>

                                        <div className="detail-box">
                                            <span style={{ float: "right" }}>{food.price + " €"}</span>
                                            <h5>
                                                {food.name}
                                            </h5>
                                            <p>
                                                {food.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>

    );
}

export default MenuContainer;