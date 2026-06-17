import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="container text-center">
            <Link className="btn btn-success mb-4 m-2" to="/path1"> CounterCard</Link>
            <Link className="btn btn-warning mb-4 m-2" to="/path2">TodoCard</Link>
        </div>
    )
}
export default Navbar;