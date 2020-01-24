import React,{Component} from 'react';
import {Navbar,NavItem,Nav,NavbarBrand,NavLink,NavbarText} from 'reactstrap';

class NavBar extends Component{

    render()
    {
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    BlogZilla!
                </NavbarBrand>
                <Nav className="d-flex mr-auto justify-content-center" navbar>
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
                <NavbarText>Best Blog App</NavbarText>
            </Navbar>
        );
    }
}

export default NavBar;