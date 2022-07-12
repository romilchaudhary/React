import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/map-list">MapList</Link>
          </li>
          <li>
            <Link to="/reuse">Reuse</Link>
          </li>
          <li>
            <Link to="/lifting">Lifting State Up</Link>
          </li>
          <li>
            <Link to="/pure">Pure Component</Link>
          </li>
          <li>
            <Link to="/use-memo">Use Memo functional</Link>
          </li>
          <li>
            <Link to="/ref">Ref Class Component</Link>
          </li>
          <li>
            <Link to="/dynamic">Dynamic Routing</Link>
          </li>          
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;