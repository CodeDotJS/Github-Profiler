
function totalFollowers() {
  var getFollowersList = document.getElementsByClassName("vcard-stat-count")[0].innerHTML;
  return "Total Followers : " + getFollowersList;
}

console.log(totalFollowers());

