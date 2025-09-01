import { config } from '../config/config.js';

export function createMenuButtons() {
    return {
        text: `🎭 *GAGA09 XMD COMMAND MENU* 👑\n\n${config.copyright}\n\nSelect a category to explore commands:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'general_menu', buttonText: { displayText: '🔹 General (40+)' }, type: 1 },
            { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin (50+)' }, type: 1 },
            { buttonId: 'fake_menu', buttonText: { displayText: '🎭 Fake Metrics (20+)' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createMenuButtons2() {
    return {
        text: `🎭 *GAGA09 XMD COMMAND MENU* 👑\n\nMore categories:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'downloader_menu', buttonText: { displayText: '📥 Downloader (50+)' }, type: 1 },
            { buttonId: 'fun_menu', buttonText: { displayText: '🎮 Fun & Games (60+)' }, type: 1 },
            { buttonId: 'ai_menu', buttonText: { displayText: '🤖 AI Tools (80+)' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createMenuButtons3() {
    return {
        text: `🎭 *GAGA09 XMD COMMAND MENU* 👑\n\nFinal categories:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'soccer_menu', buttonText: { displayText: '⚽ Soccer (40+)' }, type: 1 },
            { buttonId: 'search_menu', buttonText: { displayText: '🔍 Search (60+)' }, type: 1 },
            { buttonId: 'media_menu', buttonText: { displayText: '🎨 Media (40+)' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createAdminButtons() {
    return {
        text: `👥 *ADMIN CONTROL PANEL*\n\nManage your group with these tools:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'member_management', buttonText: { displayText: '👤 Member Management' }, type: 1 },
            { buttonId: 'group_settings', buttonText: { displayText: '⚙️ Group Settings' }, type: 1 },
            { buttonId: 'security_tools', buttonText: { displayText: '🔒 Security Tools' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createAliveButtons() {
    return {
        text: `🚀 *GAGA09 XMD BOT STATUS*\n\nBot is alive and running perfectly!`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'check_ping', buttonText: { displayText: '🏓 Check Ping' }, type: 1 },
            { buttonId: 'view_uptime', buttonText: { displayText: '⏰ View Uptime' }, type: 1 },
            { buttonId: 'bot_stats', buttonText: { displayText: '📊 Bot Statistics' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createSettingsButtons() {
    return {
        text: `⚙️ *BOT SETTINGS PANEL*\n\nConfigure bot behavior:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'welcome_settings', buttonText: { displayText: '👋 Welcome Messages' }, type: 1 },
            { buttonId: 'auto_settings', buttonText: { displayText: '🤖 Auto Features' }, type: 1 },
            { buttonId: 'security_settings', buttonText: { displayText: '🔒 Security Settings' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createGeneralMenuButtons() {
    return {
        text: `🔹 *GENERAL COMMANDS*\n\nBasic bot utilities and information:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'basic_info', buttonText: { displayText: 'ℹ️ Basic Info' }, type: 1 },
            { buttonId: 'bot_status', buttonText: { displayText: '📊 Bot Status' }, type: 1 },
            { buttonId: 'support_help', buttonText: { displayText: '📞 Support & Help' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createDownloaderButtons() {
    return {
        text: `📥 *DOWNLOADER TOOLS*\n\nDownload content from various platforms:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'video_downloads', buttonText: { displayText: '🎬 Video Downloads' }, type: 1 },
            { buttonId: 'audio_downloads', buttonText: { displayText: '🎵 Audio Downloads' }, type: 1 },
            { buttonId: 'social_downloads', buttonText: { displayText: '📱 Social Media' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createFunButtons() {
    return {
        text: `🎮 *FUN & GAMES*\n\nEntertainment and interactive games:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'games_menu', buttonText: { displayText: '🎯 Games' }, type: 1 },
            { buttonId: 'random_fun', buttonText: { displayText: '🎲 Random Fun' }, type: 1 },
            { buttonId: 'truth_dare', buttonText: { displayText: '💭 Truth or Dare' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createAIButtons() {
    return {
        text: `🤖 *AI TOOLS & NEXUS*\n\nIntelligent assistance and automation:`,
        footer: `Powered by ${config.owner}`,
        buttons: [
            { buttonId: 'ask_nexus', buttonText: { displayText: '🧠 Ask Nexus AI' }, type: 1 },
            { buttonId: 'text_tools', buttonText: { displayText: '📝 Text Tools' }, type: 1 },
            { buttonId: 'academic_help', buttonText: { displayText: '🎓 Academic Help' }, type: 1 }
        ],
        headerType: 1
    };
}

export function createBackButton() {
    return {
        buttons: [
            { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Back to Main Menu' }, type: 1 }
        ]
    };
}