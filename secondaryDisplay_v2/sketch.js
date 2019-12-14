// variables
var numNodes = 9;
var xCenter = innerWidth/2;
var yCenter = innerHeight/2;
var circleData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

// select the body
var body = d3.select("body");

// append an svg to the body
var svg = body.append("svg")
    .attr("width", innerWidth)
    .attr("height", innerHeight)

// append a g to the svg
var bubbles = svg.append("g")

// data
var data = [314, 238, 231, 199, 285, 193, 200, 70000, 63000];
var label = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Google", "Twitter"]

// create nodes with random radii values
var nodes = d3.range(numNodes).map(function (d, i) {
    return {
      radius: data[d],
    }
});

// define radial gradient for circles
var radialGradient = svg.append("defs")
.append("radialGradient")
.attr("id", "radial-gradient");

radialGradient.append("stop")
.attr("offset", "0%")
.attr("stop-color", "#99ccff");

radialGradient.append("stop")
.attr("offset", "100%")
.attr("stop-color", "#fff");

// define simulation
var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(8))
    .force('x', d3.forceX().x(function (d) {
    return xCenter;
    }))
    .force('y', d3.forceY().y(function (d) {
        return yCenter;
        }))
    .force('collision', d3.forceCollide().radius(function (d) {
    return d.radius;
    }))
    .on('tick', ticked)

var div1 = d3.select("body").append("div")
     .attr("class", "label1")
     .style("opacity", 0)
     .text("hello")
var div2 = d3.select("body").append("div")
     .attr("class", "label2")
     .style("opacity", 0)
     .text("hello")
var div3 = d3.select("body").append("div")
     .attr("class", "label3")
     .style("opacity", 0)
     .text("hello")

function ticked() {
var u = d3.select('svg g')
    .selectAll('circle')
    .data(nodes);

//u.enter()
  var circle = u.enter().append('circle')
  
  circle.attr('r', function (d) {
    return d.radius;
  })
  // .style('fill', 'red')
  .style("opacity", ".95")
  .style("fill", "url(#radial-gradient)")
  .merge(u)
  .attr('cx', function (d, i) {
    circleData[i].cx = d.x;
    return d.x;
    
  })
  .attr('cy', function (d, i) {
    circleData[i].cy = d.y;
    return d.y;
  })
  .on("mouseover", function(d, i){
    console.log(d)
    div1.transition()
        .duration(50)
        .style("opacity", 1)
        .text(label[i])
    div2.transition()
        .duration(50)
        .style("opacity", 1)
        .text(d.radius + " loads")
    div3.transition()
        .duration(50)
        .style("opacity", 1)
        .text("~" + (d.radius*7) + "g")
               
  })

  svg.call(d3.zoom()
    .extent([[0, 0], [innerWidth, innerHeight]])
    .scaleExtent([-10, 8])
    .on("zoom", zoomed));

    function zoomed() {
        u.attr("transform", d3.event.transform);
    }
  
  u.exit().remove();


}







