const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
let count = parseInt(localStorage.getItem("likeCount")) || 0;

function like() {
  count++;
  updatelikes();
  localStorage.setItem("likeCount", count);
}

function updatelikes() {
  likeCount.textContent = count;
}

likeButton.addEventListener('click', () => {
  count++;
  updatelikes();
  localStorage.setItem("likeCount", count); 
  like(); 
});


updatelikes();
