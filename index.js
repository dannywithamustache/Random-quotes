$(document).ready(function() {
  $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?&callback=",
    function(json) {
      $("#text").html(json[0].content);
      $("#author").html(json[0].title);
    }
  );
});

$("#new-quote").click(function() {
  $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?&callback=",
    function(json) {
      $("#text")
        .html(json[0].content)
        .hide()
        .fadeIn(1000);
      $("#author")
        .html(json[0].title)
        .hide()
        .fadeIn(1000);
    }
  );
});

$("#tweet-quote").click(function() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      $("#text").text() +
      " -" +
      $("#author").text()
  );
});
