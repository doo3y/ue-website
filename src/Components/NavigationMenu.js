import React from "react";
import {Link} from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            <span className="font-bold">
                            The menu
            </span>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 border-t border-b" 
                        onClick ={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 border-t border-b" 
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/product"
                        className="text-blue-500 border-t border-b"
                        onClick={props.closeMenu}
                    >
                        Product
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-blue-500 border-t border-b"
                        onClick={props.closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu