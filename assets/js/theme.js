const fs = require("fs");
let root = require('electron').remote.app.getPath('userData').split("\\").join("/");
if (!fs.existsSync(`${root}/database.json`)) fs.writeFileSync(`${root}/database.json`, '{"music":[], "settings": [{"theme": "dark", "key": { "play": "CommandOrControl+Space", "random": "CommandOrControl+r", "love": "CommandOrControl+l", "next": "CommandOrControl+Right", "prev": "CommandOrControl+Left", "focus": "CommandOrControl+Up", "mini": "CommandOrControl+Down", "volumeup": "CommandOrControl+=", "volumedown": "CommandOrControl+-", "mute": "CommandOrControl+-"}}]}');
if (!fs.existsSync(`${root}/images`)) {
	fs.mkdirSync(`${root}/images`);
	fs.writeFileSync(`${root}/images/cache.json`, '{"data":[]}');
}
const { remote, ipcRenderer: ipc } = require('electron'),
	lowdb = require('lowdb'),
	FileSync = require('lowdb/adapters/FileSync'),
	db = lowdb(new FileSync(`${root}/database.json`)),
	cache = lowdb(new FileSync(`${root}/images/cache.json`)),
	NodeID3 = require('node-id3'),
	Jimp = require('jimp');
console.log(`${root}/database.json`)
//document.getElementById("theme").href = `assets/css/${db.get("settings").value()[0].theme}.css`;