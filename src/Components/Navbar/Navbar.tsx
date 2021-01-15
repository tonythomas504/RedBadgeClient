import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



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
                <nav>
                    <Button onClick={this.props.clearToken} color="inherit">Logout</Button>
                </nav>

            </div>
        );
    }
}

