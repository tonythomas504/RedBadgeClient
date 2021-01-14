import React from 'react'
import { Button, Card, CardContent, TextField } from '@material-ui/core'
import APIURL from '../../helpers/environment'

type SignInFields = {
    username: string,
    password: string
}

type SignInProps = {
    isLogin: boolean,
    updateToken: (newToken: string) => void,
    isLoginHandler: () => void
}


export default class SignIn extends React.Component<SignInProps, SignInFields>{
    constructor(props: SignInProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const url = `${APIURL}user/login`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.updateToken(data.token)
            })

    }

    render() {
        return (
            <div>
                <h1>Sign In - Welcome to VibeCast</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.username} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ username: e.currentTarget.value })} placeholder="username" />
                    <br />
                    <input type="text" value={this.state.password} onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ password: e.currentTarget.value })} placeholder="password" />
                    <br />



                    <button id="button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

