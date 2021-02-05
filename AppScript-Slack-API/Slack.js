  


function getSlackStuff() {
  var slackAuth = PropertiesService
                     .getScriptProperties()
                     .getProperty("authorization")


  var slackApiHeaders = {
    Authorization: "Bearer ${" + slackAuth + "}",
    "Content-type": "application/x-www-form-urlencoded"
  }
  var slackOptions = {
    method: "GET",
    headers: slackApiHeaders
  };
  
  var response = UrlFetchApp.fetch("https://slack.com/api/users.list", slackOptions);
  Logger.log("response: " + response);
  var json = JSON.parse(response.getContentText());
  Logger.log("json" + json[0])
  return response;
}