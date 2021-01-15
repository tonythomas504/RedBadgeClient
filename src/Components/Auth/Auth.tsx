import React from 'react'
import PropTypes from 'prop-types'
import Signup from './Signup'
import SignIn from './SignIn'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Auth.css'



interface AuthState {
    isLogin: boolean
}

type AuthProps = {
    updateToken: (newToken: string) => void
}

export default class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    isLoginHandler() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    // toggle = (e: React.SyntheticEvent) => {
    //     e.preventDefault();
    //     if (this.state.isLogin === false) {
    //         return this.setState({
    //             isLogin: true
    //         })
    //     }
    // }

    render() {


        return (
            <div id="register-form">
                <Dialog open={true}>
                    <DialogTitle id="form-dialog-title">
                        VibeCast
                </DialogTitle>
                    <DialogContent>
                        <SignIn
                            isLogin={this.state.isLogin}
                            isLoginHandler={this.isLoginHandler.bind(this)}
                            updateToken={this.props.updateToken}
                        />
                    </DialogContent>
                    <br />
                    <br />
                    <DialogContent>
                        <Signup
                            isLogin={this.state.isLogin}
                            isLoginHandler={this.isLoginHandler.bind(this)}
                            updateToken={this.props.updateToken}
                        />
                    </DialogContent>
                    <br />
                    <br />
                </Dialog>
            </div>
        )
    }

}

