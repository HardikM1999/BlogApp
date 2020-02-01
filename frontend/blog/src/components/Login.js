import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText,Card} from 'reactstrap';
import './Login.css';

class Login extends Component {

    render()
    {
        return(
            <div>
                <Card className="login_card">
                    <h2 className="text-primary">Login</h2>
                    <Form className="login_form">
                        <FormGroup>
                            <Label className="text-primary"><b>Username</b></Label>
                            <Input type="username" name="username" id="login_username" placeholder="Type your username here" />
                            <br />
                            <Label className="text-primary"><b>Password</b></Label>
                            <Input type="password" name="password" id="login_Password" placeholder="Type your password here" />
                        </FormGroup>
                        <Button color="primary">Login</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Login;