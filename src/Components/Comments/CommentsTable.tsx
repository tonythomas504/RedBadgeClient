import React from 'react'
import { Button, Card, CardContent } from '@material-ui/core'
import APIURL from '../../helpers/environment'

type Props = {
    comment: [],
    deleteComment: any | null,
    updateOn: () => void,
    token: string,
    fetchItems: () => void
}


export default class PlaylistTable extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    deletePlaylist = (comment: any) => {
        const url = `${APIURL}comment/${comment.id}`
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
                {this.props.comment ? this.props.comment.map((comment: any) => (
                    <Card id="delete" key={comment.id}>
                        <CardContent>{comment.Title}</CardContent>
                        <CardContent>{comment.Body}</CardContent>

                        <Button id="button" variant="outlined"
                            onClick={() => { this.deletePlaylist(comment) }}> Delete
                        </Button>
                    </Card>
                )) : undefined}
            </div>
        )
    }
}