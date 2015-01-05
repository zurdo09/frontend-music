song = [];
artist = [];
playcounts = [];
duration = [];
image = [];
OrderList = [];
OrderDuration = [];
OrderPlayCount = [];
image = [];
urls = [];


$(document).ready(function() {
	$("[data-toggle=popover]")
	.popover({html:true})
});

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=85b8c37b1a6be5182a5ed0549c4a7400&format=json",
  dataType : "jsonp",
    success : function(parsed_json) {

      for (var i = 0; i <= 50; i++) {
	OrderList.push(parsed_json["tracks"]["track"][i]["name"])
        OrderDuration.push(parsed_json["tracks"]["track"][i]["duration"])
        OrderPlayCount.push(parsed_json["tracks"]["track"][i]["playcount"])
       	song.push(parsed_json['tracks']['track'][i]['name'])
        artist.push(parsed_json['tracks']['track'][i]['artist']['name'])
	duration.push(parsed_json["tracks"]["track"][i]["duration"])
        playcounts.push(parsed_json["tracks"]["track"][i]["playcount"])
	urls.push(parsed_json["tracks"]["track"][i]["artist"]["url"])

        try {image.push(parsed_json["tracks"]["track"][i]["image"][2]["#text"])}
        catch(err){image.push("")}

        $(".canciones").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td class='name'>" + song[i] + "</td>" + "<td>" + "<img src=\""+image[i]+"\" class = 'image' height='50px'>" + "</td>" + "<td>" + "<a href=\""+urls[i]+"\">" + artist[i] + "</a>" + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "</tr>");
      };
    }
  });
});



$(document).ready(function() {
  function az(a, b){
    var A = a.toLowerCase();
    var B = b.toLowerCase();
    if (A < B){
      return -1;
    }else if (A > B){
     return  1;
    }else{
     return 0;
    }
  };

  function za(a, b){
      var A = a.toLowerCase();
      var B = b.toLowerCase();
      if (A > B){
        return -1;
      }else if (A < B){
       return  1;
      }else{
       return 0;
      }
  };

  function order(a, b){
    a = a/60
    b = b/60
    if (a<b) {return 1}else{return 0};
  };

  $(".del").click(function(){
    $(".canciones").empty();
    OrderList.sort(az);

    for (var i = 0; i <50; i++) {
        var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
        $(".canciones").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td class='name'>" + song[i] + "</td>" + "<td>" + "<img src=\""+image[i]+"\" class = 'image' height='50px'>" + "</td>" + "<td>" + "<a href=\""+urls[i]+"\">" + artist[i] + "</a>" + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "</tr>");
    };
  });

  $(".ordered").click(function(){
    $(".canciones").empty();
    OrderList.sort(az);

    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderList[x] === song[i]) {
          $(".canciones").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td class='name'>" + song[i] + "</td>" + "<td>" + "<img src=\""+image[i]+"\" class = 'image' height='50px'>" + "</td>" + "<td>" + "<a href=\""+urls[i]+"\">" + artist[i] + "</a>" + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "</tr>");
        };
      };
    };
  });

  $(".back").click(function(){
    $(".canciones").empty();
    OrderList.sort(za);

    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderList[x] === song[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".canciones").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td class='name'>" + song[i] + "</td>" + "<td>" + "<img src=\""+image[i]+"\" class = 'image' height='50px'>" + "</td>" + "<td>" + "<a href=\""+urls[i]+"\">" + artist[i] + "</a>" + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "</tr>");
        };
      };
    };
  });

  $(".duration").click(function(){
    $(".canciones").empty();
    OrderDuration.sort(order);
    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderDuration[x] === duration[i]) {
          $(".canciones").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td class='name'>" + song[i] + "</td>" + "<td>" + "<img src=\""+image[i]+"\" class = 'image' height='50px'>" + "</td>" + "<td>" + "<a href=\""+urls[i]+"\">" + artist[i] + "</a>" + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "</tr>");
        };
      };
    };
  });

  $(".playcounts").click(function(){
    $(".canciones").empty();
    OrderPlayCount.sort(order);
    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderPlayCount[x] === playcounts[i]) {
          $(".canciones").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td class='name'>" + song[i] + "</td>" + "<td>" + "<img src=\""+image[i]+"\" class = 'image' height='50px'>" + "</td>" + "<td>" + "<a href=\""+urls[i]+"\">" + artist[i] + "</a>" + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "</tr>");
        };
      };
    };
  });

});
