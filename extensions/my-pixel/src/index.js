import {register} from "@shopify/web-pixels-extension";

async function getDecodedCookie(browser, cookieName) {
    try {
      console.log('browser', browser, cookieName);
      // Use the browser API to get cookies
      const cookie = await browser.cookie.get(cookieName);
      
      if (cookie){
          console.log("Cookie value:", cookie);
          return JSON.parse(decodeURIComponent(cookie.value));
      }

      return null;
    } catch (error) {
      console.error("Error reading cookie:", error);
      return null;
    }
}
  
  
register(({ analytics, browser, settings }) => {
    // Initialize asynchronously
    (async () => {
      const settingsFromCookie = await getDecodedCookie(browser, "tracking_settings");
      console.log("Cookie settings:", settingsFromCookie);

      // Subscribe to events after initialization
      analytics.subscribe('page_viewed', (event) => {
        console.log('Page viewed', event);
        
        if (settingsFromCookie && settingsFromCookie.trackingEnabled) {
          // Your tracking logic here
        }
      });
    })();
});


                              
