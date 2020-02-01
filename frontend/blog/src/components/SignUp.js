import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText,Card} from 'reactstrap';
import './SignUp.css';

class SignUp extends Component {

    render()
    {
        return(
            <div>
                <Card className="signup_card">
                    <h2 className="text-primary">SignUp</h2>
                    <Form className="signup_form">
                        <FormGroup>
                            <Label className="text-primary"><b>Username</b></Label>
                            <Input type="username" name="username" id="login_username" placeholder="Type your username here" />
                            <Label className="text-primary"><b>Password</b></Label>
                            <Input type="password" name="password" id="login_Password" placeholder="Type your password here" />
                            <Label className="text-primary"><b>Email</b></Label>
                            <Input type="email" name="email" id="email_id" placeholder="Type your email here" />
                            <Label className="text-primary"><b>First Name</b></Label>
                            <Input type="name" name="first_name" id="first_name" placeholder="First Name here" />
                            <Label className="text-primary"><b>Last Name</b></Label>
                            <Input type="name" name="last_name" id="last_name" placeholder="Last Name here" />
                        </FormGroup>
                        <Button color="primary">SignUp</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default SignUp;