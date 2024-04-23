import React from 'react'
import './intrn.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

            
                <div className="footer">
                    <div className="row">
                        <Link to="https://www.facebook.com/"><i className="fa fa-facebook"></i></Link>
                        <Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link>
                        <Link to="https://www.youtube.com/"><i className="fa fa-youtube"></i></Link>
                        <Link to="https://twitter.com/x"><i className="fa fa-twitter"></i></Link>
                    </div>

                    <div className="row">
                        <ul>
                            <li><Link to="/contactus">Contact us</Link></li>
                            <li><Link to="/">Our Services</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                            <li><Link to="/">Career</Link></li>
                        </ul>
                    </div>

                    <div className="row">
                        INFERNO Copyright © 2024 Inferno - All rights reserved || Designed By: Vraj
                    </div>
                </div>

            )
}
