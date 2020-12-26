const config = require('./config.js')
var spawn = require('child_process').spawn
const client = require('discord-rich-presence')("792070897942790184")
const child = spawn(config.xmrigLocation, arguments)
const xmrigConfig = require(config.xmrigConfigLocation)
var initDone = false
var CPU, algo, hashrate = "?", shares = "?"
var arguments = []


child.stdout.setEncoding('utf8')
child.stdout.on(`data`, function (data) {
    console.log(data)
    data = data.toString()
    if (data.includes('speed')) {
        if (config.colorsEnabled) {
            hashrate = data.split('m')[6]
            hashrate = hashrate.substring(0, hashrate.indexOf('.'));
        } else {
            hashrate = data.split('m')[1]
            hashrate = hashrate.substring(0, hashrate.indexOf('.'));
        }
    }
    if (data.includes('accepted')) {
        shares = data.split('(')[1]
        shares = shares.substring(0, shares.indexOf(')'));
    }
    if (!initDone) {
        CPU = data.split(`CPU`)[1]
        algo = xmrigConfig['pools'][0]['coin']
        initDone = true
    }
})

discordRPC()

child.stderr.setEncoding('utf8')
child.stderr.on('data', function (data) {
    console.log('error: ' + data)
    data = data.toString()
})

async function discordRPC() {
    client.on("connected", () => {
        console.log("Connected to Discord.")
        startTimestamp = new Date()
        client.updatePresence({
            state: `CPU: ${CPU}`,
            details: `${hashrate} H/s - ${shares} shares`,
            startTimestamp,
            largeImageKey: 'xmrig-logo',
            largeImageText: `Mining ${algo}`,
        })

        setInterval(() => {
            client.updatePresence({
                state: `CPU: ${CPU}`,
                details: `${hashrate} H/s - ${shares} shares`,
                startTimestamp,
                largeImageKey: 'xmrig-logo',
                largeImageText: `Mining ${algo}`,
            })
            if (config.showUpdate) console.log("Discord presence updated.")
        }, 15500);

    });

    process.on("unhandledRejection", console.error);
}