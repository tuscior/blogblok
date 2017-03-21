import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { authAdmin } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Login extends Component {
  submit(values){
  console.log(this.props); 
  this.props.actions.authAdmin(values);
} 
  render(){
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
    <form onSubmit={handleSubmit(this.submit.bind(this))}>
      <Field name="nickname" type="text" component={renderField} label="Nickname"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}
} 
function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators({ authAdmin }, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'adminlog'
})(Login));
