import React, {useState} from "react";

export default function SearchMovies() {
    // states- input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9cae3479b893d8f338d20b2d81c2b391&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(data.results);
        } catch(err) {
            console.log(err);
        }
        
    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" className="input" name="query" placeholder="i.e.Jurracic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className="button">Search</button>
        </form>
    )
}

