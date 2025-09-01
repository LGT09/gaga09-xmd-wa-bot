import { config } from '../config/config.js';

export function getRandomBotImage() {
    const randomIndex = Math.floor(Math.random() * config.botImages.length);
    return config.botImages[randomIndex];
}

export function formatResponse(text, includeImage = false) {
    const footer = `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`;
    
    return {
        text: text + footer,
        image: includeImage ? getRandomBotImage() : null
    };
}

export function extractCommand(text) {
    if (!text) return null;
    
    // Remove prefix if present
    const cleanText = text.startsWith(config.prefix) ? text.slice(1) : text;
    
    // Split command and arguments
    const parts = cleanText.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    return { command, args, full: cleanText };
}

export function isCommand(text) {
    if (!text) return false;
    
    // Check if starts with prefix
    if (text.startsWith(config.prefix)) return true;
    
    // Check if it's a recognized command without prefix
    const possibleCommand = text.split(' ')[0].toLowerCase();
    
    // List of all available commands for prefix-less detection
    const allCommands = [
        'menu', 'help', 'about', 'support', 'ping', 'uptime', 'status', 'owner', 'gaga', 'alive',
        'admin', 'ban', 'promote', 'admins', 'tagall', 'clear', 'settings',
        'fakefollowers', 'fakemembers', 'fakereactions', 'sermon', 'praise',
        'ytmp3', 'ytmp4', 'tiktok', 'instagram', 'facebook', 'spotify',
        'dice', 'coin', 'joke', 'meme', 'truth', 'dare', 'fun',
        'ai', 'nexus', 'translate', 'math', 'calculator',
        'ronaldo', 'messi', 'scores', 'fixtures',
        'google', 'weather', 'lyrics', 'wiki', 'news',
        'sticker', 'toimg', 'gif', 'voice',
        'qr', 'ip', 'track', 'update'
    ];
    
    return allCommands.includes(possibleCommand);
}

export async function downloadMedia(msg) {
    try {
        if (msg.message?.imageMessage) {
            const stream = await downloadContentFromMessage(msg.message.imageMessage, 'image');
            return stream;
        }
        if (msg.message?.videoMessage) {
            const stream = await downloadContentFromMessage(msg.message.videoMessage, 'video');
            return stream;
        }
        if (msg.message?.audioMessage) {
            const stream = await downloadContentFromMessage(msg.message.audioMessage, 'audio');
            return stream;
        }
        return null;
    } catch (error) {
        console.error('Error downloading media:', error);
        return null;
    }
}