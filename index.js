

window.onload = (event) => {
  console.log('page is fully loaded');
  console.log(window.innerHeight);

  var pfp = document.getElementById('pfp');
  pfp.height = window.innerHeight-10;
  pfp.width = window.innerHeight-10;


};

function githubClick() {
  window.open("https://github.com/Arjun99ab", "_blank");
}
