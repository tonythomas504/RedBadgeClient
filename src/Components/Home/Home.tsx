import React from 'react'
import CommentsIndex from '../Comments/CommentsIndex'
import PlaylistIndex from '../Vibes/Playlist/PlaylistIndex'

type Props = {
    updateToken: (newToken: string) => void,
    clearToken: () => void,
    token: string
}

export default class Home extends React.Component<Props> {
    render() {
        return (
            <div>
                <PlaylistIndex updateToken={this.props.updateToken} clearToken={this.props.clearToken} token={this.props.token} />
                <CommentsIndex updateToken={this.props.updateToken} clearToken={this.props.clearToken} token={this.props.token} />
            </div>
        )
    }
}

// export default class Home extends React.Component<Props> {
//     render() {
//         return (
//             <div className="container">
//                 <Navbar onClick={this.props.clickLogout} token={this.props.token} />
//                 <ClosetIndex token={this.props.token} />
//                 <WishlistIndex token={this.props.token} />
//             </div>
//         );
//     }

// export {}


{/* {this.state.token ? <PlaylistIndex updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} /> : <Auth updateToken={this.updateToken.bind(this)} />} <br /> <br />


        <CommentsIndex updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} /> */}


    //     render() {
    //         return (
    //             <div className=“container”>
    //                 <Dialog open={true}>
    //                 <DialogTitle id=“form-dialog-title”>
    //                     StyList
    //                 </DialogTitle>
    //                     <DialogContent>
    //                     <Login
    //                         login={this.state.login}
    //                         toggle={this.toggle.bind(this)}
    //                         updateToken={this.props.updateToken} />
    //                     </DialogContent>
    //                     <br />
    //                     <DialogContent>
    //                         <Register
    //                             login={this.state.login}
    //                             toggle={this.toggle.bind(this)}
    //                             updateToken={this.props.updateToken} />
    //                     </DialogContent>
    //                     <br />
    //                 </Dialog>
    //             </div>
    //         );
    //     }
    // 9:46
    // render() {
    //         return (
    //             <div className=“container”>
    //                 <Dialog open={true}>
    //                     <DialogTitle id=“form-dialog-title”>
    //                         <strong>StyList</strong>
    //                 </DialogTitle>
    //                     <DialogContent>
    //                         <DialogTitle>
    //                         <Login
    //                             login={this.state.login}
    //                             toggle={this.toggle.bind(this)}
    //                             updateToken={this.props.updateToken} />
    //                             </DialogTitle>
    //                     </DialogContent>
    //                     <DialogContent>
    //                     <DialogTitle>
    //                         <Register
    //                             login={this.state.login}
    //                             toggle={this.toggle.bind(this)}
    //                             updateToken={this.props.updateToken} />
    //                             </DialogTitle>
    //                     </DialogContent>
    //                 </Dialog>
    //             </div>
    //         );
    //     }