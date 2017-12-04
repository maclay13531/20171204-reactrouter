import React from 'react';
function Home(props){
	var teams = props.teams.map((team)=>{
				return (<li>{team}</li>)
	})
	return(
		<div>
			<h1>Welcome to my {props.title} page!</h1>
			<p>The top teams in the NFL area</p>
			<ul>
				{teams}
			</ul>
		</div>
	)
}

export default Home;