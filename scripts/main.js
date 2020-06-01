var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');

function setUserName(){
	var myName = prompt('Bitte geben Sie Ihren Namen ein:');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla ist cool, ' + myName;
}

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'images/website.jpg'){
		myImage.setAttribute('src', 'images/frau_wiese.jpg')
	}
	else{
		myImage.setAttribute('src', 'images/website.jpg')
	}
	myImage.setAttribute('width', '500px')
}

myButton.onclick = function() {
	setUserName();
}

if (!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName = localStorage.getItem('name')
	myHeading.textContent = 'Mozilla ist cool, ' + storedName;
}

