const URL_SERVER = "http://localhost:3000";
chrome.webNavigation.onCompleted.addListener(function (nav) {
  if (nav.frameType === "outermost_frame") {
    fetch(URL_SERVER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: nav.url,
        platform: chrome.runtime.getPlatformInfo(),
        // desktopCapture:
        // bookmarks: chrome.bookmarks.getTree(),
      }),
    });
  }
});
