import { ReactComponent as GithubLogo } from "assets/img/Vector.svg";
import "./style.css";


function NavBar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Danieldl0" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubLogo />
                            <p className="dsmovie-contact-link">Danieldl0</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}


export { NavBar };