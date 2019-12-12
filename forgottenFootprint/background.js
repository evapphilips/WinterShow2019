// show that the background is running
console.log("background is running");

// variables
var totalChanges = 0;
var currentChanges = 0;
var lastTotalChanges = 0;
var sizeArray = []

// when a page is loaded,
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //console.log("a new page loaded")
    

    // add to the number of changes
    totalChanges ++
    console.log(totalChanges)
    
    if (changeInfo.status == 'complete') {
        // send the number of changes to the content

        currentChanges = totalChanges-lastTotalChanges;
        //console.log(currentChanges)

        // for(let i=0; i<currentChanges; i++){
        //     sizeArray.push(currentChanges)
        //   }
        sizeArray.push(currentChanges)
        console.log(sizeArray)
        
        var message = {
          size: sizeArray,
          total: totalChanges
        }

        chrome.tabs.sendMessage(tab.id, message);

        lastTotalChanges = totalChanges;
    
      }
});


