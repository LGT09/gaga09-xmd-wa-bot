import { formatResponse } from '../utils/helpers.js';

export const fakeCommands = {
    fakefollowers: async (sock, msg, args) => {
        const count = args[0] ? Math.min(parseInt(args[0]), 2500) : Math.floor(Math.random() * 2500) + 1;
        
        const fakeText = `
📈 *FAKE FOLLOWERS GENERATED*

*New Followers:* ${count.toLocaleString()}
*Status:* ✅ Added Successfully
*Platform:* Instagram/TikTok
*Quality:* Premium Accounts

*Follower Breakdown:*
👥 Active Users: ${Math.floor(count * 0.8)}
🤖 Bot Accounts: ${Math.floor(count * 0.2)}
🌍 Global Mix: Yes
⚡ Instant Delivery: Yes

*Makandiwa Sermon Special* 🙏
"Followers shall multiply like the stars!" ⭐`;

        const response = formatResponse(fakeText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    fakemembers: async (sock, msg, args) => {
        const count = args[0] ? Math.min(parseInt(args[0]), 850) : Math.floor(Math.random() * 850) + 1;
        
        const fakeText = `
👥 *FAKE MEMBERS GENERATED*

*New Members:* ${count.toLocaleString()}
*Group Growth:* +${count} members
*Status:* ✅ Added Successfully
*Activity Level:* High

*Member Distribution:*
🇿🇼 Zimbabwe: ${Math.floor(count * 0.4)}
🇿🇦 South Africa: ${Math.floor(count * 0.3)}
🌍 International: ${Math.floor(count * 0.3)}

*Makandiwa Sermon Boost* 🔥
"The congregation grows!" 🙏`;

        const response = formatResponse(fakeText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    fakereactions: async (sock, msg, args) => {
        const count = args[0] ? Math.min(parseInt(args[0]), 450) : Math.floor(Math.random() * 450) + 1;
        
        const reactions = ['👍', '❤️', '😍', '🔥', '👏', '🙏', '✨', '💯'];
        const randomReactions = Array.from({length: 8}, () => 
            reactions[Math.floor(Math.random() * reactions.length)]
        ).join('');

        const fakeText = `
🎭 *FAKE REACTIONS GENERATED*

*Total Reactions:* ${count.toLocaleString()}
*Reaction Types:* ${randomReactions}
*Engagement Rate:* +${(count/10).toFixed(1)}%

*Reaction Breakdown:*
❤️ Loves: ${Math.floor(count * 0.3)}
👍 Likes: ${Math.floor(count * 0.25)}
😍 Hearts: ${Math.floor(count * 0.2)}
🔥 Fire: ${Math.floor(count * 0.15)}
🙏 Praise: ${Math.floor(count * 0.1)}

*Makandiwa Sermon Power* ⚡
"Reactions overflow like blessings!" 🙌`;

        const response = formatResponse(fakeText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    sermon: async (sock, msg) => {
        const sermons = [
            "🙏 *'The power of faith moves mountains!'* - Prophet Makandiwa",
            "✨ *'Breakthrough is your portion this season!'* - Prophet Makandiwa", 
            "🔥 *'The anointing destroys every yoke!'* - Prophet Makandiwa",
            "🌟 *'You are more than a conqueror!'* - Prophet Makandiwa",
            "💫 *'Divine acceleration is upon you!'* - Prophet Makandiwa",
            "⚡ *'Every obstacle shall bow before you!'* - Prophet Makandiwa",
            "🌈 *'This is your season of overflow!'* - Prophet Makandiwa",
            "🔮 *'Prophetic declarations are manifesting!'* - Prophet Makandiwa"
        ];
        
        const randomSermon = sermons[Math.floor(Math.random() * sermons.length)];
        
        const sermonText = `
⛪ *MAKANDIWA SERMON MESSAGE*

${randomSermon}

*Today's Word:* Supernatural Breakthrough
*Prophetic Theme:* Divine Elevation
*Anointing Level:* Maximum 🔥

*Declaration:* 
"I receive this prophetic word in Jesus' name! Amen!" 🙌

*Makandiwa Sermon Special* ✨`;

        const response = formatResponse(sermonText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    praise: async (sock, msg) => {
        const praises = [
            "🙌 Hallelujah! The Lord is good!",
            "🔥 Glory to God in the highest!",
            "✨ Praise Jesus for His goodness!",
            "💫 Thank you Lord for breakthrough!",
            "⚡ God's power is manifesting!",
            "🌟 Divine favor is flowing!",
            "🙏 Blessed be the name of the Lord!",
            "🎺 Hosanna in the highest!"
        ];
        
        const randomPraise = praises[Math.floor(Math.random() * praises.length)];
        
        const praiseText = `
🙏 *SERMON PRAISE LINE*

${randomPraise}

*Atmosphere:* Holy Ghost Fire 🔥
*Anointing:* Flowing Fresh ✨
*Faith Level:* Mountain Moving 🏔️

*Corporate Declaration:*
"We give You all the glory! Amen!" 🙌`;

        const response = formatResponse(praiseText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    }
};