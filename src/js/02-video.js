import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// console.log(iframe);

// використовую video player - роблю новий екземпляр
const player = new Player(iframe);
// console.log(player);

// створила функцію де подія "timeupdate"
// функцію _.throttle потрібно грузити без _. бо Я не грузила весь lodash
// _.throttle(func, [wait=0], [options={}])
//
player.on('timeupdate', throttle(timeStop, 1000));

function timeStop() {
  // Отримайте поточну позицію відтворення за секунди.
  player.getCurrentTime().then(function (seconds) {
    //локалье сховище ств новий час
    localStorage.setItem('videoplayer-current-time', seconds);
  });
  //  вивила фактичний час зупинки
  // console.log(localStorage.getItem('videoplayer-current-time'));
}

// Встановює поточну позицію відтворення в секундах (час коли зупинився)
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
