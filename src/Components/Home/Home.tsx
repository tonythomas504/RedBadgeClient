import React from 'react'
import CommentsIndex from '../Comments/CommentsIndex'
import PlaylistIndex from '../Vibes/Playlist/PlaylistIndex'
import Navbar from '../Navbar/Navbar'

type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

export default class Home extends React.Component<Props> {
    render() {
        return (
            <div>
                <Navbar clearToken={this.props.clearToken} />
                <PlaylistIndex updateToken={this.props.updateToken} clearToken={this.props.clearToken} token={this.props.token} />
                <CommentsIndex updateToken={this.props.updateToken} clearToken={this.props.clearToken} token={this.props.token} />
            </div>
        )
    }
}

