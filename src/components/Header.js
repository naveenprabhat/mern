import React from 'react';
import { NavLink , Link} from 'react-router-dom';

const Header=()=>{
    return(

        <div>   
                <div>
                <ul className="nav justify-content-end rounded-2 bg-dark bg-gradient list-inline">
                    <div className='px-4 mt-2'>
                     <li className=" nav-link list-inline-item">
                       <NavLink exact to="/about" style={{ textDecoration: 'none' }}>About</NavLink>
                     </li>
                     </div>
                     <div className='px-4 mt-2'>
                     <li className="nav-link list-inline-item ">
                        <NavLink exact to="/blog"style={{ textDecoration: 'none' }}>Blog</NavLink>
                     </li>
                     </div>
                     <div className='px-4 mt-2'>
                     <li className="nav-link list-inline-item nav-link-fade-up">
                        <NavLink exact to="/" style={{ textDecoration: 'none'}}>Home</NavLink>
                     </li>
                     </div>
                </ul>
                </div>
                
        </div>
    )
}
export default Header;