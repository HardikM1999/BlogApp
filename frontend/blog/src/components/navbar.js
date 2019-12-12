import React,{Component} from 'react';
import {Navbar,NavItem,Nav,NavbarBrand,NavLink} from 'reactstrap';

class NavBar extends Component{

    render()
    {
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    BlogZilla!
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="">
                            Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">
                            SignUp
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">
                            Create Post
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">
                            Author Profile
                        </NavLink>
                    </NavItem>
                </Nav>  
            </Navbar>
        );
    }
}

export default NavBar;