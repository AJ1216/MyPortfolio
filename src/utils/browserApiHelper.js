// browserApiHelper.js
export const api = (function() {
    if (typeof browser !== 'undefined') {
      return browser; // For Firefox
    } else if (typeof chrome !== 'undefined') {
      return chrome; // For Chrome
    } else {
      throw new Error("Browser APIs not available");
    }
  })();
  