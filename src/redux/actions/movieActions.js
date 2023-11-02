export const addMovie = movie => ({
    type: 'ADD_MOVIE',
    payload: movie
})

//id = l'id du film à remove
export const deleteMovie = id => ({
    type: 'DELETE_MOVIE',
    payload: id
})