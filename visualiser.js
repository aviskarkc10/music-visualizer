function Visualiser() {
  var context, src, analyser, dataArray = [], barChart, circle;

  this.init = function () {
    circle = new Circle();
    barChart = new BarChart();

    context = new AudioContext();
    src = context.createMediaElementSource(audio);
    analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;

    dataArray = new Uint8Array(analyser.frequencyBinCount);
    getFrequency();
  }

  getFrequency = function () {
    analyser.getByteFrequencyData(dataArray);
    barChart.update(dataArray);
    circle.update(dataArray);
    window.requestAnimationFrame(getFrequency);
  }
}