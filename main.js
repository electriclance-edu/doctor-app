const database = new Database();

database.patients.push(new PatientAccount({
	username: "MCheddarson",
	password: "Ch33seH3nt4!",
	emailAddress: "mcheddarson@cheese.com",
	phoneNo: "09696969420",
	name: {
		given: "Mozzarella",
		middle: "Lactose",
		sur: "Cheddarson",
	},
	birthday: {
		year: 2001,
		month: 11,
		day: 9,
	},
	province: "Sussy Province",
	city: "Baka City",
}));

// console.log(database.searchPatientByID("1").name.givenFirst());

window.onload = function() { 
  triggerScreen("startScreen"); 
}

function triggerScreen(screenId) {
	const screens = document.getElementById("screenParent").children;

	for (let i = 0; i < screens.length; i++) {
		screens[i].style.opacity = 0;
		screens[i].style.pointerEvents = "none";
	}

	document.getElementById(screenId).style.opacity = 1;
	document.getElementById(screenId).style.pointerEvents = "all";
}

var currentLoginType = document.getElementById("loginInfoPatient");
function triggerLoginInfo(loginInfo) {
  //i feel like we can merge this with triggerScreen since its exactly the same
	const loginInfos = document.getElementById("screenParent").children;

	for (let i = 0; i < loginInfos.length; i++) {
		loginInfos[i].style.opacity = 0;
		loginInfos[i].style.pointerEvents = "none";
	}

	document.getElementById(loginInfo).style.opacity = 1;
	document.getElementById(loginInfo).style.pointerEvents = "all";
}
function login() {
  //i am seriously too lazy to implement input sanitization so just don't make a typo during the prototyping vid ty ~~~lance

  
}
function attemptRegister() {
  
}