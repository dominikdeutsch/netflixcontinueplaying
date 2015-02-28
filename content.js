chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    var buttons = document.getElementsByClassName("continue-playing");
   
    if(buttons.length > 0){
      buttons[0].click();
      sendResponse({clicked: true});
    }else{
    	sendResponse({clicked: false});
    }
});