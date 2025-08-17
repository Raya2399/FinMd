global.owner = ['6281345407953']  
global.mods = ['6281345407953'] 
global.prems = ['6281345407953']
global.nameowner = 'Fin Phoenix'
global.numberowner = '6281345407953' 
global.mail = 'phoenixalfin@gmail.com' 
global.gc = 'https://chat.whatsapp.com/DFaUu3jMsV5Eg3V1HBEBWx'
global.instagram = 'https://instagram.com/al_vin.233'
global.wm = '© Fin Md'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.maxwarn = '3' // Peringatan maksimum Warn
global.chcreator = 'https://whatsapp.com/channel/0029VaxV1qnDOQIdnqVmBi3M'
global.gccreator = 'https://chat.whatsapp.com/DFaUu3jMsV5Eg3V1HBEBWx'
global.packname = 'Fin Md By Fin Phoenix'
global.author = 'Tiktok : @alvin_ch1\nIg : @al_vin.233\nFb : Alfin Phoenix Altairs' // watermark stikcker author

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = true // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = true // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'alfinphoenixaltair' 
global.aksesKey = 'alfinphoenix'
//Daftar terlebih dahulu https://api.botcahx.eu.org



// INI HANYA OPTIONAL SAJA BOLEH DI ISI BOLEH JUGA ENGGA //
global.lann = 'Btz-mNyRM'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Gausah diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
