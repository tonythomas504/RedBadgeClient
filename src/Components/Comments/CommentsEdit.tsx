import React from 'react'
import { TextField, Button } from '@material-ui/core'
import APIURL from '../../helpers/environment'

type Props = {
    commentUpdated: any,
    token: string,
    updateOff: () => void,
    fetchItems: () => void,
    editComment: any | null
}

type State = {
    editTitle: string,
    editBody: string,
    id: number | null,
    comment: any | null
}

export default class CommentsEdit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            editTitle: '',
            editBody: '',
            id: this.props.editComment ? this.props.editComment.id : null,
            comment: []

        }
    }

    handleCommentUpdate = () => {
        const url = `${APIURL}/comment/${this.props.editComment.id}`

        fetch(url, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify({ Title: this.state.editTitle, Body: this.state.editBody })
        })
            .then(() => {
                this.props.updateOff();
                this.props.fetchItems();
            })
    }

    componentDidUpdate(prevProps: any) {
        if (this.props != prevProps) {
            this.setState({
                comment: this.props.editComment
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <TextField
                        type="text"
                        value={this.state.editTitle}
                        onChange={(e) => this.setState({
                            editTitle: e.currentTarget.value
                        })} />
                    <TextField
                        type="text"
                        value={this.state.editBody}
                        onChange={(e) => this.setState({
                            editBody: e.currentTarget.value
                        })} />
                    <Button id="button" onClick={this.handleCommentUpdate}>Edit Comments</Button>
                </form>
            </div>
        )
    }


}