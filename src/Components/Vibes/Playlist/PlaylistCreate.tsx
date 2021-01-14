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
import APIURL from '../../../helpers/environment'

type Props = {
    token: string,


}

type State = {
    title: string,
    songs: string
}

export default class PlaylistCreate extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            title: '',
            songs: ''
        }
    }

    onChange(e: any) {
        this.setState(e.target.value)
    }

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        console.log(this.props.token, this.state.title, this.state.songs)

        const url = `${APIURL}/playlist/createplaylist`
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify({ Title: this.state.title, Songs: this.state.songs })
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
                    <TextField type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.currentTarget.value })} placeholder="Playlist title" />
                    <TextField type="text" value={this.state.songs} onChange={(e) => this.setState({ songs: e.currentTarget.value })} placeholder="Song name - Arist," />
                    <Button id="button" type="submit">Submit</Button>


                </form>
            </div>
        )
    }

}