import React, {Component} from 'react';
import { Link } from 'react-router';

export default function(){
	return (
		<div className="aboutMe">
		<h5>Hi there !</h5>
		<section>Quisque sed neque mauris. Nulla vel laoreet odio. Fusce sit amet massa laoreet, dapibus enim quis, pretium leo. Nullam ac faucibus felis. Nullam pharetra quis ex nec porta. Donec tristique ante eget tempus accumsan. Fusce semper risus nisi, sit amet iaculis risus tristique sed. Aliquam erat volutpat.</section>
		<figure className="me"><img src="http://localhost:3090/me.jpg" /></figure>	
		<p>Feel free to <span className="contactMe"><Link to="/contact">contact</Link></span> me!</p>
		</div>
		)
}