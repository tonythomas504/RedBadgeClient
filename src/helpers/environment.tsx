let APIURL = ''

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':

        APIURL = 'http://localhost:4000';

        break;

    case 'tt-vibecast-client.herokuapp.com':

        APIURL = 'https://tt-vibecast-client.heroku.com'


}

export default APIURL