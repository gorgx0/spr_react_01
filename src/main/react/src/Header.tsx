import * as React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    brand: string
    menu: string[]
}
const Header = ({brand, menu}: Props):React.JSX.Element => {
   return (
       <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="#">{brand}</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       {menu.map((item, index) => (
                           <li className="nav-item" key={index}>
                               <a className="nav-link" href="#">{item}</a>
                           </li>
                       ))}
                   </ul>
               </div>
           </nav>
       </div>
   )
}

export default Header;