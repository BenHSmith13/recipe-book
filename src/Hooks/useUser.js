import { useSelector } from 'react-redux'

export const useUser = () => {

}

export const useLogout = () => useSelector(state => state.user.logout);
