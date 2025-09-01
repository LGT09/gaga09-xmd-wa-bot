import { formatResponse, getRandomBotImage } from '../utils/helpers.js';
import { config } from '../config/config.js';
import { 
    createMenuButtons, 
    createMenuButtons2, 
    createMenuButtons3,
    createAdminButtons,
    createAliveButtons,
    createSettingsButtons,
    createGeneralMenuButtons,
    createDownloaderButtons,
    createFunButtons,
    createAIButtons,
    createBackButton
} from '../utils/buttons.js';

export async function handleButtonResponse(sock, msg) {
    try {
        const buttonId = msg.message?.buttonsResponseMessage?.selectedButtonId;
        if (!buttonId) return;

        const from = msg.key.remoteJid;
        
        switch (buttonId) {
            case 'general_menu':
                await sendGeneralMenu(sock, from);
                break;
                
            case 'admin_menu':
                await sendAdminMenu(sock, from);
                break;
                
            case 'fake_menu':
                await sendFakeMenu(sock, from);
                break;
                
            case 'downloader_menu':
                await sendDownloaderMenu(sock, from);
                break;
                
            case 'fun_menu':
                await sendFunMenu(sock, from);
                break;
                
            case 'ai_menu':
                await sendAIMenu(sock, from);
                break;
                
            case 'soccer_menu':
                await sendSoccerMenu(sock, from);
                break;
                
            case 'search_menu':
                await sendSearchMenu(sock, from);
                break;
                
            case 'media_menu':
                await sendMediaMenu(sock, from);
                break;
                
            case 'tools_menu':
                await sendToolsMenu(sock, from);
                break;
                
            case 'check_ping':
                await checkPing(sock, from);
                break;
                
            case 'view_uptime':
                await viewUptime(sock, from);
                break;
                
            case 'bot_stats':
                await showBotStats(sock, from);
                break;
                
            case 'member_management':
                await showMemberManagement(sock, from);
                break;
                
            case 'group_settings':
                await showGroupSettings(sock, from);
                break;
                
            case 'security_tools':
                await showSecurityTools(sock, from);
                break;
                
            case 'back_to_menu':
                await sendMainMenu(sock, from);
                break;
                
            default:
                await handleUnknownButton(sock, from, buttonId);
        }
        
    } catch (error) {
        console.error('Button handler error:', error);
    }
}

async function sendMainMenu(sock, from) {
    const menuButtons = createMenuButtons();
    
    await sock.sendMessage(from, {
        image: { url: getRandomBotImage() },
        caption: menuButtons.text,
        footer: menuButtons.footer,
        buttons: menuButtons.buttons,
        headerType: 1
    });
}

