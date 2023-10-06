
import logo_image from '../statics/images/logo.png';
import { useState } from 'react';
import menu_en from './menu_en.json'
import { Link } from 'react-router-dom';

const MenuContainerEnglish = () => {
    const [menuItems, setMenuItems] = useState(menu_en.menuItems);
    const [menuCategory, setMenuCategory] = useState('');

    const itemFilter = (category) => {
        setMenuItems(menu_en.menuItems.filter(item => item.category === category));
        setMenuCategory(category);
    }

    const slugifier = (name) => {
        return name.replaceAll(' ', '_');
    };

    return (
        <section className='food_section layout_padding'>
            <ul className='langl' style={{ marginTop: "-30px", marginBottom: "60px" }}>
                <li className='lang-links active'><Link to={'/en'}>English</Link></li>
                <li className='lang-links'><Link to={'/it'}>Italiano</Link></li>
                <li className='lang-links'><Link to={'/ar'}>العربیه</Link></li>
            </ul>

            <div className="container">

                <div className="heading_container heading_center">
                    <h2>{menu_en.ourmenu}</h2>
                </div>

                <ul className="filters_menu">
                    {menu_en.menuCategory.map((category) => (
                        <li className={menuCategory === category.name ? 'active' : 'not-active'} key={category.id} onClick={() => itemFilter(category.name)}>{category.name}</li>
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

export default MenuContainerEnglish;