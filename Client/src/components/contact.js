import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';

function submit(values){
 console.log(values);
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
const renderText = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Email extends Component {
  render(){

    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
    <div>
    <h4>Feel free to send me an email. I will answer for sure.</h4>
    <div className="newPostForm">
    <form onSubmit={handleSubmit(submit.bind(this))}>
      <Field name="Your Email" type="text" component={renderField} label="Your email"/>
      <Field name="Message" type="text" component={renderText} label="Message"/>

      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Send</button>
      </div>
    </form>
    </div>
    </div>
  )
}
}
export default reduxForm({
  form: 'postemail'
}, actions)(Email)