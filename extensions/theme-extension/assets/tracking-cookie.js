document.addEventListener("DOMContentLoaded", function(){
    if (window.trackingSettings) {
      document.cookie = "tracking_settings=" + encodeURIComponent(JSON.stringify(window.trackingSettings)) + "; path=/";
      console.log("[Theme App Extension] Saved to cookie:", window.trackingSettings);
    }
});
  