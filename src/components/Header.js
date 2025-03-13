import { LOGO_URL } from "../utlis/constants";

const Header = () => {
    return(
        <div className="header">
           <div className="logo-container">
              <img className="logo" src={LOGO_URL}/>
              {/* <div className="cmp-name">Theja Pie Foods</div> */}
           </div>
           <div className="nav-items">
             <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Cart</li>
             </ul>
           </div>
        </div>
    )
  }

  export default Header;