

//TODO: this is not in use
const keepScroll = () => {

//get element referneces
var elems = document.getElementsByClassName('my-class');

//iterate over the references
for (var i=0; i<elems.length; ++i) {
  //add click function to each element
  elems[i].addEventListener('click', clickFunc);
}

//this will store the scroll position
var keepScroll = false;

//fires when a ".my-class" link is clicked
function clickFunc(e) {
  //if the location hash is already set to this link
  if (window.location.hash === '#'+e.target.id) {
    //do nothing
    e.preventDefault(); 
  }
  else {
    //the location will change - so store the scroll position
    keepScroll = document.body.scrollTop;
  }
}

window.addEventListener('hashchange', function(e) {
  //the location has has changed

  //if "keepScroll has been set
  if (keepScroll !== false) {
    //move scroll position to stored position
    document.body.scrollTop = keepScroll;
    //set "keepScroll" to false so that this behavior won't affect irrelevant links
    keepScroll = false;
  }
})
}

export default keepScroll;