function Circle() {
  var dataset = [
    {
      x: 100,
      y: 100,
      r: 10
    },
    {
      x: 100,
      y: 100,
      r: 10
    },
    {
      x: 100,
      y: 100,
      r: 10
    },
    {
      x: 100,
      y: 100,
      r: 10
    }
  ], center = 200;


  var margin = { top: 0, right: 0, bottom: 0, left: 0 };

  var w = 400,
    h = 400;

  var svg = d3.select('#circle').append('svg')
    .attr('width', w)
    .attr('height', h)
    .append('g')
    .attr('transform', 'translate(0, 0)');

  var xScale = d3.scale.linear()
    .domain([0, 100])
    .range([0, center]);

  var yScale = d3.scale.linear()
    .domain([0, 400])
    .range([center, 0]);

  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('cx', function (d) {
      return xScale(d.x);
    })
    .attr('cy', function (d) {
      return yScale(d.y);
    })
    .attr('r', function (d) {
      return d.r;
    });

  this.update = function (dataArray) {
    var sum = 0;
    dataset = [];

    dataArray.forEach(function (d) {
      sum += d;
    })

    var radius = sum / dataArray.length;
    dataset = [
      {
        x: center,
        y: center,
        r: radius,
        stroke: 'black',
        fill: 'black'
      },
      {
        x: center,
        y: center,
        r: 3 * radius / 4,
        stroke: 'blue',
        fill: 'blue'
      },
      {
        x: center,
        y: center,
        r: radius / 2,
        stroke: 'white',
        fill: 'white'
      },
      {
        x: center,
        y: center,
        r: radius / 4,
        stroke: 'pink',
        fill: 'pink'
      }
    ];

    svg.selectAll('circle')
      .data(dataset)
      .attr('fill', function(d){
        return d.fill;
      })
      .attr('stroke', function (d) {
        return d.stroke
      })
      .attr('cx', function (d) {
        return d.x;
      })
      .attr('cy', function (d) {
        return d.y;
      })
      .attr('r', function (d) {
        return d.r;
      });
  }
}
