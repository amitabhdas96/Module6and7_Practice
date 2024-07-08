import { useState } from "react";

// separate component for displaying each movie
function Movie({title, year, synopsis}) {
    return (    
    <li>
    <h3>{title}</h3> 
    <span>({year})</span>
    <div>{synopsis}</div>
    </li>
    )
   }

function MoviesList() {
    // collection of objects representing movies
    const movies = [
    {
    id: 1, 
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
    },
    {
        id: 2,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
    },
    {
        id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
    },
    ];

    const [currentMovies, setCurrentMovies] = useState(movies);

    const movieItems = currentMovies.map(movie => (
        <Movie key={movie.id} title={movie.title}
        year={movie.year} synopsis={movie.synopsis}/>
        ))
       
    // const movieItems = movies.map(movie => (
    //     <Movie
    //     key={movie.id} // key prop is required for lists
    //     title={movie.title}
    //     year={movie.year}
    //     synopsis={movie.synopsis}/>
    //     // can also destructure movie into individual props
    //     // <Movie key={movie.id} {...movie}/>
    //     )
    //    );
        
    const handleReverseMovies = () => { 
        // first clone the original, so we don’t mutate it
        let newMovies = [...currentMovies];
        newMovies.reverse(); // 2. modify the clone
        setCurrentMovies(newMovies); // 3. set updated clone in state
        }
          



    return (
        <div className="MoviesList">
        <ul>{ movieItems }</ul>
        <button onClick={handleReverseMovies}>Reverse List</button>
        </div>       
    )
   }
   export default MoviesList;
   