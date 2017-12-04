import React from 'react';
function Topic(props){
	console.log(props);
	return(
		<h3>You chose {props.match.params.topicName}</h3>
	)
}

export default Topic;