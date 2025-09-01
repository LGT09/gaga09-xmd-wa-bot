import { formatResponse } from '../utils/helpers.js';

export const mediaCommands = {
    sticker: async (sock, msg) => {
        const stickerText = `
🎨 *STICKER MAKER*

*Instructions:*
1️⃣ Send an image
2️⃣ Reply with .sticker
3️⃣ Get your custom sticker!

*Features:*
✂️ Auto crop to square
🎭 WhatsApp compatible
📱 High quality output
⚡ Fast processing

*Supported Formats:*
📷 JPEG images
🖼️ PNG images
🎨 Transparent backgrounds

*Sticker Pack:* Gaga09 XMD
*Creator:* Lil Gaga Traxx09

Send an image to start! 📸`;

        const response = formatResponse(stickerText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    toimg: async (sock, msg) => {
        const toimgText = `
🖼️ *STICKER TO IMAGE*

*Instructions:*
1️⃣ Send a sticker
2️⃣ Reply with .toimg  
3️⃣ Get image version!

*Conversion Features:*
📸 High quality output
🎨 Original resolution maintained
📱 Mobile friendly format
⚡ Quick conversion

*Output Format:* PNG
*Quality:* Original maintained
*Transparency:* Preserved

Send a sticker to convert! 🔄`;

        const response = formatResponse(toimgText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    gif: async (sock, msg) => {
        const gifText = `
🎬 *VIDEO TO GIF CONVERTER*

*Instructions:*
1️⃣ Send a video (max 30s)
2️⃣ Reply with .gif
3️⃣ Get your GIF!

*GIF Settings:*
⏱️ Duration: Auto-optimized
📐 Size: Optimized for WhatsApp
🎨 Quality: High
🔄 Loop: Seamless

*Features:*
✂️ Auto trim to best moments
📱 Mobile optimized
💾 Compressed for sharing
🎭 Fun and shareable

Send a video to convert! 🎥`;

        const response = formatResponse(gifText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    voice: async (sock, msg) => {
        const voiceText = `
🎤 *VOICE CHANGER*

*Instructions:*
1️⃣ Send a voice note
2️⃣ Reply with .voice
3️⃣ Choose effect!

*Available Effects:*
🤖 Robot voice
👹 Deep voice
🐿️ Chipmunk (high pitch)
👻 Scary voice
😂 Funny voice
🎵 Auto-tune

*Features:*
🔊 High quality output
⚡ Fast processing
📱 WhatsApp compatible
🎧 Crystal clear audio

Send a voice note to start! 🎙️`;

        const response = formatResponse(voiceText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    }
};