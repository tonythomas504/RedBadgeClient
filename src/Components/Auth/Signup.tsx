import React from 'react'

import PropTypes from 'prop-types'
import APIURL from '../../helpers/environment'


type SignUpFields = {
    username: string,
    password: string,
    email: string,

}

type SignUpProps = {
    isLogin: boolean,
    isLoginHandler: () => void,
    updateToken: (newToken: string) => void
}

export default class SignUp extends React.Component<SignUpProps, SignUpFields>{
    constructor(props: SignUpProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',

        }
    }

    onChange(e: any) {
        this.setState(e.target.value)
    }

    validateForm = () => {

    }



    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();


        const url = `${APIURL}user/register`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h1>Sign Up - Join VibeCast</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.email} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ email: e.currentTarget.value })} placeholder="email" />
                    <br />
                    <input type="text" value={this.state.username} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ username: e.currentTarget.value })} placeholder="username" />
                    <br />
                    <input type="text" value={this.state.password} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ password: e.currentTarget.value })} placeholder="password" /><br />


                    <button id="button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}