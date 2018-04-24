
(function() {
  // Initialise any local time clocks
  initLocalClocks();
  // Start the seconds container moving
  moveSecondHands();
  // Set the intial minute hand container transition, and then each subsequent step
  setUpMinuteHands();
})();

/* 
	- Converts the time (hours, minutes and seconds) into the corresponding angle for each hand
	- Loops through each hand and applies that angle using the style.transform property of rotateZ

*/
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);

    console.log('hands[' + j + ']: ' + hands[j].hand);

    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }

        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'seconds') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[2].angle);
        }
    }
  }
}


/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes');
  var secondAngle = Number(containers[0].parentNode.getAttribute("data-second-angle"));
  
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}

/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}

/*
 * Move the second containers
 */
function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds');

  // Get the current seconds angle so we can start and continue the rotation on reload
  var secondAngle = Number(containers[0].parentNode.getAttribute("data-second-angle"));

  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {

      if (secondAngle === undefined) {
        secondAngle = 6;
      } else {
        secondAngle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ secondAngle +'deg)';
      containers[i].style.transform = 'rotateZ('+ secondAngle +'deg)';
    }
  }, 1000);
}