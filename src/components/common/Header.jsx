import Logo from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Avatar from "../../assets/images/avatars/avatar_1.png";
import Logout from "../auth/Logout";

import IconButton from "../../components/Layout/IconButton";
import Container from "../../components/Layout/Container";
import Flex from "../../components/Layout/Flex";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";


const Header = () => {
  const {auth} = useAuth()
  const {state} = useProfile()

  const user = state?.user ?? auth?.user;

  return (
    <div className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <Container>
        <Flex className=" flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/">
            <img
              className="max-w-[100px] rounded-full lg:max-w-[130px]"
              src={Logo}
              alt="Logo"
            />
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex flex-center gap-2 rounded-md bg-lighterDark px-5 py-2.5 text-sm font-medium text-white hover:bg-deepDark lg:text-lg"
            >
              <img src={HomeIcon} alt="Home" />
              Home
            </Link>
            <IconButton>
              <img src={Notification} alt="Notification" />
            </IconButton>

            <Logout />

            <Link to="/me" className="flex items-center !ml-8 gap-3">
              <span className="text-lg font-medium lg:text-xl">{auth?.user?.firstName }</span>
              <img
                className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                src={`${import.meta.env. VITE_SERVER_BASE_URL}/${user.avatar}`}
                alt="Avatar"
              />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
