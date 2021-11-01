import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../../App.css';

const BackMain = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/");
      }

    return (
        <div className="back-button">
            <>
            <Button type="primary" onClick={handleClick}>Anasayfa</Button>
            </>
        </div>
    )
}



export default BackMain;
