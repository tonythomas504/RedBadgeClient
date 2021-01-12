import React from 'react';
import { TextField } from '@material-ui/core'

type Props = {
    playlistUpdated: any,
    token: string,
    updateOff: () => void,
    fetchItems: () => void
    editPlaylist: any | null
}

type State = {
    editTitle: string,
    editSongs: string,
    id: number | null,
    playlist: any | null

}

export default class PlaylistEdit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            editTitle: '',
            editSongs: '',
            id: this.props.editPlaylist ? this.props.editPlaylist.id : null,
            playlist: []
        }
    }



    handlePlaylistUpdate = () => {
        let id = {
            id: this.state.id
        }

        const url = `http://localhost:4000/playlist/${id}`
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify({ Title: this.state.editTitle, Songs: this.state.editSongs })
        }).then(() => {
            this.props.updateOff()

        })
    }
    // editPlaylistForm() {
    //     this.props.updateOff()
    // }

    componentDidUpdate(prevProps: any) {
        if (this.props != prevProps) {
            this.setState({
                playlist: this.props.editPlaylist
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <TextField
                        type="text"
                        defaultValue={this.props.editPlaylist.title}
                        onChange={(e) => this.setState({ editTitle: e.currentTarget.value })} />

                    <TextField
                        type="text"
                        defaultValue={this.props.editPlaylist.songs}
                        onChange={(e) => this.setState({ editSongs: e.currentTarget.value })} />
                    {/* <input type="text" value={this.state.editTitle} onChange={(e) => this.setState({ editTitle: e.currentTarget.value })} /> */}
                    {/* <input type="text" value={this.state.editSongs}
                        onChange={(e) => this.setState({ editSongs: e.currentTarget.value })}
                    /> */}
                    <button onClick={this.handlePlaylistUpdate}>Edit Playlist</button>
                </form>
            </div>
        )
    }
}
