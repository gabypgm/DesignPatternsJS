//object literals
const Config = {
    start: () => console.log("App has started"),
    update: () => console.log("App has updated"),
}

Object.freeze(Config)
Config.start()
Config.update()

//classes

class ConfigDB {
    constructor() {}
    start() { console.log("Inizialise BD started") }
    stop() { console.log("DB Stopped")}
}
const configDB = new ConfigDB()
configDB.start()
configDB.stop()
Object.freeze(configDB)
