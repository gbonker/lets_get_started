import React, { Component } from 'react';
import FormError from './FormError'
import '../Form.css';

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
      privacyPolicy: false,
      formErrors: {
        businessName: '', 
        businessEmail: '',
        username: '',
        password: '',
        typeOfBusiness: '',
        termsOfService: '',
        privacyPolicy: ''
      },
      businessNameValid: false,
      businessEmailValid: false,
      usernameValid: false,
      passwordValid: false,
      typeOfBusinessValid: false,
      termsOfServiceValid: false,
      privacyPolicyValid: false,
      formValid: false
    };
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
  }

  changeCheckbox = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    this.setState({[name]: checked}, 
                () => { this.validateField(name, checked) });
  }

  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let businessNameValid = this.state.businessNameValid;
    let businessEmailValid = this.state.businessEmailValid;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let typeOfBusinessValid = this.state.typeOfBusinessValid;
    let termsOfServiceValid = this.state.termsOfServiceValid;
    let privacyPolicyValid = this.state.privacyPolicyValid;

    switch(fieldName) {
      case 'businessName':
        businessNameValid = value.length > 0;
        fieldValidationErrors.businessName = businessNameValid ? '' : 'Business Name is required.';
        break;
      case 'businessEmail':
        businessEmailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
        fieldValidationErrors.businessEmail = businessEmailValid ? '' : 'Please enter a valid email address.';
        break;
      case 'username':
        usernameValid = value.length > 0;
        fieldValidationErrors.username = usernameValid ? '' : 'Username is required.';
        break;
      case 'password':
        if (value.length === 0) {
          passwordValid = false;
          fieldValidationErrors.password = 'Password is required';
        } else if (value.length < 6) {
          passwordValid = false;
          fieldValidationErrors.password = 'Password should have six characters';
        } else if (!(/[a-z]/.test(value))) { // value has lowercase letter
          passwordValid = false;
          fieldValidationErrors.password = 'Password should contain at least one lowercase letter';
        } else if (!(/[A-Z]/.test(value))) { // value has uppercase letter
          passwordValid = false;
          fieldValidationErrors.password = 'Password should contain at least one uppercase letter';
        } else if (!(/[0-9]/.test(value))) { // value has integer
          passwordValid = false;
          fieldValidationErrors.password = 'Password should contain at least one digit';
        } else {
          passwordValid = true;
          fieldValidationErrors.password = '';
        }
        break;
      case 'typeOfBusiness':
        typeOfBusinessValid = value.length > 0;
        fieldValidationErrors.typeOfBusiness = typeOfBusinessValid ? '' : 'Type of Business is required.';
        break;
      case 'termsOfService':
        termsOfServiceValid = value;
        fieldValidationErrors.termsOfService = termsOfServiceValid ? '' : 'Please agree to the Terms of Service to continue.';
        break;
      case 'privacyPolicy':
        privacyPolicyValid = value;
        fieldValidationErrors.privacyPolicy = privacyPolicyValid ? '' : 'Please agree to the Privacy Policy to continue.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    businessNameValid: businessNameValid,
                    businessEmailValid: businessEmailValid,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid,
                    typeOfBusinessValid: typeOfBusinessValid,
                    termsOfServiceValid: termsOfServiceValid,
                    privacyPolicyValid: privacyPolicyValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.businessNameValid && 
                              this.state.businessEmailValid &&
                              this.state.usernameValid &&
                              this.state.passwordValid &&
                              this.state.typeOfBusinessValid &&
                              this.state.termsOfServiceValid &&
                              this.state.privacyPolicyValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
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
      privacyPolicy: false,
      formErrors: {
        businessName: '', 
        businessEmail: '',
        username: '',
        password: '',
        typeOfBusiness: '',
        termsOfService: '',
        privacyPolicy: ''
      },
      businessNameValid: false,
      businessEmailValid: false,
      usernameValid: false,
      passwordValid: false,
      typeOfBusinessValid: false,
      termsOfServiceValid: false,
      privacyPolicyValid: false,
      formValid: false
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Let's Get Started</h1>
        <form>
          <div className={`form-group ${this.errorClass(this.state.formErrors.businessName)}`}>
            <label className="form-label">Business Name</label>
            <input
              name="businessName" 
              type="text" 
              className="form-control input-lg form-input" 
              aria-describedby="businessNameHelp" 
              value={this.state.businessName} 
              onChange={event => this.change(event)}
            />
            <FormError formError={this.state.formErrors.businessName} />
          </div>
          
          <div className={`form-group ${this.errorClass(this.state.formErrors.businessEmail)}`}>
            <label className="form-label">Business Email</label>
            <input 
              name="businessEmail"
              type="email" 
              className="form-control input-lg form-input" 
              aria-describedby="businessEmailHelp" 
              value={this.state.businessEmail} 
              onChange={event => this.change(event)}
            />
            <FormError formError={this.state.formErrors.businessEmail} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
            <label className="form-label">Create a Username</label>
            <input 
              name="username"
              type="text" 
              className="form-control input-lg form-input" 
              aria-describedby="usernameHelp" 
              value={this.state.username} 
              onChange={event => this.change(event)}
            />
            <FormError formError={this.state.formErrors.username} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <label className="form-label">Password <span className="text-muted"><small>6 characters | 1 uppercase | 1 lowercase | 1 digit</small></span></label>
            <input 
              name="password"
              type="password" 
              className="form-control input-lg form-input" 
              aria-describedby="passwordHelp" 
              value={this.state.password} 
              onChange={event => this.change(event)}
            />
            <FormError formError={this.state.formErrors.password} />
          </div>
          <div className="form-group">
            <label className="form-label">Website <span className="text-muted"><small>(Optional)</small></span></label>
            <input 
              name="website"
              type="text"
              placeholder="mywebsite.com" 
              className="form-control input-lg form-input" 
              aria-describedby="websiteHelp" 
              value={this.state.website} 
              onChange={event => this.change(event)}
            />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.typeOfBusiness)}`}>
            <label className="form-label">Type of Business</label>
            <select 
              name="typeOfBusiness"
              className="form-control input-lg form-input"
              aria-describedby="typeOfBusinessHelp"
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
            <FormError formError={this.state.formErrors.typeOfBusiness} />
          </div>
          <div className="">
            <p><strong>Terms of Service</strong></p>
            <label className="check">
              <input 
                name="termsOfService"
                type="checkbox" 
                aria-describedby="termsOfServiceHelp"
                className="" 
                checked={this.state.termsOfService} 
                onChange={event => this.changeCheckbox(event)}
                />
                <div className="box"></div>
                <span className="checkbox-description text-muted">
                  I have read and do accept <a href="http://gosimplr.com/" target="_blank" rel="noopener noreferrer">terms of services</a>
                </span>
            </label>
            <FormError formError={this.state.formErrors.termsOfService} />
          </div>
          <div className="">
            <p><strong>Privacy Policy</strong></p>
            <label className="check">
              <input 
                name="privacyPolicy"
                type="checkbox"
                aria-describedby="privacyPolicyHelp" 
                className="" 
                checked={this.state.privacyPolicy} 
                onChange={event => this.changeCheckbox(event)}
                />
                <div className="box"></div>
                <span className="checkbox-description text-muted">
                  I have read and do accept <a href="http://gosimplr.com/" target="_blank" rel="noopener noreferrer">privacy policy</a>
                </span>
            </label>
            <FormError formError={this.state.formErrors.privacyPolicy} />
          </div>
          <button 
            onClick={(event) => this.onSubmit(event)} 
            className="btn btn-primary btn-lg center-block register-button" 
            disabled={!this.state.formValid}>
              Register
          </button>
        </form>
      </div>
    );
  }
}

export default Form;