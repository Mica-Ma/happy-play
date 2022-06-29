
let timer

process()

function process() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    if (!window.player) {
      process()
    } else {
      init(window.player)
    }
  }, 1000);
}

function init(player) {
  player.addListener('ended', () => {
    console.log('ended');
    setTimeout(() => {
      window.close()
    }, 5000);
  });
  player.addListener('play', () => {
    console.log('play');
  });
  player.addListener('pause', () => {
    console.log('pause');
  });
  // const playEl = player.CB.play
  // player.playOrPause()
  setTimeout(() => {
    player.videoMute()
    player.videoPlay()
  }, 2000);
}
