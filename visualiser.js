function Visualiser() {
  var context, src, analyser, dataArray = [], barChart, circle;

  context = new AudioContext();
  console.log(context);
  src = context.createMediaElementSource(audio);
  console.log(context);
  analyser = context.createAnalyser();

  src.connect(analyser);
  analyser.connect(context.destination);
  analyser.fftSize = 256;

  this.init = function () {
    circle = new Circle();
    barChart = new BarChart();

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