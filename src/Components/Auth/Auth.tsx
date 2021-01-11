import React from 'react'
import PropTypes from 'prop-types'
import Signup from './Signup'
import SignIn from './SignIn'


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
            <div>
                {/* {this.state.isLogin ? ( */}
                <SignIn
                    isLogin={this.state.isLogin}
                    isLoginHandler={this.isLoginHandler.bind(this)}
                    updateToken={this.props.updateToken}
                />
                {/* // ): ( */}
                <Signup
                    isLogin={this.state.isLogin}
                    isLoginHandler={this.isLoginHandler.bind(this)}
                    updateToken={this.props.updateToken}
                />
                {/* // )} */}

            </div>
        )
    }

}

