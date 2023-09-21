import background_image from '../statics/images/backg.jpg';
import { Link } from 'react-router-dom';
import logo from '../statics/images/logo.png';


const HeroArea = () => {
    return ( 
        <div className="hero_area">
            <div className="bg-box" style={{height:"170px"}}>
                <img src={background_image} alt="persianissiamo" />
            </div>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link to="/">
                        <span>
                            <img src={logo} alt="persianissiamo" style={{
                                maxWidth:"200px",
                                marginTop:"70px"
                            }}/>
                        </span>
                    </Link>
                        
                    </nav>
                </div>
            </header>
        </div>
     );
}
 
export default HeroArea;