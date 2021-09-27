const body = document.querySelector('body');

const toggles = document.getElementById('toggle');
toggles.onclick = function(){
  body.classList.toggle('active')
  toggles.classList.toggle('active')
}