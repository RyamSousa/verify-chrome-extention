let sound = "./effects/notification.wav";
let title = "title";
let msg = "msg";
let icon = "icon";

function checkDOM() {
	const containerElement = document.getElementById("id-here");
	if (!!containerElement) {
		containerElement.setAttribute("muted", "true");
		notifyMe();
		setTimeout(2000);
		notifyMe();
	}
	setTimeout(checkDOM, 2000);
}

checkDOM();

function callNotify(title, msg, icon) {
	console.log("play");
	new Notification(title, { dody: msg, icon: icon });
	new Audio(sound).play();
}

function notifyMe() {
	console.log("here");
	if (!("Notification" in window)) {
		alert("Este navegador não suporta notificações na área de trabalho");
	}

	if (Notification.permission !== "granted") {
		callNotify(title, msg, icon);
		return;
	}

	if (Notification.permission !== "denied") {
		Notification.requestPermission((permission) => {
			if (permission === "granted") {
				callNotify(title, msg, icon);
			}
		});
		return;
	}
}
