
function findNickName() {
	var getNick = document.getElementsByClassName("vcard-username")[0].innerHTML;
 	return "User Name : " + getNick;
}

console.log(findNickName());
