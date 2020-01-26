import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class SignUp extends Component {

    render()
    {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label>Username</Label>
                        
                        <Label>Password</Label>
                        <Label>Email</Label>
                        <Label>First Name</Label>
                        <Label>Last Name</Label>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default SignUp;