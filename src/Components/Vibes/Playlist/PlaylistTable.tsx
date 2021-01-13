import React from 'react'
import { Button, Card, CardContent } from '@material-ui/core'

type Props = {
    playlist: [],
    deletePlaylist: any | null,
    updateOn: () => void,
    token: string,
    fetchItems: () => void
}


export default class PlaylistTable extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    deletePlaylist = (playlist: any) => {
        const url = `http://localhost:4000/playlist/${playlist.id}`
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => this.props.fetchItems())
    }

    render() {
        return (
            <div>
                {this.props.playlist ? this.props.playlist.map((playlist: any) => (
                    <Card id="delete" key={playlist.id}>
                        <CardContent>{playlist.Title}</CardContent>
                        <CardContent>{playlist.Songs}</CardContent>

                        <Button id="button" variant="outlined"
                            onClick={() => { this.deletePlaylist(playlist) }}> Delete
                        </Button>
                    </Card>
                )) : undefined}
            </div>
        )
    }
}

