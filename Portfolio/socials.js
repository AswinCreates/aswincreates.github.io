document.getElementById('insta').addEventListener('click',function() {window.open('https://www.instagram.com/ashwincognito', '_blank'); });

document.getElementById('discord').addEventListener('click', function() {window.open('https://discordapp.com/users/952073733705724026', '_blank'); });

document.getElementById('github').addEventListener('click', function() {window.open('https://github.com/AswinCreates', '_blank'); });

document.getElementById('x').addEventListener('click', function() {window.open('https://x.com/iashwin8511', '_blank'); });

// Music Player ---------------------------------------- //
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var audio = document.getElementById('myAudio');
    var playIcon = document.getElementById('play');
    var pauseIcon = document.getElementById('pause');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            play.style.display = 'none';
            pause.style.display = 'block';
        } else {
            audio.pause();
            play.style.display = 'block';
            pause.style.display = 'none';
        }
    });
});

// Skill -------------------------------------------- //
document.querySelectorAll('.popoutButton').forEach((button, index) => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const span = document.getElementById(targetId);
      
      const bottomPosition = 20 + (index * 60);
      
      span.style.bottom = `${bottomPosition}px`;
      span.classList.add('active');
  
      setTimeout(function() {
        span.classList.remove('active');
        span.style.bottom = `-100px`;
      }, 4000);
    });
  });