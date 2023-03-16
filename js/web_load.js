/*window.onload = function() {
      document.querySelector('body').classList.add('loaded');
    };*/
window.onload = function() {
  setTimeout(function() {
    document.querySelector('body').classList.add('loaded');
  }, 7000); // add a delay of 7 seconds (7000 milliseconds)
};
