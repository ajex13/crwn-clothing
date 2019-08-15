import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword ){
            alert("Passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
              displayName: "",
              email: "",
              password: "",
              confirmPassword: ""
            });

        } catch (error){
            console.error(error);
        }

      };
    render () {
        const {displayName, email, password, confirmPassword} = this.state;
        console.log('displayName',displayName)
        console.log('email',email);
        console.log('password',password);
        console.log('confirmPassword',confirmPassword);
        
        
        
        return (
          <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                label="Name"
                value={displayName}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                type="email"
                name="email"
                label="email"
                value={email}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name="password"
                label="password"
                value={password}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="confirm password"
                value={confirmPassword}
                handleChange={this.handleChange}
                required
              />
              <CustomButton type="submit">SignUp</CustomButton>
            </form>
          </div>
        );

    }
}

export default SignUp;