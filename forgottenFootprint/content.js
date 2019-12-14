// variables
var width = innerWidth;
var height = innerHeight;
var numNodes = 0;
// var maxRadius = 30;
var xCenter = [];

var totalChanges = 0;
var currentChanges = 0;
// var oldNumChanges = 0;
var sizeArray;
var requestRatio = 1.16;

var boxVisible = false;

// recieve a message from the background
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse) {

  // organize message
  // set the size array
  sizeArray = request.size
  // set the number of nodes
  numNodes = request.size.length
  // show the number of requests that occured in the last url load
  console.log("Number of server requests for the last URL load: " + sizeArray[sizeArray.length-1])
  // add to size array
  for(let i=0; i<currentChanges; i++){
    sizeArray.push(currentChanges)
  }

  // save information for the bottom label
  var total = Math.round(request.total * requestRatio)
  var miles = (total/404).toFixed(3) // 404g CO2 per mile
  

  // draw bubbles
  //create xCenter array
  for (let i = width / 20; i <= width; i += width / 10) {
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


  // create nodes with random radii values
  var nodes = d3.range(numNodes).map(function (d, i) {
    return {
      //radius: Math.random() * 2.5 * maxRadius,
      radius: (sizeArray[d] * requestRatio)* 10,
      //radius: 30,
      category: i % 10
    }
  });

  // define simulation
  var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(8))
    .force('x', d3.forceX().x(function (d) {
      return xCenter[d.category];
    }))
    .force('collision', d3.forceCollide().radius(function (d) {
      return d.radius;
    }))
    .on('tick', ticked);

  function ticked() {
    var u = d3.select('svg g')
      .selectAll('circle')
      .data(nodes);

    u.enter()
      .append('circle')
      .attr('r', function (d) {
        return d.radius;
      })
      // .style('fill', 'red')
      .style("opacity", ".95")
      .style("fill", "url(#radial-gradient)")
      .merge(u)
      .attr('cx', function (d) {
        return d.x;
      })
      .attr('cy', function (d) {
        if(numNodes<10){
          return d.y + ((height/50)*numNodes);
        }else{
          return d.y + ((height/50)*10);
        }
        //return d.y + ((height/80)*numNodes);
        //return d.y;
      })

    u.exit().remove();
  }

  // create bottom nav div
  var bottomNav = body.append('div')
    .attr("class", "bottomNav")
  
  // add first label
  bottomNav.append('div')
    .attr("class", "factLabel")
    .attr("id", "firstLine")
    .text("Your browsing session produced about " + total + "g of CO2.")
  
  // add second label
  bottomNav.append('div')
    .attr("class", "factLabel")
    .attr("id", "secondLine")
    .text("That is equivalent to driving about " + miles + " miles in a standard car.")

  // add button
  bottomNav.append('button')
    .attr("class", "learnMore")
    .attr("id", "learnMore")
    .text("learn more")

  // add description box
  var box = body.append('div')
    .attr("class", "popup")
    .attr("id", "description")
    .style("visibility", "hidden")

  box.append('div')
    .attr("class", "popup-text-heading")
      .text("How does the internet produce CO2 emissions?")
  box.append('div')
    .attr("class", "popup-text")
      .text("The overwhelming amount of emissions from internet use comes from data centers.  Data centers are facilities where servers, data storage devices, network devices, and monitors are used to store, manage, process, and exchange digital data and information.  In order for the internet to be maintained, these systems must run constantly, which can dissipate a great deal of heat.  Thus, data centers have high energy requirements to cool the computers and ensure that they do not overheat.  This can produce a large amount of carbon emissions.  In this Chrome Extension, when a browser loads a new webpage, an additional CO2 bubble appears at the top of the screen.  The size of each bubble corresponds to the estimated CO2 emissions produced from that request.")

  box.append('div')
    .attr("class", "popup-text-heading")
      .text("What can we do?")
  box.append('div')
    .attr("class", "popup-text")
      .text("As use of the internet continues to rise around the globe, we must stop thinking about the internet as a purely virtual product, but as something that has real, physical consequences for our planet.  It is hard to make impactful change as an individual, however we should include data center emissions in our conversations and considerations regarding renewable energy and climate change.")
  
  box.append('div')
    .attr("class", "popup-text-heading")
      .text("More stats:")
  box.append('div')
      .attr("class", "popup-text")
      .text("About 7g of CO2 is produced for every Google search.")
  box.append('div')
      .attr("class", "popup-text")
      .text("In the year 2019, the internet will pollute more than civil aviation.")
  box.append('div')
      .attr("class", "popup-text")
      .text("An email sent with a 1MB attachment produces about 19g of CO2.")



  // when the button is pressed
  var button = document.getElementById("learnMore")
  var box = document.getElementById("description")
  button.addEventListener("click", buttonPressed)
  function buttonPressed(){
    if(!boxVisible){ // then make visible
      box.style.visibility = "visible"
      boxVisible = true
    }else{ // then make hidden
      box.style.visibility = "hidden"
      boxVisible = false
    }
  

  }

}





