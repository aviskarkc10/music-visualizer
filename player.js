function Player() {
  var visualiser;
  var audio = document.getElementById('audio');
  var audioFile = document.getElementById('audio-file');

  audioFile.onchange = function () {
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();

    visualiser = new Visualiser();
    visualiser.init();
  }
}

var player = new Player();
