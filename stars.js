
function totalStarredProject() {
  var getStars = document.getElementsByClassName("vcard-stat-count")[1].innerHTML;
  return "Total Starred Projects : " + getStars;
}

console.log(totalStarredProject());