//set property:
let date = new Date();
console.log(date);

let second = date.getSeconds();
let minute = date.getMinutes() + second / 60;
let hour = date.getHours() + minute / 60;

let secondDeg = (360 * second) / 60;
let minuteDeg = (360 * minute) / 60;
let hourDeg = (360 * hour) / 12;

console.log(second, minute, hour);
console.log(secondDeg, minuteDeg, hourDeg);

document.documentElement.style.setProperty("--second", `${secondDeg}deg`);
document.documentElement.style.setProperty("--minute", `${minuteDeg}deg`);
document.documentElement.style.setProperty("--hour", `${hourDeg}deg`);

console.log(
	getComputedStyle(document.documentElement).getPropertyValue("--secondDeg")
);
console.log(
	getComputedStyle(document.documentElement).getPropertyValue("--minuteDeg")
);
console.log(
	getComputedStyle(document.documentElement).getPropertyValue("--hourDeg")
);
