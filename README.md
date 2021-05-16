# xmrig-rp
![Hits](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2FMasterIO02%2Fxmrig-rp)

Discord Rich Presence for xmrig *(CPU only)*

![Rich Presence Screenshot](/screenshot.png)

Tested with xmrigCC mining uPlexa but xmrig should work if output is the same and config file too.
I will someday update this to support GPUs.

## Usage
Make sure to have nodejs and npm installed on your OS.

Download the repository, install the dependency discord-rich-presence with `npm install discord-rich-presence` in the folder of xmrig-rp.

Modify the config.js with the xmrig executable path and the xmrig config path.

Note that on Windows you need to replace backwards slash (\\) by double backwards slash (\\\\) or simple slashs (/).

Then run xmrig-rp with npm start OR node main.js.
