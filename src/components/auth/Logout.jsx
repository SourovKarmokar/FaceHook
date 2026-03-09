import LogoutIcon from '../../assets/icons/logout.svg'
import IconButton from '../Layout/IconButton'
import {useNavigate} from "react-router-dom"

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
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