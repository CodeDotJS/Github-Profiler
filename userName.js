

function findUserName() {
	var getUser = document.getElementsByClassName("vcard-fullname")[0].innerHTML;
  	return "Real Name : " + getUser;
}

console.log(findUserName());


