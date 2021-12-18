import Logo from "../Components/Logo";
import Flexbox from "../Layouts/Flexbox";
import Nav from "./Nav";


const Header = () => {
  return (
    <header>
      <Flexbox> 
          <Logo />
          <Nav />
    </Flexbox>
    </header>
  );
};



export default Header;
