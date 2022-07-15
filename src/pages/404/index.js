import React from 'react';
import classes from 'src/pages/404/404.module.css'

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img className={classes.pageNotFoundImg} src="img/errorImages/404.png" alt="404 Page Error" />
            <div>
                <h3 style={{ color: 'red' }}>This page could not be found</h3>
            </div>
        </div >
    )
}

export default PageNotFound;