
document.getElementById("sign_btn").addEventListener("click", function() {
    // Replace 'https://www.example.com' with the URL of the webpage you want to open
    window.location.href = '/register';
    
  });
  
  document.getElementById("signin_btn").addEventListener("click", function() {
    // Replace 'https://www.example.com' with the URL of the webpage you want to open
    window.location.href = '/login';
    
  });
  document.getElementById("donatenow").addEventListener("click", function() {
    // Replace 'https://www.example.com' with the URL of the webpage you want to open
    // window.location.href = 'https://business.paytm.com/docs/api/create-link-api/';
    window.location.href = '/fireauth';
    window.open(url, '_blank');
  });

  function showImageContainer() {
    // Get the image container element
    var imageContainer = document.getElementById('combined');

    // Show the image container
    imageContainer.style.display = 'block';
}

// Call the showImageContainer function after 5 seconds
setTimeout(showImageContainer, 800);




// Get the image container element
var imageContainer = document.getElementById('combined');

// Set the initial scale factor
var scale = 1.0;

// Set the interval duration (in milliseconds) and the increment for each step
var intervalDuration = 50; // adjust as needed
var scaleIncrement = 0.01; // adjust as needed

// Function to perform the zooming animation
function zoomIn() {
    // Increase the scale factor
    scale += scaleIncrement;

    // Apply the scale using the transform property
    imageContainer.style.transform = 'scale(' + scale + ')';

    // Check if the zooming animation is complete (you can adjust the condition)
    if (scale >= 1.2) {
        clearInterval(animationInterval);
    }
}

// Start the zooming animation with the specified interval
var animationInterval = setInterval(zoomIn, intervalDuration);

// var imc1 = document.getElementById('connect');
// var imc2 = document.getElementById('connect1');
// var scl=0.005;
// var id = 100; // adjust as needed
// var sc = 0.0005;

// function zoomIn1() {
//   // Increase the scale factor
//   sc += scl;

//   // Apply the scale using the transform property
//   imc1.style.transform = 'scale(' + scale + ')';
//   imc2.style.transform = 'scale(' + scale + ')';
//   // Check if the zooming animation is complete (you can adjust the condition)
//   if (scale >= 1.2) {
//       clearInterval(animationInterval);
//   }
// }

// var animationInterv = setInterval(zoomIn1, id);