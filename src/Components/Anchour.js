import { Link } from "react-router-dom";

const Anchour = (props) => {
    return (
        <Link to={props.page == "home" ? '/' : props.page}>{props.page}</Link>

    )
     
};
 
export default Anchour;