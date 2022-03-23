document.onkeydown = function () {
	var e = window.event || arguments[0];
	if (e.keyCode == 123) {
		alert(
			'请尊重劳动成果！请联系我davidchen014@gmail.com \n 请返回 https://dc-personal-portfolio.herokuapp.com/ 谢谢合作!'
		);
		return false;
	} else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		alert(
			'请尊重劳动成果！请联系我davidchen014@gmail.com \n请返回 https://dc-personal-portfolio.herokuapp.com/ 谢谢合作!'
		);
		return false;
	} else if (e.ctrlKey && e.keyCode == 85) {
		alert(
			'请尊重劳动成果！请联系我davidchen014@gmail.com \n请返回 https://dc-personal-portfolio.herokuapp.com/ 谢谢合作!'
		);
		return false;
	} else if (e.ctrlKey && e.keyCode == 83) {
		alert(
			'请尊重劳动成果！请联系我davidchen014@gmail.com \n请返回 https://dc-personal-portfolio.herokuapp.com/ 谢谢合作!'
		);
		return false;
	}
};
document.oncontextmenu = function () {
	alert(
		'请尊重劳动成果！请联系我davidchen014@gmail.com \n请返回 https://dc-personal-portfolio.herokuapp.com/ 谢谢合作!'
	);
	return false;
};
