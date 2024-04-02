import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <h1><Link to="/LoginPage">Login Page</Link></h1>
    <h2><Link to="/PPFcal">PPF Calculator</Link></h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;