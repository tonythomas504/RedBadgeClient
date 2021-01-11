import React from 'react'
import PlaylistCreate from './PlaylistCreate'
import { BrowserRouter as Router } from 'react-router-dom'

type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

type State = {
    playlist: [];

}


export default class PlaylistIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {

            playlist: []
        }
        this.callPlaylist = this.callPlaylist.bind(this)
    }



    callPlaylist() {
        console.log('hit')
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
                this.setState({
                    playlist: data
                })
                console.log(this.state.playlist);
            })
    }

    componentDidMount() {
        this.callPlaylist();
        console.log(this.state.playlist);
    }

    render() {
        return (
            <div>

                <PlaylistCreate token={this.props.token} />
                {/* {this.state.playlist ? this.state.playlist.map(playlist => (
                  <ul key={playlist.id}>
                      <h1>Canyou see me</h1>
                      <li>{playlist}</li>
                      <li>{playlist.songs}</li>
                  </ul>
              )) : undefined} */} {this.state.playlist.map((playlist: any) => (
                    <ul>
                        <li>{playlist.Title}</li>
                        <li>{playlist.Songs}</li>
                    </ul>
                ))}
                <button onClick={this.callPlaylist}>Submit</button>
            </div>
        )
    }
}