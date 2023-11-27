// Check if browser supports speech recognition
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
  
    // Configure recognition settings
    recognition.continuous = false;
    recognition.interimResults = false;
  
    // Attach event listener to the voice button
    const voiceButton = document.getElementById('voice-button');
    voiceButton.addEventListener('click', startSpeechRecognition);
  
    // Function to start speech recognition
    function startSpeechRecognition() {
      recognition.start();
    }
  
    // Event listener for recognition result
    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      const searchInput = document.getElementById('search-input');
      searchInput.value = result;
      // Perform search based on the recognized speech
      // ...
    };
  } else {
    // Speech recognition not supported, display an error message or fallback
    console.log('Speech recognition not supported');
  }



  // Retrieve the search input element and search button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add event listener to the search button
searchButton.addEventListener('click', performSearch);

// Function to perform the search
function performSearch() {
  const searchTerm = searchInput.value;
  // Perform the search based on the input value
  // ...
}




// Retrieve the profile picture and username elements
const profilePicture = document.getElementById('profile-picture');
const usernameElement = document.getElementById('username');

// Simulating current user data (replace with your own logic to retrieve user information)
const currentUser = {
  username: 'JohnDoe',
  profilePictureUrl: 'path_to_profile_picture' // Replace with the actual URL or image source for the current user's profile picture
};

// Set the profile picture and username based on the current user
profilePicture.src = currentUser.profilePictureUrl;
usernameElement.textContent = currentUser.username;