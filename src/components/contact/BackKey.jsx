import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../../App.css';

const BackKey = () => {

    let history = useHistory();

    function handleClick() {
        history.goBack();
      }

    return (
        <div className="back-button">
            <>
            <Button type="primary" onClick={handleClick}>Back</Button>
            </>
        </div>
    )
}



export default BackKey;
