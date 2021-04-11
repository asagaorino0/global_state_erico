import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <h3>GlobalState</h3>
                <Link to="SecondPage"><h3>TopSecond </h3></Link>
                <Link to="/"><h3>GlobalState</h3></Link>
            </Toolbar>
        </AppBar>

    );
}

export default Header
