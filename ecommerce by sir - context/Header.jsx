import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      <nav>
        <h2><NavLink to="/">Ecommerce</NavLink></h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart <span>{props.cart.length}</span></NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
