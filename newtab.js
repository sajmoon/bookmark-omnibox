var bookmarkCollector = {
  requestBookmarks: function() {
    chrome.bookmarks.getRecent(20, function(results) {
      for (var i = 0; i < results.length; i++) {
        $('#recentBookmarks').append(
          $('<li>').append(
            $('<img>').attr('src', "chrome://favicon/" + results[i].url),
            $('<a>').attr('href', results[i].url).append(
              $('<span>').append(results[i].title)
              )
            )
          );
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("docuemnt loaded");
  bookmarkCollector.requestBookmarks();
});
