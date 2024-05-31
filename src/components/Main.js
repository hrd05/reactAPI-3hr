import "./Main.css";
import { Button } from "react-bootstrap";

const Main = (props) => {

    return (
        <div className='main'>
            <h1>Bookmark Website</h1>
            <Button onClick={props.onClick} className="mt-3">Add Bookmark</Button>
        </div>
    )
}

export default Main;