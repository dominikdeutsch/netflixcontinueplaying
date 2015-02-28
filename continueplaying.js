var counter = 0;
var enabled = false

function check (){
  if(enabled){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {test:'test'}, function(response) {
        if(response && response.clicked){
          chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
          chrome.browserAction.setBadgeText({text: (++counter).toString()}); 
        }            
      });
    });

    setTimeout(check, 4000);
  }
}

chrome.browserAction.onClicked.addListener(function(tab) {
  if(enabled){
    chrome.browserAction.setIcon({path: 'disabled.png'})
    enabled = false;
  }else{
    chrome.browserAction.setIcon({path: 'enabled.png'})
    enabled = true;
    check();
  }
});