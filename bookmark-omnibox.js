chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    chrome.bookmarks.search(text, function(results) {
      output = []

      for (var i = 0; i < results.length && i < 4; i++) {
        output.push(
          {content: results[i].url, description: results[i].title}
        );
      }
      suggest(output);
    });
  }
)

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.bookmarks.search(text, function(results) {
      url = results[0].url
      chrome.tabs.create({
        url: url
      });
    })
  }
)
