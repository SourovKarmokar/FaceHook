import LogoutIcon from '../../assets/icons/logout.svg'
import IconButton from '../Layout/IconButton'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../../hooks/useAuth'


const Logout = () => {
    const navigate = useNavigate();
    const {setAuth} = useAuth()
    

    const handleLogout = () => {
        setAuth({})
        console.log("Logout clicked!")
        navigate('/login')
    }
    return(
        <IconButton onClick={handleLogout} >
            <img src={LogoutIcon} alt="LogoutIcon" />
        </IconButton>
    )
}

export default Logout