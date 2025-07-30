global.owner = ['6282221792667', '123493211496490'] // wajib di isi tidak boleh kosong
global.mods  = ['6282221792667', '123493211496490'] // wajib di isi tidak boleh kosong
global.prems = ['6282221792667', '123493211496490'] // wajib di isi tidak boleh kosong
global.nameowner = 'Tio' // wajib di isi tidak boleh kosong
global.numberowner = '6282221792667' // wajib di isi tidak boleh kosong
global.mail = 'support@tioprm.eu.org' // wajib di isi tidak boleh kosong
global.gc = 'https://chat.whatsapp.com/I5RpePh2b5u37OyFjzCNTr' // wajib di isi tidak boleh kosong
global.instagram = 'https://instagram.com/prm2.0' // wajib di isi tidak boleh kosong
global.wm = '© Tio' // isi nama bot atau nama kalian
global.wait = '_*Tunggu sedang di proses...*_' // ini pesan simulasi loading
global.eror = '_*Server Error*_' // ini pesan saat terjadi kesalahan
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*' // ini pesan simulasi saat loading pembuatan sticker
global.packname = 'Made With' // watermark stikcker packname
global.author = 'Bot WhatsApp' // watermark stikcker author
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false // Set true/false untuk anti spam (default: false)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.eu.org



// INI HANYA OPTIONAL SAJA BOLEH DI ISI BOLEH JUGA ENGGA //
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//Tidak boleh diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Tidak boleh diganti atau di ubah
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
