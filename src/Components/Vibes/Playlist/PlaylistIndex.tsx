import React from 'react'
import PlaylistCreate from './PlaylistCreate'
import PlaylistEdit from './PlaylistEdit'
import PlaylistTable from './PlaylistTable'
import APIURL from '../../../helpers/environment'

type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

type State = {
    playlist: [];
    playlistUpdated: any,
    updateActive: boolean,
    fetchItems: any,
    editPlaylist: any | null,
    deletePlaylist: any | null
    isUpdated: boolean


}


export default class PlaylistIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            editPlaylist: null,
            playlist: [],
            playlistUpdated: {},
            updateActive: false,
            fetchItems: {},
            isUpdated: false,
            deletePlaylist: null

        }
        this.callPlaylist = this.callPlaylist.bind(this)
    }



    callPlaylist() {
        console.log('hit')
        const url = `${APIURL}/playlist/`
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

    updateOff = () => {
        this.setState({
            updateActive: false
        })
    }

    updateOn = () => {
        this.setState({
            updateActive: true
        })
    }

    editPlaylist = (playlist: any) => {
        this.setState({
            editPlaylist: playlist,
            isUpdated: true
        })
    }

    deletePlaylist = (playlist: any) => {
        this.setState({
            deletePlaylist: playlist,
            isUpdated: true
        })
    }
    render() {
        return (
            <div>
                {/* <CommentsIndex token={this.props.token} updateToken={this.props.updateToken} clearToken={this.props.clearToken} /> */}

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
                        <li><button onClick={(event) => this.editPlaylist(playlist)}>Edit</button></li>
                    </ul>
                ))}
                <button onClick={this.callPlaylist}>Submit</button>

                {this.state.isUpdated ? <PlaylistEdit playlistUpdated={this.state.playlistUpdated} token={this.props.token} updateOff={this.updateOff.bind(this)} fetchItems={this.callPlaylist} editPlaylist={this.state.editPlaylist} /> : null}


                <PlaylistTable playlist={this.state.playlist} deletePlaylist={this.state.deletePlaylist} updateOn={this.updateOn.bind(this)} token={this.props.token} fetchItems={this.callPlaylist} />
            </div>
        )
    }
}