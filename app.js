const urlParams = new URLSearchParams(window.location.search);
const client = new tmi.Client({
    channels: [ urlParams.get('streamer') ],
    identity: {
        username: 'song_request_bot',
        password: 'oauth:4ne23tobrx889qe9l6xmaafqb6j8fb'
    }
});

client.connect();