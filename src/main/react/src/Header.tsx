import * as React from 'react';
import {useEffect, useState} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    brand: string
}

interface MenuItem {
    label: string
    submenu: MenuItem[]
}

const Header = ({brand}: Props):React.JSX.Element => {

    const [menuItems, setMenuItems] = useState<MenuItem[]>([{ label: "error fetching menu", submenu: null as MenuItem[] }])

    useEffect(() => {
        console.log('Header mounted')
        const fetchData = async (url: string) => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            return data
        }
        fetchData('http://localhost:8080/api/menu').then(r => {
            debugger
            setMenuItems(r as MenuItem[])
        } )
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
                               if(item.submenu) {
                                   console.log('submenu', item.submenu)
                                      return (
                                        <li className="nav-item dropdown" key={index}>
                                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                 data-bs-toggle="dropdown" aria-expanded="false">
                                                  {item.label}
                                             </a>
                                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                  {
                                                    item.submenu.map((subItem, subIndex) => {
                                                         return (
                                                              <li key={subIndex}>
                                                                <a className="dropdown-item" href="#">{subItem.label}</a>
                                                              </li>
                                                         )
                                                    })
                                                  }
                                             </ul>
                                        </li>
                                      )
                               }
                               return (
                                   <li className="nav-item" key={index}>
                                       <a className="nav-link" href="#">{item.label}</a>
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