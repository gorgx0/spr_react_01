import * as React from 'react';
import {useEffect, useState} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    brand: string
}
const Header = ({brand}: Props):React.JSX.Element => {

    const [menuItems, setMenuItems] = useState<string[]>(["error fetching menu"])

    useEffect(() => {
        console.log('Header mounted')
        const fetchData = async (url: string) => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            return data
        }
        fetchData('http://localhost:8080/api/menu').then(r => setMenuItems(r as string[]))
    }, [])

   return (
       <div className="container">
           <nav className="navbar navbar-expand-md navbar-light bg-light">
               <a className="navbar-brand" href="#">{brand}</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       {
                           menuItems.map((item, index) => {
                               return (
                                   <li className="nav-item" key={index}>
                                       <a className="nav-link" href="#">{item}</a>
                                   </li>
                               )
                           })
                       }
                   </ul>
               </div>
           </nav>
       </div>
   )
}

export default Header;