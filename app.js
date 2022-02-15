const urlParams = new URLSearchParams(window.location.search);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const client = new tmi.Client({
    channels: [ urlParams.get('streamer') ],
    identity: {
        username: 'song_request_bot',
        password: 'oauth:4ne23tobrx889qe9l6xmaafqb6j8fb'
    }
});

client.connect();