global.owner = ['6281345407953'] // wajib di isi tidak boleh kosong
global.mods  = ['6281345407953'] // wajib di isi tidak boleh kosong
global.prems = ['6281345407953'] // wajib di isi tidak boleh kosong
global.nameowner = 'Fin Phoenix' // wajib di isi tidak boleh kosong
global.numberowner = '6281345407953' // wajib di isi tidak boleh kosong
global.mail = 'phoenixalfin@gmail.com' // wajib di isi tidak boleh kosong
global.gc = 'https://chat.whatsapp.com/DFaUu3jMsV5Eg3V1HBEBWx' // wajib di isi tidak boleh kosong
global.instagram = 'https://instagram.com/al_vin.233' // wajib di isi tidak boleh kosong
global.wm = '© Fin Md' // isi nama bot atau nama kalian
global.wait = '_*Tunggu sedang di proses...*_' // ini pesan simulasi loading
global.eror = '_*Server Error*_' // ini pesan saat terjadi kesalahan
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*' // ini pesan simulasi saat loading pembuatan sticker
global.packname = 'Fin Md By Fin Phoenix' // watermark stikcker packname
global.author = 'Tiktok : @alvin_ch1\nIg : @al_vin.233\nFb : Alfin Phoenix Altairs' // watermark stikcker author
global.maxwarn = '3' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false // Set true/false untuk anti spam (default: false)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'alfinphoenixaltair'
// Daftar terlebih dahulu https://api.botcahx.eu.org
    
// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = 'alfinphoenix'
// Daftar terlebih dahulu https://api.botcahx.eu.org


// Tidak boleh diganti atau di ubah
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
