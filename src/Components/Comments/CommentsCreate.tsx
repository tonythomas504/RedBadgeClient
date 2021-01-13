import React from 'react'
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography,
    ButtonBase
} from '@material-ui/core';

type Props = {
    token: string
}

type State = {
    title: string,
    body: string
}

export default class CommentsCreate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange(e: any) {
        this.setState(e.target.value)
    }

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(this.state)
        let body = {
            Title: this.state.title,
            Body: this.state.body

        }
        const url = 'http://localhost:4000/comment/createcomment'

        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify(body)

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.currentTarget.value })} placeholder="Title" />
                    <TextField type="text" value={this.state.body} onChange={(e) => this.setState({ body: e.currentTarget.value })} placeholder="Body" />

                    <Button id="button" type="submit">Submit Comment</Button>
                </form>
            </div>
        )
    }
}