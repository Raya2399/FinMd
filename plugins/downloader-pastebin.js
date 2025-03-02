let fetch = require('node-fetch');

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Masukkan URL Pastebin!\n\n*Contoh:* ${usedPrefix + command} https://pastebin.com/eQLV4GfE`;

    try {
        await m.reply("⏳ Sedang mengambil data...");
        let res = await fetch(`https://api.botcahx.eu.org/api/download/pastebin?url=${text}&apikey=${btc}`);
        let json = await res.json();

        if (!json.status) throw "❌ Gagal mengambil data dari Pastebin!";

        await m.reply(`📄 *Hasil Pastebin:*\n\n${json.result}`);
    } catch (e) {
        console.error(e);
        throw "❌ Terjadi kesalahan saat mengambil data dari Pastebin!";
    }
};

handler.command = ['pastebindl', 'pastebin'];
handler.tags = ['tools'];
handler.help = ['pastebindl', 'pastebin'].map(a => a + ' <url>');
handler.limit = true;

module.exports = handler;
