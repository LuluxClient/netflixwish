const initialState = [];

const movieReducer = (state = initialState, action) => {   
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.movie]
    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.id)
    default:
      return state
  }
}

export default movieReducer;