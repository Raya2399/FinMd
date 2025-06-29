let fetch = require('node-fetch');

let handler = async (m, { usedPrefix, command }) => {
    m.reply(wait);
    try {
        let res = await (await fetch(`https://api.botcahx.eu.org/api/webzone/grow-and-garden-stock?apikey=${btc}`)).json();
        let content = `*🌱 G R O W  &  G A R D E N  S T O C K S 🌱*\n\n`;

        if (res.status && res.result && res.result.data) {
            let gearStocks = res.result.data.filter(item => item.category === "GEAR STOCKS");
            let eggStocks = res.result.data.filter(item => item.category === "EGG STOCKS");
            let seedsStocks = res.result.data.filter(item => item.category === "SEEDS STOCKS");
            let eventStocks = res.result.data.filter(item => item.category === "EVENT STOCKS");

            content += `*🛠️ Gear Stocks:*\n`;
            gearStocks.forEach(item => {
                content += `  ◦ ${item.name}: ${item.count}\n`;
            });

            content += `\n*🥚 Egg Stocks:*\n`;
            eggStocks.forEach(item => {
                content += `  ◦ ${item.name}: ${item.count}\n`;
            });

            content += `\n*🌾 Seeds Stocks:*\n`;
            seedsStocks.forEach(item => {
                content += `  ◦ ${item.name}: ${item.count}\n`;
            });

            content += `\n*🎉 Event Stocks:*\n`;
            eventStocks.forEach(item => {
                content += `  ◦ ${item.name}: ${item.count}\n`;
            });
        } else {
            content += 'Data stok tidak ditemukan.';
        }
        await m.reply(content);
    } catch (error) {
        throw eror
    }
};

handler.command = handler.help = ['growgarden'];
handler.tags = ['internet'];
handler.limit = true;
module.exports = handler;
