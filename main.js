// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll('.like-glyph')
for(const h of heart) {
  h.addEventListener('click', handleClick);
};

const errorModal = document.querySelector("#modal")

function handleClick() {
  // manipulate the DOM upon click JS event
  if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART
  } else {
      heart.innerText = EMPTY_HEART
  }

  // communicate these changes to the server; POST request
  mimicServerCall('url')
  .then(response => response.json())
  .then(like => console.log(like))
  .catch(function() {
    setTimeout(function(){errorModal.className = "none", 5000})
    // console.log(error)
  })
};



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
