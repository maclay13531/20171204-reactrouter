import React from 'react';
import { Link, Route } from 'react-router-dom';
import Topic from './topic';
function Topics(){
	return(
		<div>
			<h1>Topics Page</h1>
			<ul>
				<li><Link to="/topics/rendering">Rendering with React</Link></li>
				<li><Link to="/topics/components">Components in React</Link></li>
				<li><Link to="/topics/state">State in React</Link></li>
			</ul>

			<Route path="/topics/:topicName" component={Topic} />
		</div>
	)
}

export default Topics;