async function sendGeneralMenu(sock, from) {
    const generalText = `
🔹 *GENERAL COMMANDS (40+)*

*Basic Commands:*
• .menu → Main menu
• .help → Help guide
• .about → Bot information
• .support → Support channel
• .ping → Check response time
• .uptime → Bot runtime
• .status → System status
• .owner → Creator info
• .gaga → Brand signature

*Profile Commands:*
• .profile → User profile
• .setname → Change bot name
• .setbio → Update bio
• .setpic → Update profile picture

*Group Commands:*
• .tagall → Tag all members
• .rules → Group rules
• .info → Group information
• .welcome → Toggle welcome
• .goodbye → Toggle goodbye

*Utility Commands:*
• .report → Report bugs
• .bugmenu → Bug commands`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: generalText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function sendAdminMenu(sock, from) {
    const adminButtons = createAdminButtons();
    
    await sock.sendMessage(from, {
        image: { url: getRandomBotImage() },
        caption: adminButtons.text,
        footer: adminButtons.footer,
        buttons: adminButtons.buttons,
        headerType: 1
    });
}

async function sendFakeMenu(sock, from) {
    const fakeText = `
🎭 *FAKE METRICS (MAKANDIWA SERMON SPECIAL)*

*Fake Generators:*
• .fakefollowers <1-2500> → Generate fake followers
• .fakemembers <1-850> → Generate fake members  
• .fakereactions <1-450> → Generate fake reactions

*Sermon Commands:*
• .sermon → Makandiwa sermon messages
• .praise → Sermon praise lines
• .verse → Random Bible verse

*Special Features:*
✨ Makandiwa sermon integration
🙏 Prophetic declarations
⛪ Church atmosphere
🔥 Anointing power

*Example Usage:*
.fakefollowers 1000
.sermon
.praise`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: fakeText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function sendDownloaderMenu(sock, from) {
    const downloaderButtons = createDownloaderButtons();
    
    await sock.sendMessage(from, {
        image: { url: getRandomBotImage() },
        caption: downloaderButtons.text,
        footer: downloaderButtons.footer,
        buttons: downloaderButtons.buttons,
        headerType: 1
    });
}

async function sendFunMenu(sock, from) {
    const funButtons = createFunButtons();
    
    await sock.sendMessage(from, {
        image: { url: getRandomBotImage() },
        caption: funButtons.text,
        footer: funButtons.footer,
        buttons: funButtons.buttons,
        headerType: 1
    });
}

async function sendAIMenu(sock, from) {
    const aiButtons = createAIButtons();
    
    await sock.sendMessage(from, {
        image: { url: getRandomBotImage() },
        caption: aiButtons.text,
        footer: aiButtons.footer,
        buttons: aiButtons.buttons,
        headerType: 1
    });
}

async function sendSoccerMenu(sock, from) {
    const soccerText = `
⚽ *SOCCER & SPORTS COMMANDS*

*Live Updates:*
• .scores → Live match scores
• .fixtures → Upcoming matches
• .table → League standings
• .ucl → Champions League

*Player Stats:*
• .ronaldo → CR7 is 100× better than Messi! 👑
• .messi → Messi statistics
• .player <name> → Player information
• .team <name> → Team details

*Features:*
🏆 Real-time scores
📊 Player statistics
📅 Match fixtures
🏟️ Stadium information
⚽ Goal updates
📺 Where to watch

*Special:*
👑 Ronaldo > Messi debate settled!`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: soccerText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function sendSearchMenu(sock, from) {
    const searchText = `
🔍 *SEARCH & INFORMATION COMMANDS*

*Search Tools:*
• .google <query> → Google search
• .wiki <query> → Wikipedia lookup
• .news → Latest news updates
• .define <word> → Dictionary lookup

*Information:*
• .weather <city> → Weather updates
• .time <city> → Local time
• .lyrics <song> → Song lyrics
• .quote → Inspirational quotes

*Religious:*
• .bible → Bible verses
• .quran → Quran verses

*Features:*
🌐 Global search capabilities
📚 Educational resources
🌤️ Weather forecasting
📰 News aggregation
📖 Religious texts
💡 Quick facts`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: searchText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function sendMediaMenu(sock, from) {
    const mediaText = `
🎨 *MEDIA & EDITING COMMANDS*

*Sticker Tools:*
• .sticker → Create sticker from image
• .toimg → Convert sticker to image

*Video Tools:*
• .gif → Convert video to GIF
• .slowmo → Slow motion effect
• .fast → Speed up video

*Audio Tools:*
• .voice → Voice changer effects

*Image Tools:*
• .emoji2img → Convert emoji to image
• .caption → Add text caption

*Features:*
🎭 Professional editing
📱 WhatsApp optimized
⚡ Fast processing
🎨 Creative effects
🔊 Audio enhancement
📸 Image manipulation`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: mediaText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function checkPing(sock, from) {
    const start = Date.now();
    const pingMsg = await sock.sendMessage(from, { text: '🏓 Checking ping...' });
    const end = Date.now();
    
    const pingButtons = {
        text: `🏓 *PING RESULT*\n\n*Response Time:* ${end - start}ms\n*Status:* ✅ Excellent\n*Connection:* Stable\n*Server:* Active`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'check_ping', buttonText: { displayText: '🔄 Test Again' }, type: 1 },
            { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
        ],
        headerType: 1
    };
    
    await sock.sendMessage(from, pingButtons);
}

async function viewUptime(sock, from) {
    const uptime = process.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    
    const uptimeButtons = {
        text: `⏰ *BOT UPTIME*\n\n📅 Days: ${days}\n⏰ Hours: ${hours}\n⏱️ Minutes: ${minutes}\n\n*Status:* Running smoothly! 💪`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'bot_stats', buttonText: { displayText: '📊 View Stats' }, type: 1 },
            { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
        ],
        headerType: 1
    };
    
    await sock.sendMessage(from, uptimeButtons);
}

async function showBotStats(sock, from) {
    const statsButtons = {
        text: `📊 *BOT STATISTICS*\n\n*Commands:* 500+ ✅\n*Categories:* 10 ✅\n*Uptime:* ${Math.floor(process.uptime() / 3600)}h ${Math.floor((process.uptime() % 3600) / 60)}m\n*Status:* All systems operational! 🚀`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'view_uptime', buttonText: { displayText: '⏰ Detailed Uptime' }, type: 1 },
            { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
        ],
        headerType: 1
    };
    
    await sock.sendMessage(from, statsButtons);
}

async function showMemberManagement(sock, from) {
    const memberText = `
👤 *MEMBER MANAGEMENT*

*Available Commands:*
• .ban @user → Ban member
• .unban @user → Unban member
• .kick @user → Remove member
• .add <number> → Add member
• .promote @user → Make admin
• .demote @user → Remove admin
• .mute @user → Mute member
• .unmute @user → Unmute member
• .warn @user → Warn member
• .unwarn @user → Remove warning

*Requirements:* Admin permissions needed`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: memberText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function showGroupSettings(sock, from) {
    const settingsText = `
⚙️ *GROUP SETTINGS*

*Available Commands:*
• .lock → Lock group (admins only)
• .unlock → Unlock group
• .antilink → Toggle link blocking
• .antispam → Toggle spam protection
• .welcome → Toggle welcome messages
• .goodbye → Toggle goodbye messages
• .rules → Set/view group rules
• .settings → View all settings

*Security Features:*
🔒 Auto-moderation
🚫 Link protection
⚡ Spam detection
👋 Auto-greetings`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: settingsText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function showSecurityTools(sock, from) {
    const securityText = `
🔒 *SECURITY TOOLS*

*Protection Commands:*
• .antilink → Block suspicious links
• .antispam → Prevent spam messages
• .logs → View security logs
• .admins → List group admins
• .tagadmin → Alert all admins
• .clear → Clear chat history
• .delete → Delete bot messages

*Auto-Protection:*
🛡️ Link scanning
🚫 Spam detection
⚠️ Warning system
📊 Activity monitoring`;

    const backButtons = createBackButton();
    
    await sock.sendMessage(from, {
        text: securityText + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
        footer: `Powered by ${config.owner}`,
        buttons: backButtons.buttons,
        headerType: 1
    });
}

async function handleUnknownButton(sock, from, buttonId) {
    const errorButtons = {
        text: `❌ *Unknown button action*\n\nButton ID: ${buttonId}\n\nPlease try again or return to main menu.`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
        ],
        headerType: 1
    };
    
    await sock.sendMessage(from, errorButtons);
}