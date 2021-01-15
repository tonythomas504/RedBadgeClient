import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './App.css'



// const styles = (theme: any) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// });

type Props = {
    clearToken: () => void;
}

export default class NavBar extends React.Component<Props> {




    render() {
        return (
            <div>
                <nav id="nav">
                    <Button id="nav-button" onClick={this.props.clearToken} >Logout</Button>
                </nav>

            </div>
        );
    }
}

