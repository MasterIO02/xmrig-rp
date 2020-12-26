# xmrig-rp
Discord Rich Presence for xmrig *(CPU only)*

[![HitCount](http://hits.dwyl.com/MasterIO02/xmrig-rp.svg)](http://hits.dwyl.com/MasterIO02/xmrig-rp)
[![GitHub All Releases](https://img.shields.io/github/downloads/MasterIO02/xmrig-rp/total.svg)](https://github.com/MasterIO02/xmrig-rp/releases/)

![Rich Presence Screenshot](/screenshot.png)

Tested with xmrigCC mining uPlexa but xmrig should work if output is the same and config file too.
I will someday update this to support GPUs.

## Usage
Make sure to have nodejs and npm installed on your OS.

Download the repository, install the dependency discord-rich-presence with `npm install discord-rich-presence` in the folder of xmrig-rp.

Modify the config.js with the xmrig executable path and the xmrig config path.

Then run xmrig-rp with npm start OR node main.js.
