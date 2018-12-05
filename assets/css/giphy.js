var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=boxer+puppies&api_key=HOBDBMQIXHsowhmFkyGsUj34U9FjcyXp");
xhr.done(function(data) { console.log("success got data", data); });
// api key 'HOBDBMQIXHsowhmFkyGsUj34U9FjcyXp' //
var api = "https://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=HOBDBMQIXHsowhmFkyGsUj34U9FjcyXp";
var query = "search?q=boxer+puppies";
var query = "search?q=french+bulldog";
var query = "search?q=boston+terrier";
var rating = "search?rating";
// variable that is an array of all the names
// 