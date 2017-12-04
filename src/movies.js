import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Movies extends Component{

	constructor(){
		super();
		this.state = {
			movieList: []
		}
	}

	componentDidMount(){
		var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman'
		axios.get(url)
		.then((movieData)=>{
			console.log(movieData);
			var movieResults = movieData.data.results;
			console.log(movieResults);
			this.setState({
				movieList: movieResults
			})
		})
	}

	render(){

		var movies = this.state.movieList.map((movie, index)=>{
			return(
				<Link to={`/movies/${movie.id}`} key={index}>
					<h3>{movie.title} {movie.vote_average}</h3>
				</Link>
			)

		});

		// var count = this.state.movieList.map((movie, index)=>{
		// 	return(<h3 key={index}>{movie.vote_average}</h3>)
		// });

		return(
			<div>
				<h1> Movies page </h1>
				{movies}
			</div>
		)
	}
}

export default Movies;