var width = window.innerWidth-10
var height = window.innerHeight

// access body
var body = d3.select("body");


////// SECTION 1 //////////
// make section 1 div
var section1 = body.append('div')
    .attr("class", "section")

// add section 1 header
section1.append('h1')
    .attr("class", "heading")
    .text("My browsing data this week")

// add circle container for the week
var circleContainer1 = section1.append('svg')
    .attr("class", "circle-container")
    .attr("width", width)
    .attr("height", height/2)

var maxSize1 = width/14;
var yPos1 = width/7
var opacity = "1.00";
var weekData = [314, 238, 231, 199, 285, 200, 200]
var maxWeekSearch = 1000;

// add all seven circles for the week
circleContainer1.append("circle")
    .attr("cx", maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[0] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer1.append("circle")
    .attr("cx", 3*maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[1] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer1.append("circle")
    .attr("cx", 5*maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[2] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer1.append("circle")
    .attr("cx", 7*maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[3] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer1.append("circle")
    .attr("cx", 9*maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[4] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer1.append("circle")
    .attr("cx", 11*maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[5] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer1.append("circle")
    .attr("cx", 13*maxSize1)
    .attr("cy", yPos1)
    .attr("r", (weekData[6] * maxSize1)/maxWeekSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

// define radial gradient
var radialGradient = circleContainer1.append("defs")
  .append("radialGradient")
    .attr("id", "radial-gradient");

radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#99ccff");

radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#fff");




////// SECTION 2 //////////
// make section 2 div
var section2 = body.append('div')
    .attr("class", "section")

// add section 2 header
section2.append('h1')
    .attr("class", "heading")
    .text("Estimated Server Requests for Big Tech")

// add circle container for the companies
var circleContainer2 = section2.append('svg')
    .attr("class", "circle-container")
    .attr("width", width)
    .attr("height", height/2)

var maxSize2 = width/4;
var yPos2 = width/4
var techData = [63000, 70000];
var maxTechSearch = 70000;

// add all three circles for tech
circleContainer2.append("circle")
    .attr("cx", maxSize2)
    .attr("cy", yPos2)
    .attr("r", (techData[0] * maxSize2)/maxTechSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer2.append("circle")
    .attr("cx", 3*maxSize2)
    .attr("cy", yPos2)
    .attr("r", (techData[1] * maxSize2)/maxTechSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

circleContainer2.append("circle")
    .attr("cx", 5*maxSize2)
    .attr("cy", yPos2)
    .attr("r", (techData[2] * maxSize2)/maxTechSearch)
    .attr("fill", "url(#radial-gradient)")
    .style("opacity", ".95")

   
