import Link from "../Components/Link";
import Flexbox from "../Layouts/Flexbox";

const Nav = () => {
  return (
    <nav style={{ width: "250px" }}>
      <Flexbox > 
        <Link page="home" />
        <Link page="shop" />
        <Link page="contact" />
      </Flexbox>
    </nav>
  );
};

export default Nav;
