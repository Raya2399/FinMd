let fetch = require('node-fetch');

let handler = async (m, { conn, command, text }) => {
  if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk dicari', m);

  try {
    m.reply(wait)
    let response = await fetch(`https://api.botcahx.eu.org/api/search/google?text1=${encodeURIComponent(text)}&apikey=${btc}`);
    let data = await response.json();

    if (!data.status) throw new Error('Pencarian gagal');

    let msg = data.result.map(({ title, url, snippet }) => {
      return `*${title}*\n_${url}_\n_${snippet || 'Tidak ada deskripsi tersedia'}_`;
    }).join('\n\n');
    
    conn.relayMessage(m.chat, {
      extendedTextMessage: {
        text: msg, 
        contextInfo: {
          externalAdReply: {
            title: wm,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: true,
            thumbnailUrl: 'https://telegra.ph/file/d7b761ea856b5ba7b0713.jpg',
            sourceUrl: ''
          }
        }, 
        mentions: [m.sender]
      }
    }, {});
  } catch (e) {
  conn.reply(m.chat, eror, m)
};

handler.help = ['google'].map(v => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^google$/i;
handler.limit = true;

module.exports = handler;
