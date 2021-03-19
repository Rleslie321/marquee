// navigation component to create all links

import {NavLink} from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      {/* for each element in pages, create a navlink given the title and the slug */}
      {props.content.pages.map((item, index) => {
        const uri = `/${item.slug}`;
        return <NavLink key={index} to={uri} activeClassName="text-style-1" className="nav-item">{item.title}</NavLink>
      })}
    </nav>
  );
}

export default Navbar;
