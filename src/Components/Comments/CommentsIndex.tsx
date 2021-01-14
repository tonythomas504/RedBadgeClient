import React from 'react'
import CommentsCreate from './CommentsCreate'
import CommentsEdit from './CommentsEdit'
import CommentsTable from './CommentsTable'
import { Button, Card, CardContent } from '@material-ui/core'
import APIURL from '../../helpers/environment'


type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

type State = {
    comment: [],
    commentUpdated: any,
    updateActive: boolean,
    fetchItems: any,
    editComment: any | null,
    isUpdated: boolean,
    deleteComment: any | null
}

export default class CommentsIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            comment: [],
            editComment: null,
            commentUpdated: {},
            updateActive: false,
            fetchItems: {},
            isUpdated: false,
            deleteComment: null
        }
        this.callComments = this.callComments.bind(this)
    }

    callComments() {
        const url = `${APIURL}comment/mycomments`

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
                    comment: data
                })
                console.log(this.state.comment);
            })
    }

    componentDidMount() {
        this.callComments()
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

    editComment = (comment: any) => {
        this.setState({
            editComment: comment,
            isUpdated: true
        })
    }

    deleteComment = (comment: any) => {
        this.setState({
            deleteComment: comment,
            isUpdated: true
        })
    }

    render() {
        return (
            <div>
                <CommentsCreate token={this.props.token} />
                {this.state.comment.map((comment: any) => (
                    <Card id="card-comment">
                        <CardContent><p>Title: </p>{comment.Title}</CardContent>
                        <CardContent><p>Body: </p>{comment.Body}</CardContent>
                        <CardContent><Button id="button" onClick={(event) => this.editComment(comment)}>Edit Comments</Button></CardContent>
                    </Card>
                ))}
                <Button id="button" onClick={this.callComments}>Post Your Comment</Button>

                {this.state.isUpdated ? <CommentsEdit commentUpdated={this.state.commentUpdated} token={this.props.token} updateOff={this.updateOff.bind(this)} fetchItems={this.callComments} editComment={this.state.editComment} /> : null}
                <br />
                <br />
                <CommentsTable comment={this.state.comment} deleteComment={this.state.deleteComment} updateOn={this.updateOn.bind(this)} token={this.props.token} fetchItems={this.callComments} />
            </div>
        )
    }

}