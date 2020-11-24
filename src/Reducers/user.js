
const initialState = {
  details: {},
  logout: () => ({}),
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        details: action.payload.user,
        logout: action.payload.signOut,
      }
    }

    default: 
      return state;
  }
}
