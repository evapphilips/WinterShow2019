var width = window.innerWidth-10
var height = window.innerHeight

// access body
var body = d3.select("body");

// make section 1 div
var section1 = body.append('div')
    .attr("class", "section1")

// add section 1 header
section1.append('h1')
    .attr("class", "heading")
    .text("My browsing data this week")

// add circles
var circleContainer = section1.append('svg')
    .attr("class", "circle-container")
    .attr("width", width)
    .attr("height", height/2)

var maxSize = width/14;
var yPos = width/7
var opacity = "1.00";
var weekData = [20, 60, 40, 28, 37, 50, 23];
var maxWeekSearch = 50;

// add all seven circles
circleContainer.append("circle")
    .attr("cx", maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[0] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer.append("circle")
    .attr("cx", 3*maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[1] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer.append("circle")
    .attr("cx", 5*maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[2] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer.append("circle")
    .attr("cx", 7*maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[3] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer.append("circle")
    .attr("cx", 9*maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[4] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer.append("circle")
    .attr("cx", 11*maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[5] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer.append("circle")
    .attr("cx", 13*maxSize)
    .attr("cy", yPos)
    .attr("r", (weekData[6] * maxSize)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

// define radial gradient
var radialGradient = circleContainer.append("defs")
  .append("radialGradient")
    .attr("id", "radial-gradient");

radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#99ccff");

radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#fff");
   