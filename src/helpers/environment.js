let APIURL = ''

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':

        APIURL = 'http://localhost:4000';

        break;

    case 'tt-vibe-cast.herokuapp.com':

        APIURL = 'https://tt-vibe-cast.herokuapp.com'


}

export default APIURL