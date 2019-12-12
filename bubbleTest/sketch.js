// variables
var width = innerWidth;
var height = innerHeight;
var numNodes = 20;
var maxRadius = 30;
var xCenter = [];

// create xCenter array
for(let i=width/20; i<=width; i+=width/10){
    xCenter.push(i);
}

// select the body
var body = d3.select("body");


// append an svg to the body
var svg = body.append("svg")
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .style("position", "fixed")
    .style("top", "0px")
    .style("left", "0px")
    .style('pointer-events', 'none')

// append a g to the svh
var bubbles = svg.append("g")


// define radial gradient
var radialGradient = svg.append("defs")
  .append("radialGradient")
    .attr("id", "radial-gradient");

radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#99ccff");

radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#fff");
    

// create nodes with random radii values
var nodes = d3.range(numNodes).map(function(d, i) {
    return {
      radius: Math.random() * 2 * maxRadius,
      category: i % 10
    }
  });

// define simulation
var simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(5))
  .force('x', d3.forceX().x(function(d) {
    return xCenter[d.category];
  }))
  .force('collision', d3.forceCollide().radius(function(d) {
    return d.radius;
  }))
  .on('tick', ticked);

function ticked() {
  var u = d3.select('svg g')
    .selectAll('circle')
    .data(nodes);

  // var n = 200 + (2*maxRadius)
  // svg.attr("height", n)

  u.enter()
    .append('circle')
    .attr('r', function(d) {
      return d.radius;
    })
    //.style('fill', 'red')
    .style("opacity", ".95")
    .style("fill", "url(#radial-gradient)")
    .merge(u)
    .attr('cx', function(d) {
      return d.x;
    })
    .attr('cy', function(d) {
      return d.y;
      
    })

  u.exit().remove();

  
}

// var group = d3.select("g")
// console.log(group.style("height"))
// group.style('transform', 'translate(0px,' +  group.style("height") + ')')

// // get the lowest circle
// var yVals = [];
// for(let i=0; i<nodes.length; i++){
//   yVals.push(nodes[i].y);
// }
// console.log(yVals)
// console.log(Math.max(...yVals))
// var maxY = Math.max(...yVals);
// var index = yVals.findIndex(item => item.y === maxY);
// svg.attr("height", (maxY + index)*10 )

// var group = d3.select('g');
// var heightToSet = group.style("height")
// console.log(group.style("height"));

// svg.style("height", heightToSet)








