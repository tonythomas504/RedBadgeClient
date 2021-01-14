let APIURL = ''

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':

        APIURL = 'http://localhost:4000';

        break;

    case 'tt-vibecast-server.herokuapp.com':

        APIURL = 'https://tt-vibecast-server.herokuapp.com'


}

export default APIURL