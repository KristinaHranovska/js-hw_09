import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(playOn, 1000));

function playOn(date) {
    const { seconds } = date;
    localStorage.setItem("videoplayer-current-time", seconds);
}

const localVideoTime = localStorage.getItem("videoplayer-current-time");

if (localVideoTime !== null) {
    player.setCurrentTime(localVideoTime);
}