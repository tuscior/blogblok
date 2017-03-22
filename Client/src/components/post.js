import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

function submit(comment){
let id = this.props.params.id;
id = id.substr(1);
this.props.postComment(comment, id)
}

const renderField = ({ input, label, name, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} className="commentName" placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
const renderText = ({ input, label, name, type, meta: { touched, error } }) => (
  <div>
    <div>
      <textarea {...input} className="commentContent" placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


class PostView extends Component {
constructor(props){
super(props);
this.state = {
	post: 'loading...'
};
let id = this.props.params.id;
id = id.substr(1);
this.props.getPost(id);
}
editPost(id, props){
	browserHistory.push(`/edit/${id}`);
	console.log(this.props);
}
deletePost(id){
this.props.deletePost(id);	
}


componentWillReceiveProps(nextProps){

const id = this.props.params.id.substr(1);	
const comments = nextProps.post.post[0];
const post = nextProps.post.post.map(post => {
	console.log(post.img);
const comment = comments.map(comment => {
	return (
	<div className="list-group" key={comment._id}>		
    <li className="list-group-item">
      <h5 className="list-group-item-heading">{comment.name}
      <small>  {comment.date}</small>
      </h5>
      <p className="list-group-item-text">{comment.comment}</p>
    </li>     
	</div>
	)
});
if(this.props.auth && post._id){
	return (
	<div key={post._id}>
	<figure className="postViewImage"><img src={`${post.img}`}/></figure>
	<div className="postTitle"><h4>{post.title}</h4>
	<p>{post.date}</p></div>	
	<article className="postViewContent">{post.content}</article>		
	<button className="newPost" onClick={() => this.editPost(id)}>Edit Post</button>
	<button className="logout" onClick={() => this.deletePost(id)}>Delete Post</button>
	<section className="comments">
	<h3>Comments:</h3>
	{comment}
	</section>	
	</div>
	)
}
else if(post._id){
	return (
	<div key={post._id}>
	<figure className="postViewImage"><img src={`${post.img}`}/></figure>
	<div className="postTitle"><h4>{post.title}</h4>
	<p>{post.date}</p></div>	
	<article className="postViewContent">{post.content}</article>		
	<section className="comments">
	<h3>Comments:</h3>
	{comment}
	</section>	
	</div>
		)
	}
}); 
this.setState({
	post: post
});
}	
render(){
	const { error, handleSubmit, submitting } = this.props;
	return(
		<div>
		{this.state.post}
		<form onSubmit={handleSubmit(submit.bind(this))}>
	<Field name="comment" type="text" component={renderText} label="comment"/>
      <Field name="name" type="text" component={renderField} label="name"/>
      

      {error && <strong>{error}</strong>}
      <div>
        <button className="btn btn-default" type="submit" disabled={submitting}>Add Comment</button>
      </div>
    	</form>		
		</div>
		);
}
}
function mapStateToProps(state){
	return {
		post: state.post,
		auth: state.auth.authenticated
	}
}

PostView = reduxForm({form: 'CommentForm'})(PostView)
PostView = connect(mapStateToProps, actions)(PostView)
export default PostView;