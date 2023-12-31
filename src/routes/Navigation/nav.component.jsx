import { Outlet , Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './nav.styles.scss';

const Navigation = () =>
{
    return(
        <>
        <div className="navigation">
          <Link to="/" className="logo-container">
            <Logo />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='shop'>SHOP</Link>
            <Link className="nav-link" to='auth'>SIGN IN</Link>
          </div>
        </div>
        <Outlet />
        </>
    );
}

export default Navigation;