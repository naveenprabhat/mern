import React from 'react';
import { NavLink , Link} from 'react-router-dom';

const Footer=()=>{
    return(

        <div className='bg-dark bg-gradient rounded-2'>   
                
                <ul className="nav justify-content-center list-inline">
                    <div className='d-flex justify-content-center px-5'>
                     <li className=" nav-link list-inline-item">
                       <h4><b>About Us</b></h4>
                       <a href=""style={{ textDecoration: 'none' }}>First</a><br/>
                       <a href=""style={{ textDecoration: 'none' }}>Second</a><br/>
                       <a href=""style={{ textDecoration: 'none' }}>Third</a><br/>
                       <a href=""style={{ textDecoration: 'none' }}>Fourth</a><br/>
                     </li>
                     </div>
                     <div className='d-flex px-5 mr-3'>
                     <li className="nav-link list-inline-item px-5">
                        <h4><b>Ongoing Projects</b></h4>
                       <a href=""style={{ textDecoration: 'none' }}>First</a><br/>
                       <a href=""style={{ textDecoration: 'none' }}>Second</a><br/>
                       <a href=""style={{ textDecoration: 'none' }}>Third</a><br/>
                       <a href=""style={{ textDecoration: 'none' }}>Fourth</a><br/>
                     </li>
                     </div>
                     <div className='d-flex px-5'>
                     <li className="nav-link list-inline-item px-5">
                        <h4><b>Social Media</b></h4>
                        <a href="https://github.com/naveenprabhat"target="_blank"style={{ textDecoration: 'none' }}>Github</a><br/>
                       <a href="https://linkedin.com/naveenprabhat"target="_blank"style={{ textDecoration: 'none' }}>LinkedIn</a><br/>
                       <a href="https://twitter.com/naveenprabhat"target="_blank"style={{ textDecoration: 'none' }}>Twitter</a><br/>
                       <a href="https://youtube.com/naveenprabhat"target="_blank"style={{ textDecoration: 'none' }}>Youtube</a><br/>
                     </li>
                     </div>
                </ul>
                <div className='d-flex'>
                <h6>@naveen</h6>
                </div>
                
        </div>
    )
}
export default Footer;