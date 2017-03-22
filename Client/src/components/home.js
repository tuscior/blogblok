import React, { Component } from 'react';
import * as actions from '../actions';
import RequireAuth from './auth/require_auth';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router';
import Pagination from "react-js-pagination";

class Home extends Component {

constructor(props) {
  super(props);
  this.state = {
    posts: 'loading....',
    pageNumber: 1
  };
  this.props.getPosts(1);
}  
handlePageChange(pageNumber) {
this.props.getPosts(pageNumber);
this.setState({activePage: pageNumber});
}

componentWillReceiveProps(nextProps){
  const posts = nextProps.posts.posts.map((post) => {
    
  const substrcontent = post.content.substr(0,550)+'...';
  if(this.props.auth){
    return (
    <div> 
    <div key={post._id} className="post"> 
    <div className="postTitle"><h4>{post.title}</h4><p><time>{post.date}</time></p></div>
    <figure className="postImg"><img src={`${post.img}`} /></figure>
    <article className="postContent">{substrcontent}</article>
    <Link to={`/post/:${post._id}`}><button className="readMore">Czytaj dalej</button></Link>
    </div>
    <div className="line"></div>
    </div>
      )
    }
    else { 
      return (
   <div> 
    <div key={post._id} className="post"> 
    <div className="postTitle"><h4>{post.title}</h4><p><time>{post.date}</time></p></div>
    <figure className="postImg"><img src={`${post.img}`} /></figure>
    <article className="postContent">{substrcontent}</article>
    <Link to={`/post/:${post._id}`}><button className="readMore">Czytaj dalej</button></Link>
    </div>
    <div className="line"></div>
    </div>
      )
     }
  });
  this.setState({posts: posts});
}
logout(){
this.props.logOut();
}
renderNew(){
if(this.props.auth){
return (
<div>
<Link to="/admin/new"><button className="newPost">New Post</button></Link>
<input className="logout" type="submit" name="Log out" value="Logout" onClick={() => this.logout()} /> 
</div>
)
}
}  render(){
    return(
      <div>
        {this.renderNew()}
        {this.state.posts}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={450}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
      )
}
}

function mapStateToProps(state){
  return {
    posts: state.posts,
    auth: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Home);
