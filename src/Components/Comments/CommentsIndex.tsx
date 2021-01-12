import React from 'react'
import CommentsCreate from './CommentsCreate'


type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

type State = {
    comments: []
}

export default class CommentsIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            comments: []
        }
        this.callComments = this.callComments.bind(this)
    }

    callComments() {
        const url = 'http://localhost:4000/comments/mycomments'

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
                    comments: data
                })
                console.log(this.state.comments);
            })
    }

    componentDidMount() {
        this.callComments()
    }

    render() {
        return (
            <div>
                <CommentsCreate token={this.props.token} />
            </div>
        )
    }

}