// JavaScript code for checking server demand and displaying warning message
(function() {
  // Simulate high demand by setting a threshold for the number of requests
  const highDemandThreshold = 100;

  // Get the request count from localStorage or set it to 0
  let requestCount = localStorage.getItem('requestCount') || 0;

  // Increment the request count and store it in localStorage
  requestCount++;
  localStorage.setItem('requestCount', requestCount);

  // Check if request count exceeds the high demand threshold
  if (requestCount >= highDemandThreshold) {
    // Display the warning message at the top of the screen
    const warningDiv = document.createElement('div');
    warningDiv.className = 'warning';
    warningDiv.textContent = 'Server might be slow due to high demand';
    document.body.insertBefore(warningDiv, document.body.firstChild);
  }
})();

