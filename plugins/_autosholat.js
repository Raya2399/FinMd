const fetch = require('node-fetch');

module.exports = {
    before: async function (m) {
        this.autosholat = this.autosholat || {};
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
        let id = m.chat;

        let jadwalSholat = {};
        try {
            const kota = 'jakarta'; //ganti dengan Daerah masing-masing
            const response = await fetch(`https://api.botcahx.eu.org/api/tools/jadwalshalatv2?kota=${kota}&apikey=${btc}`);
            const data = await response.json();
            if (data.status === true) {
                jadwalSholat = data.result;
            } else {
                console.error(data);
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }

        const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
        const currentTime = new Date(now);
        const timeNow = `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`;

        let isActive = Object.values(this.autosholat).some(entry => entry[0]);
        if (id in this.autosholat && isActive) {
            return false;
        }

        for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
            if (timeNow === waktu && !(id in this.autosholat)) {
                const audioUrl = sholat === 'Fajr' ? 'https://i.supa.codes/FV-Wx3' : 'https://i.supa.codes/PeOcbg';
                const caption = `Hai kak @${who.split`@`[0]},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`;

                this.autosholat[id] = [
                    Promise.all([
                        this.sendFile(m.chat, audioUrl, 'adzan.mp3', null, m),
                        this.reply(m.chat, caption, null, {
                            contextInfo: {
                                mentionedJid: [who]
                            }
                        })
                    ]),
                    setTimeout(() => {
                        delete this.autosholat[id];
                    }, 57000)
                ];
            }
        }
    },
    disabled: false
};
