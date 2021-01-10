import React from 'react'
import PlaylistCreate from './PlaylistCreate'
import { BrowserRouter as Router } from 'react-router-dom'

type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

type State = {
    playlist: Array<{ id: number, title: string, songs: string }>,

}

type Playlist = {
    id: number,
    title: string,
    songs: string
}

export default class PlaylistIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            playlist: []
        }
        this.handlePlaylistDisplay = this.handlePlaylistDisplay.bind(this)
    }

    handlePlaylistDisplay = () => {
        return this.state.playlist.map((playlist: Playlist) => {
            return (
                <ul key={playlist.id}>
                    <li>{playlist.title}</li>
                    <li>{playlist.songs}</li>
                </ul>
            );
        });
    };

    componentDidMount() {
        this.fetchPlaylist()
    }

    fetchPlaylist() {
        const url = 'http://localhost:4000/playlist/myplaylist'
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.playlists);
                this.setState({
                    playlist: data
                })
                console.log(this.state.playlist);
            })
    }



    render() {
        return (
            <div>
               <h1>Hello</h1>
              
                <div>
                {this.handlePlaylistDisplay()}
                    {/* <Router>
                        <PlaylistCreate token={this.props.token} />
                    </Router> */}
                </div>
                <PlaylistCreate fetchPlaylist={this.fetchPlaylist.bind(this)} token={this.props.token} />
            </div>
        )
    }
}