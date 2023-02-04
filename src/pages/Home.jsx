import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from '../components/Search';
import './Home.css';

const Home = () => {
    return (
        <section className = "home" >
            <header className = "home__header" >
                <div className="home__headerLeft">
                    <Link >About</Link>
                    <Link >Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link >Gmail</Link>
                    <Link>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </header>
            <div className = "home__body">
                {/* <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272×92dp.png" alt="" /> */}
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="Error" />
                <div className = "home__inputContainer">
                    <Search hideButtons = "true" term = {''}/>
                </div>
            </div>
        </section>
        
    );
}
export default Home;