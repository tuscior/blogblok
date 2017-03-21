import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function submit(values){
/*/  let formData = new FormData();
  formData.append('title', values.title);
  formData.append('content', values.content);
  formData.append('img', values.img[0]);/*/
  const id = this.props.params.id;
  this.props.editPost(values, id);
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
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


class EditPost extends Component {
  constructor(props){
    super(props);

    const id = this.props.params.id;
    this.props.getPost(id);
  }
  render(){
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
    <div>
    <Link to="/home"><button>Back to home</button></Link>
    <form onSubmit={handleSubmit(submit.bind(this))}>
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
function mapStateToProps(state){
return {
   state: state.post
}
}

EditPost = reduxForm({form: 'editPost'})(EditPost)
EditPost = connect(mapStateToProps, actions)(EditPost)
export default EditPost;