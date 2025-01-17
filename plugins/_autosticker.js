const fs = require('fs');

let handler = m => m;

handler.all = async function(m, { isAdmin, isBotAdmin }) {
    let chat = db.data.chats[m.chat];
    let user = db.data.users[m.sender];
    
    if (chat.stiker && !chat.isBanned && !user.banned && !m.isBaileys) {
        let q = m;
        let stiker = false;
        let mime = (q.msg || q).mimetype || '';
        
        if (/webp/.test(mime)) return;
        
        if (/image/.test(mime)) {
            try {
                let imgPath = './tmp/temp_image.jpg';
                let img = await q.download();
                if (!img) return;              
                fs.writeFileSync(imgPath, img);
                await conn.sendImageAsSticker(m.chat, imgPath, m, { packname: global.packname, author: global.author });
                fs.unlink(imgPath, (err) => {
                    if (err) console.error('Gagal menghapus file gambar sementara:', err);
                    else console.log('File gambar sementara dihapus');
                });
            } catch (e) {
                console.error('Error processing image:', e);
                await this.reply(m.chat, 'Gagal membuat stiker dari gambar', m);
                return;
            }
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 7) return await this.reply(m.chat, 'Durasi maks 6 detik!', m);

            try {
                let videoPath = './tmp/temp_video.mp4';
                let video = await q.download();
                if (!video) return;              
                fs.writeFileSync(videoPath, video);
                await conn.sendVideoAsSticker(m.chat, videoPath, m, { packname: global.packname, author: global.author });
               
                fs.unlink(videoPath, (err) => {
                    if (err) console.error('Gagal menghapus file video sementara:', err);
                    else console.log('File video sementara dihapus');
                });
            } catch (e) {
                console.error('Error processing video:', e);
                await this.reply(m.chat, 'Gagal membuat stiker dari video', m);
                return;
            }
        } else if (m.text.split(/\n| /i)[0]) {
            if (isUrl(m.text)) {
                try {
                    stiker = await sticker5(false, m.text.split(/\n| /i)[0], global.packname, global.author);
                } catch (e) {
                    console.error('Error processing URL:', e);
                    await this.reply(m.chat, 'Gagal membuat stiker dari URL', m);
                    return;
                }
            } else return;
        }

        if (stiker) {
            try {
                await this.sendFile(m.chat, stiker, 'sticker.webp', '', m);
            } catch (e) {
                console.error('Error sending sticker:', e);
                await this.reply(m.chat, 'Gagal mengirim stiker', m);
            }
        }
    }
    return !0;
}

module.exports = handler;

const isUrl = (text) => {
    return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
}
