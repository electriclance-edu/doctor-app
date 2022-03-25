

const database = new Database();
var currentLoginType;

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
  currentLoginType = document.getElementById("loginInfoPatient");
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

function triggerLoginInfo(loginInfo) {
	// i feel like we can merge this with triggerScreen since its exactly the same
	const loginInfos = document.getElementById("loginInfos").children;
  currentLoginType = document.getElementById(loginInfo);

	for (let i = 0; i < loginInfos.length; i++) {
		loginInfos[i].style.opacity = 0;
		loginInfos[i].style.pointerEvents = "none";
	}

	document.getElementById(loginInfo).style.opacity = 1;
	document.getElementById(loginInfo).style.pointerEvents = "all";
}
function showElem(id) {
	const elem = document.getElementById(id);
	elem.style.opacity = "1";
	elem.style.pointerEvents = "all";
}
function displayDoctor() {
  triggerScreen("homeScreen");
  document.getElementById("specialistText").innerHTML = "You might need to see a: Cardiologist!";
  document.getElementById("goAway").style.display = "none";
  document.getElementById("lightUpTheWorld").style.opacity = "1";
}
function login() {
  document.getElementById("theStinky").style.display = "none";
	triggerScreen(currentLoginType.id === "loginInfoDoctor" ? "doctorScreen" : "homeScreen");
  document.getElementById("lightUpTheWorld").style.opacity = "1";
  document.getElementById("goAway").style.opacity = "1";
}
function attemptRegister() {
	// toggle
	var hiddenFields = currentLoginType.children;
	hiddenFields = hiddenFields[hiddenFields.length - 1];

	// const fields = ["email", "password", "firstName", "lastName"];
	
	if (hiddenFields.className == "extraInfo toggled") {
		/*
		if (currentLoginType.id == "loginInfoDoctor") {
			var prefix = "doctor";
			fields.concat(["specialization", "address", "hotline"]);
		} else {
			var prefix = "patient";
		}
	
		const options = {
			name: {
				given: document.getElementById(`${prefix}_firstName`),
				given: document.getElementById(`${prefix}_middleName`),
				sur: document.getElementById(`${prefix}_lasName`),
			},
		};
		*/
	
	} else {
		hiddenFields.className = "extraInfo toggled";
		hiddenFields.style.height = "auto";
	}
}