import Anchour from "../Components/Anchour";
import Flexbox from "../Layouts/Flexbox";

const Nav = () => {
  return (
    <nav style={{ width: "250px" }}>
      <Flexbox > 
        <Anchour page="home" />
        <Anchour page="shop" />
        <Anchour page="contact" />
      </Flexbox>
    </nav>
  );
};

export default Nav;
