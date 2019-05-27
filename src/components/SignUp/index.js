import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../constants/routes';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpPage  = () => (
  <div>
    <h1>Sign Up page</h1>
     <SignUpForm />
    {/* <FirebaseContext.Consumer> */}
    {/* passing the Firebase instance to the SignUpForm. */}
     {/* { firebase => <SingUpForm firebase={firebase} />}
    </FirebaseContext.Consumer> */}
  </div>
)

class SignUpFormBase extends Component {
  
  constructor (props) {
    super(props)
  }

  state = { ...INITIAL_STATE };

  componentDidMount () {
    console.log(this.props.firebase,'fff');
  }
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  };
  
  

  onChange = event => {
    
  }
  render () {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input name="username"
        value={username}
        onChange={this.onChange}
        type="text"
        placeholder="full name"
        />
        <input name="email"
        value={email}
        onChange={this.onChange}
        type="text"
        placeholder="Email"
        />
        <input name="passwordOne"
        value={passwordOne}
        onChange={this.onChange}
        type="password"
        placeholder="password"
        />
        <input name="passwordTwo"
        value={passwordTwo}
        onChange={this.onChange}
        type="password"
        placeholder="Confirm password"
        />
        <button type="submit" 
        disabled={isInvalid}
        >Sign UP</button>
        { error && <p>{error.message}</p>}
      </form>
    )
  }
}

// const SingUpForm  = withRouter(withFirebase(SignUpFormBase));
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    If you dont have account? <Link to={ROUTES.SIGN_UP}>SIGN_UP</Link>
  </p>
)

export default SignUpPage;
export  { SignUpForm , SignUpLink};
