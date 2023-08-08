import { useContext } from "react";
import React from "react";
import { AlertContext } from "../context/alert/alertContext";

const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null; 
    }

    return(
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <div>
                <strong>Warning!</strong>
                {alert.text}
            </div>
            <button onClick={hide} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
    )
}


export default Alert;