// Set up the GroupMe Bot ID
var botId = "dont_commit_botID_to_git";  
var url = "https://api.groupme.com/v3/bots/post/";

function SendText(text){
  var headers = {
    "method" : "post",
    "payload": '{ "bot_id" : "'+ botId +'", "text" : "' + text + '"}'
  };
  UrlFetchApp.fetch(url,headers);
}

function doPost(e){  
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text; 
}

  

