import React from 'react'

const clientId = '0541ee780a044b798932c6ba7481cf46';
const redirect_uri = 'http://localhost:3000/';


type SpotifyAuth = {
    accessToken: string
}

export default class Spotify extends React.Component<{}, SpotifyAuth> {
    constructor(props: string){
        super(props)
        this.state ={
            accessToken: ''
        }
    }

    getAccess = (accessToken: string) => {
    const clientId = '0541ee780a044b798932c6ba7481cf46';
    const redirect_uri = 'http://localhost:3000/';

        if(accessToken) {
            return accessToken
        } 

        const newAccessToken = window.location.href.match(/access_token=([^&]*)/)
        const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (newAccessToken && newExpiresIn) {
            accessToken = newAccessToken[1];
            const expiresIn = Number(newExpiresIn[1]);
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            // window.history.pushState('Access Token', null, '/')
            return accessToken
        } else {
            const spotifyAcess = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirect_uri}`;
            window.location.href = spotifyAcess
        }

}

search = (searchItems: React.SyntheticEvent) => {
        const accessToken = this.getAccess
        const url = `https://api.spotify.com/v1/search?type=track&q=${searchItems}`;
        

        return fetch(url, {headers: new Headers({
            'Content-Type' : `${accessToken}`
        })
    })
        .then(
            (response) => {
                if (response.ok){
                    return response.json()
                }
            }
        )
        .then((jsonResponse) => {
            if(!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map((track: any) => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri

            }))
        })
     }

    savePlaylists = (playlistName: string, trackURIs: string) =>{ 
        if(playlistName && trackURIs.length) {
            const accessToken = this.getAccess
            const url = 'https://api.spotify.com/v1/me'

            return fetch('https://api.spotify.com/v1/me', {
                headers:  new Headers({
                    'Content-Type' : `${accessToken}`
                })
            })
            .then(
                (response) => {
                    if (response.ok) {
                        return response.json()
                    }
                }
            )
            .then((jsonResponse: any) => {
                const userID = jsonResponse.id
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type' : `${accessToken}`
                    }),
                    body: JSON.stringify({
                        name: playlistName
                    })
                })
                .then(
                    (response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    }
                )
                .then ((jsonResponse) => {
                    const playlistID = jsonResponse.id

                    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                        method: 'POST',
                        headers: new Headers({
                            'Content-Type' : `${accessToken}`
                        }),
                        body: JSON.stringify({uris: trackURIs})
                    })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((jsonResponse) =>  jsonResponse)
                })
            })
        }   else {
            return
        }

       

}
}