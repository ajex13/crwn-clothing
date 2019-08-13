import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({email:'', password:''})
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]:value})
    }

    render(){
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required
              />
              <CustomButton type="submit">
                Submit Form
              </CustomButton>

              <CustomButton onClick={SignInWithGoogle}>
                  Sign in with Google
              </CustomButton>   
            </form>
          </div>
        );
    }
}

export default SignIn;