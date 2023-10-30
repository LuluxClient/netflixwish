import MoviesList from '../components/MoviesList'
import { useState, useEffect } from 'react'

const Trending = () => {
    const [click, setClick] = useState(0)
    
    useEffect(() => {
        console.log("Trending")
    }, [click])

    const moviesArray = ["Fast and furious", "Barbie", "Nemo"]

    const handleClick = () => {
        console.log("Clicked");
        setClick(click + 1);
    }

    return (
        <>
          <p>Likes: {click}</p>
          <button onClick={handleClick}> Like</button>
          {/* <MoviesList movies={moviesArray} /> */}
        </>
    )
}

export default Trending