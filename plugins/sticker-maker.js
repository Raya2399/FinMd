const { sticker5 } = require('../lib/sticker');
const fs = require('fs');
const fetch = require('node-fetch');
const sharp = require('sharp');
const { Sticker } = require('wa-sticker-formatter');

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    text = text 
        ? text 
        : m.quoted && m.quoted.text 
        ? m.quoted.text 
        : m.quoted && m.quoted.caption 
        ? m.quoted.caption 
        : m.quoted && m.quoted.description 
        ? m.quoted.description 
        : '';
        
    if (!text) throw `Example: ${usedPrefix + command} Lagi Ruwet`;

    let res;
    if (command === 'brat') {
        res = `https://api.botcahx.eu.org/api/maker/brat?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${btc}`;
    } else if (command === 'brat2' || command === 'bratgif') {
        res = `https://api.botcahx.eu.org/api/maker/brat-video?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${btc}`;
    } else if (command === 'bratvid') {
        res = `https://api.botcahx.eu.org/api/maker/brat-video?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${btc}`;
    } else if (command === 'ttp') {
        res = `https://api.botcahx.eu.org/api/maker/ttp?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${btc}`;
    } else if (command === 'attp') {
        res = `https://api.botcahx.eu.org/api/maker/attp?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${btc}`;
    }

    const err = fs.readFileSync(`./media/sticker/emror.webp`);

    try {
        const response = await fetch(res);
        const buffer = await response.buffer();

        if (command === 'bratvid') {
            await conn.sendVideoAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author });
        } else {
            let decodedBuffer = await sharp(buffer)
                .resize({ width: 512, height: 512, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
                .toFormat('png')
                .toBuffer();
            
            const stiker = await createWebp(decodedBuffer, global.packname, global.author);
            await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
        }
    } catch (e) {
        console.error(e);
        await conn.sendFile(m.chat, err, 'error.webp', '', m);
    }
};

async function createWebp(buffer, packName, authorName, quality = 100) {
    let metadata_sticker = {
        type: 'full',
        pack: packName || global.packname,
        author: authorName || global.author,
        quality
    };
    return (new Sticker(buffer, metadata_sticker)).toBuffer();
}

handler.command = handler.help = ['brat', 'brat2', 'bratgif', 'bratvid', 'ttp', 'attp'];
handler.tags = ['sticker'];
handler.limit = true;

module.exports = handler;
