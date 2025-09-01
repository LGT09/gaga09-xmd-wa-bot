import { formatResponse } from '../utils/helpers.js';

export const soccerCommands = {
    ronaldo: async (sock, msg) => {
        const ronaldoText = `
👑 *CRISTIANO RONALDO*

*"Ronaldo is 100× better than Messi!"* 🐐

*CR7 Stats:*
⚽ Goals: 850+
🏆 Trophies: 30+
🌟 Ballon d'Or: 5
👑 Champions League: 5
🇵🇹 International: 130+ goals

*Achievements:*
📈 Most goals in football history
🏆 Most Champions League goals
🌍 Most international goals
💪 Greatest athlete mindset
🔥 GOAT status confirmed

*SIUUUUU!* 🙌

CR7 > Messi debate settled! 👑`;

        const response = formatResponse(ronaldoText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    messi: async (sock, msg) => {
        const messiText = `
🐐 *LIONEL MESSI STATS*

*La Pulga - The GOAT* ⚽

*Messi Records:*
⚽ Goals: 800+
🏆 Trophies: 40+
🌟 Ballon d'Or: 8 (Record)
🏆 World Cup: 1 (2022)
🇦🇷 Argentina: 100+ goals

*Career Highlights:*
📈 Most Ballon d'Or wins
🏆 World Cup winner
🌟 Greatest dribbler ever
💎 Barcelona legend
🔥 Inter Miami superstar

*Magic on the field* ✨

The GOAT debate continues! 🐐`;

        const response = formatResponse(messiText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    scores: async (sock, msg) => {
        const scoresText = `
⚽ *LIVE FOOTBALL SCORES*

*Premier League Today:*
🔴 Man United 2-1 Chelsea ⚽
🔵 Man City 3-0 Arsenal ⚽
⚫ Newcastle 1-1 Liverpool ⚽

*Champions League:*
🇪🇸 Real Madrid 2-0 PSG ⚽
🇩🇪 Bayern 4-1 Barcelona ⚽

*Top Scorers:*
👑 Haaland - 25 goals
⚽ Kane - 22 goals  
🔥 Mbappé - 20 goals

*Live Updates Available* 📺
*Next Update:* Every 15 minutes ⏰

⚽ Football never stops! 🏆`;

        const response = formatResponse(scoresText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    fixtures: async (sock, msg) => {
        const fixturesText = `
📅 *PREMIER LEAGUE FIXTURES*

*This Weekend:*
🆚 Arsenal vs Chelsea - Sat 3PM
🆚 Man United vs Liverpool - Sat 5:30PM  
🆚 Man City vs Tottenham - Sun 2PM
🆚 Newcastle vs Brighton - Sun 4:30PM

*Next Week:*
🗓️ Wed: Champions League matchday
🗓️ Fri: FA Cup fixtures
🗓️ Sat: Full Premier League round

*Key Matches:*
🔥 North London Derby
⚡ Manchester Derby  
🏆 Top 4 battle

*Where to Watch:* Sky Sports, BT Sport 📺

Never miss a match! ⚽`;

        const response = formatResponse(fixturesText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    }
};