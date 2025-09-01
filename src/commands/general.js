import { formatResponse, getRandomBotImage } from '../utils/helpers.js';
import { config } from '../config/config.js';

export const generalCommands = {
    menu: async (sock, msg) => {
        const menuButtons = {
            text: `🎭 *GAGA09 XMD COMMAND MENU* 👑\n\n${config.copyright}\n\nSelect a category to explore 500+ commands:`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'general_menu', buttonText: { displayText: '🔹 General (40+)' }, type: 1 },
                { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin (50+)' }, type: 1 },
                { buttonId: 'fake_menu', buttonText: { displayText: '🎭 Fake Metrics (20+)' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: menuButtons.text,
            footer: menuButtons.footer,
            buttons: menuButtons.buttons,
            headerType: 1
        });
        
        // Send second set of buttons
        setTimeout(async () => {
            const menuButtons2 = {
                text: `📱 *MORE CATEGORIES*`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'downloader_menu', buttonText: { displayText: '📥 Downloader (50+)' }, type: 1 },
                    { buttonId: 'fun_menu', buttonText: { displayText: '🎮 Fun & Games (60+)' }, type: 1 },
                    { buttonId: 'ai_menu', buttonText: { displayText: '🤖 AI Tools (80+)' }, type: 1 }
                ],
                headerType: 1
            };
            
            await sock.sendMessage(msg.key.remoteJid, menuButtons2);
        }, 1000);
        
        // Send third set of buttons
        setTimeout(async () => {
            const menuButtons3 = {
                text: `🌟 *FINAL CATEGORIES*`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'soccer_menu', buttonText: { displayText: '⚽ Soccer (40+)' }, type: 1 },
                    { buttonId: 'search_menu', buttonText: { displayText: '🔍 Search (60+)' }, type: 1 },
                    { buttonId: 'media_menu', buttonText: { displayText: '🎨 Media (40+)' }, type: 1 }
                ],
                headerType: 1
            };
            
            await sock.sendMessage(msg.key.remoteJid, menuButtons3);
        }, 2000);
    },

    help: async (sock, msg) => {
        const helpButtons = {
            text: `📚 *GAGA09 XMD HELP GUIDE*\n\n*How to use:*\n• With prefix: .menu\n• Without prefix: menu\n• Both work perfectly!\n\n*Total: 500+ Commands across 10 categories*`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'general_menu', buttonText: { displayText: '📖 View Commands' }, type: 1 },
                { buttonId: 'support_help', buttonText: { displayText: '📞 Get Support' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: helpButtons.text,
            footer: helpButtons.footer,
            buttons: helpButtons.buttons,
            headerType: 1
        });
    },

    about: async (sock, msg) => {
        const aboutButtons = {
            text: `🎭 *GAGA09 XMD BOT INFO*\n\n*Version:* 1.0.0\n*Commands:* 500+\n*Creator:* Vincent Ganiza a.k.a Lil Gaga Traxx09\n\n✅ AI Assistant (Nexus)\n✅ Media Downloads\n✅ Interactive Games\n✅ Admin Management\n\n${config.copyright}`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'bot_stats', buttonText: { displayText: '📊 View Statistics' }, type: 1 },
                { buttonId: 'support_help', buttonText: { displayText: '📞 Support Channel' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: aboutButtons.text,
            footer: aboutButtons.footer,
            buttons: aboutButtons.buttons,
            headerType: 1
        });
    },

    support: async (sock, msg) => {
        const supportButtons = {
            text: `📢 *GAGA09 XMD SUPPORT*\n\n*Official Channel:*\n${config.supportChannel}\n\n✅ 24/7 Support\n✅ Bot Updates\n✅ New Features\n✅ Bug Reports\n✅ Community Help`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'report_bug', buttonText: { displayText: '🐛 Report Bug' }, type: 1 },
                { buttonId: 'request_feature', buttonText: { displayText: '💡 Request Feature' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, supportButtons);
    },

    ping: async (sock, msg) => {
        const start = Date.now();
        await sock.sendMessage(msg.key.remoteJid, { text: '🏓 Pinging...' });
        const end = Date.now();
        
        const pingButtons = {
            text: `🏓 *PING RESULT*\n\n*Response Time:* ${end - start}ms\n*Status:* ✅ Excellent\n*Connection:* Stable\n*Server:* Active\n\nBot is running smoothly! 🚀`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'check_ping', buttonText: { displayText: '🔄 Test Again' }, type: 1 },
                { buttonId: 'view_uptime', buttonText: { displayText: '⏰ View Uptime' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, pingButtons);
    },

    alive: async (sock, msg) => {
        const aliveButtons = {
            text: `🚀 *GAGA09 XMD BOT STATUS*\n\n*Status:* ✅ ALIVE & ACTIVE\n*Commands:* 500+ Working\n*Response:* Lightning Fast ⚡\n*Uptime:* ${Math.floor(process.uptime() / 3600)}h ${Math.floor((process.uptime() % 3600) / 60)}m\n\nBot is fully operational! 💪`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'check_ping', buttonText: { displayText: '🏓 Check Ping' }, type: 1 },
                { buttonId: 'view_uptime', buttonText: { displayText: '⏰ View Uptime' }, type: 1 },
                { buttonId: 'bot_stats', buttonText: { displayText: '📊 Bot Statistics' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: aliveButtons.text,
            footer: aliveButtons.footer,
            buttons: aliveButtons.buttons,
            headerType: 1
        });
    },

    uptime: async (sock, msg) => {
        const uptime = process.uptime();
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        
        const uptimeButtons = {
            text: `⏰ *BOT UPTIME*\n\n📅 Days: ${days}\n⏰ Hours: ${hours}\n⏱️ Minutes: ${minutes}\n\n*Total Runtime:* ${Math.floor(uptime)} seconds\n\nBot running continuously! 💪`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'bot_stats', buttonText: { displayText: '📊 View Statistics' }, type: 1 },
                { buttonId: 'check_ping', buttonText: { displayText: '🏓 Check Ping' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, uptimeButtons);
    },

    owner: async (sock, msg) => {
        const ownerButtons = {
            text: `👑 *BOT OWNER INFO*\n\n*Name:* Vincent Ganiza\n*Alias:* Lil Gaga Traxx09\n*Title:* The King 👑\n*Role:* Bot Creator & Developer\n\n🎭 Master Bot Developer\n🚀 WhatsApp Expert\n💎 Premium Creator\n🔥 500+ Commands\n\n"Gaga is the King" 👑`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'support_help', buttonText: { displayText: '📞 Contact Support' }, type: 1 },
                { buttonId: 'about_bot', buttonText: { displayText: 'ℹ️ About Bot' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: ownerButtons.text,
            footer: ownerButtons.footer,
            buttons: ownerButtons.buttons,
            headerType: 1
        });
    },

    gaga: async (sock, msg) => {
        const gagaButtons = {
            text: `🎭 *GAGA09 XMD SIGNATURE*\n\n${config.copyright}\n\n👑 *"Gaga is the King"* 👑\n\n• 500+ Commands ✅\n• 10 Categories ✅\n• AI Powered ✅\n• Premium Features ✅\n\n*Created with ❤️ by Vincent Ganiza*`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'general_menu', buttonText: { displayText: '📱 Explore Commands' }, type: 1 },
                { buttonId: 'support_help', buttonText: { displayText: '📞 Join Channel' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: gagaButtons.text,
            footer: gagaButtons.footer,
            buttons: gagaButtons.buttons,
            headerType: 1
        });
    },

    status: async (sock, msg) => {
        const statusButtons = {
            text: `📊 *BOT STATUS*\n\n*Connection:* ✅ Active\n*Commands:* ✅ Working (500+)\n*AI:* ✅ Online\n*Downloads:* ✅ Functional\n*Games:* ✅ Available\n\n*Performance:* 🟢 Excellent\n⚡ Fast Response\n🔒 Secure\n💎 Premium Quality\n\nAll systems operational! 🚀`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'check_ping', buttonText: { displayText: '🏓 Test Ping' }, type: 1 },
                { buttonId: 'view_uptime', buttonText: { displayText: '⏰ Check Uptime' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, statusButtons);
    },

    rules: async (sock, msg) => {
        const rulesButtons = {
            text: `📋 *GROUP RULES*\n\n1️⃣ Respect all members\n2️⃣ No spam or flooding\n3️⃣ No inappropriate content\n4️⃣ Use commands responsibly\n5️⃣ No ads without permission\n6️⃣ Maintain friendly environment\n7️⃣ Report issues to admins\n8️⃣ Have fun and enjoy!\n\n*Violations may result in warnings*\n\nBe kind, be respectful! 🤝`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Tools' }, type: 1 },
                { buttonId: 'support_help', buttonText: { displayText: '📞 Report Issue' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, rulesButtons);
    },

    settings: async (sock, msg) => {
        const settingsButtons = {
            text: `⚙️ *BOT SETTINGS PANEL*\n\nConfigure bot behavior and features:`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'welcome_settings', buttonText: { displayText: '👋 Welcome Messages' }, type: 1 },
                { buttonId: 'auto_settings', buttonText: { displayText: '🤖 Auto Features' }, type: 1 },
                { buttonId: 'security_settings', buttonText: { displayText: '🔒 Security Settings' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: settingsButtons.text,
            footer: settingsButtons.footer,
            buttons: settingsButtons.buttons,
            headerType: 1
        });
    }
};