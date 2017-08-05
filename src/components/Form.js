import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      businessName: '',
      businessEmail: '',
      username: '',
      password: '',
      website: '',
      typeOfBusiness: '',
      termsOfService: false,
      privacyPolicy: false
    };
  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  changeCheckbox = (event) => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      businessName: '',
      businessEmail: '',
      username: '',
      password: '',
      website: '',
      typeOfBusiness: '',
      termsOfService: false,
      privacyPolicy: false
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-xs-center">Let's Get Started</h1>
        <form>
          <div className="form-group">
            <label>Business Name</label>
            <input
              name="businessName" 
              type="text" 
              className="form-control" 
              aria-describedby="businessNameHelp" 
              value={this.state.businessName} 
              onChange={event => this.change(event)}
            />
          </div>
          <div className="form-group">
            <label>Business Email</label>
            <input 
              name="businessEmail"
              type="email" 
              className="form-control" 
              aria-describedby="businessEmailHelp" 
              value={this.state.businessEmail} 
              onChange={event => this.change(event)}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input 
              name="username"
              type="text" 
              className="form-control" 
              aria-describedby="usernameHelp" 
              value={this.state.username} 
              onChange={event => this.change(event)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              name="password"
              type="password" 
              className="form-control" 
              aria-describedby="passwordHelp" 
              value={this.state.password} 
              onChange={event => this.change(event)}
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input 
              name="website"
              type="text" 
              className="form-control" 
              aria-describedby="usernameHelp" 
              value={this.state.website} 
              onChange={event => this.change(event)}
            />
          </div>
          <div className="form-group">
            <label>Type of Business</label>
            <select 
              name="typeOfBusiness"
              className="form-control"
              aria-describedby="usernameHelp"
              value={this.state.typeOfBusiness} 
              onChange={event => this.change(event)}
              >
              <option value="">Select your business</option>
              <option value="restaurant">Restaurant</option>
              <option value="ecommerce">Ecommerce</option>
              <option value="retail">Retail</option>
              <option value="telecommunications">Telecommunications</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-check">
            <p>Terms of Service</p>
            <label className="form-check-label">
              <input 
                name="termsOfService"
                type="checkbox" 
                className="form-check-input" 
                checked={this.state.termsOfService} 
                onChange={event => this.changeCheckbox(event)}
                />
                I have read and do accept <a href="#">terms of services</a>
            </label>
          </div>
          <div className="form-check">
            <p>Privacy Policy</p>
            <label className="form-check-label">
              <input 
                name="privacyPolicy"
                type="checkbox" 
                className="form-check-input" 
                checked={this.state.privacyPolicy} 
                onChange={event => this.changeCheckbox(event)}
                />
                I have read and do accept <a href="#">privacy policy</a>
            </label>
          </div>
          <button onClick={(event) => this.onSubmit(event)} className="btn btn-primary center-block">Register</button>
        </form>
      </div>
    );
  }
}

export default Form;