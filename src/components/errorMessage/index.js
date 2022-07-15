import React from 'react';
import classes from 'src/components/errorMessage/errorMessage.module.css'

const ErrorMessage = ({ errorMessage }) => {
    return (
        <div id="wrapper">
            <img className={classes.serverError} src="img/errorImages/serverError.png" alt="404 Page Error" />
            <div>
                <h3 style={{ color: 'red' }}>{errorMessage}</h3>
            </div>
        </div >
    )
}

export default ErrorMessage;