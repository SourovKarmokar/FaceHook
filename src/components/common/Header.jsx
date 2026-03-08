import Logo from "../../assets/images/logo.svg";
import HomeIcon from '../../assets/icons/home.svg';
import Notification from '../../assets/icons/notification.svg'
import Avatar from '../../assets/images/avatars/avatar_1.png'

import IconButton from '../../components/Layout/IconButton'

import { Link } from 'reLinkct-router-dom'

const Header = () => {
  return (
    <Link className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
    <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
      
      <Link to="/">
        <img className="max-w-[100px] rounded-full lg:max-w-[130px]" 
        src={Logo} />
      </Link>
      

      <div className="flex items-center space-x-4">
        <Link to="/" className="btn-primary">
          <img src={HomeIcon} Linklt="Home" />
          Home
        </Link>
        <IconButton>
          <img src={Notification}alt="Notification"  />
        </IconButton>
        

        <Link
        to='/me'
        className="flex-center !ml-8 gap-3">
          <span  className="text-lg font-medium lg:text-xl">Sumit</span>
          <img className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"

            src={Avatar} alt="" />
        </Link>
      </div>
      
    </div>
  </Link>
  )
}

export default Header
