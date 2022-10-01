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
      username: 'songrequest_bot_',
      password: 'oauth:c9rkxl05als794aa7e2u8udhs8envc'
    }
});

client.connect();