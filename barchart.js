function BarChart() {
  var dataset = [];

  for (var i = 0; i < 25; i++) {
    dataset.push(i);
  }

  var w = 550, h = 400;

  var svg = d3.select('#bar-chart').append('svg')
    .attr('width', w)
    .attr('height', h);

  var yScale = d3.scale.linear()
    .domain([0, 256])
    .range([0, h]);

  var multiplier = 5;

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
      return i * 22;
    })
    .attr('y', function (d) {
      return h - yScale(d);
    })
    .attr('width', 20)
    .attr('height', function (d) {
      return yScale(d);
    });

  this.update = function (dataset) {
    svg.selectAll('rect')
      .data(dataset)
      .attr('x', function (d, i) {
        return i * 22;
      })
      .attr('y', function (d) {
        return h - yScale(d);
      })
      .attr('width', 20)
      .attr('height', function (d) {
        return yScale(d);
      });
  }
}
