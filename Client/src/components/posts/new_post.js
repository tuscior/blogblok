import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';

function submit(values){
  let formData = new FormData();
  formData.append('title', values.title);
  formData.append('content', values.content);
  formData.append('img', values.img[0]);
  actions.newPost(formData);
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

class Newpost extends Component {
  render(){

    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
    <div className="newPostForm">
    <form onSubmit={handleSubmit(submit.bind(this))}>
      <Field name="img" type="file" component={renderField} label="Heroimg"/>
      <Field name="title" type="text" component={renderField} label="Title"/>
      <Field name="content" type="text" component={renderText} label="Content"/>

      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>New Post</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
    </div>
  )
}
}
export default reduxForm({
  form: 'newpost',
  multipartForm: true
}, actions)(Newpost)