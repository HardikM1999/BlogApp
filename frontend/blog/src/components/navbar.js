import React,{Component} from 'react';
import {Navbar,NavItem,Nav,NavbarBrand,NavLink,NavbarText} from 'reactstrap';

class NavBar extends Component{

    render()
    {
        return(
            <Navbar color="light" light expand="md">
                {/* <image href="blog.png"></image> */}
                <NavbarBrand href="/">
                    BlogApp
                </NavbarBrand>
                <Nav className="d-flex mr-auto justify-content-center" navbar>
                    <NavItem>
                        <NavLink href="/login">
                            Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/signup">
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