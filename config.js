const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"8MxcjgDcGz0JrTHV7WGfQFzQ/J2di++YNgd5J4xFWEo="},"public":{"type":"Buffer","data":"20rnGzXaYsmOCG1K0D8CrQzrOX6igHj7PEHVYlQ6Ag8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+FZs17rxi+y0K8lfnLL+0PgTXIN2YbseN5J1jD07IkQ="},"public":{"type":"Buffer","data":"dsBXw2gb0rALPVVCuuI70eMJCNzTSwex2KCLYwAgXVg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8FHeV0C036mj8Ehj9r/k1v2GlEc2UKzh3azNew8Qw3c="},"public":{"type":"Buffer","data":"fmoAIrK6lczQ2ABIJdN++3ZM8Hqa68BljR61BT7TIQ0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CAZ4erC9YN9H6gh0iwRi6vz0frYZ3Nqwze1qq4faW2o="},"public":{"type":"Buffer","data":"wxz6PZlj3S6hbNzGujOYqZ9he3K6VAofuUpQMWIVoRQ="}},"signature":{"type":"Buffer","data":"H1r0iypZ3xfUycVI20EZJ2EsvnXQdiDVdHc+K7F22rvLYM6ru3lTIZ5cpTeFCHA8KOdrPgFGiNAfbsieiB6Kjw=="},"keyId":1},"registrationId":67,"advSecretKey":"FVSxzkPoDpB8Eymz7You7pw2vgZC+GbHT2DJryINzLI=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"VVJ8L344","me":{"id":"263716857999:29@s.whatsapp.net","name":"Traxxion Tech"},"account":{"details":"CNOE0J0EENal48gGGAggACgA","accountSignatureKey":"aqi3PoGdgg5p7qEe3QktYsh3uA/+yEmbruE1wCM5e0Y=","accountSignature":"fI1PRd/6ueTLydbMjL7kE8+XEF/regDaJQzkuQXNMuFYcKD0FjtDD8/hCRVjZ/ItB0M9aSWk9QXss8c6P99kCg==","deviceSignature":"CV6591DlOT+s7dyBFfgXvWAsjX3IAlakRQyzrFBtpAJjWAwglwp4d38JkTBAb1SzCbzduIC45YC0U2jMDHE+gg=="},"signalIdentities":[{"identifier":{"name":"263716857999:29@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWqotz6BnYIOae6hHt0JLWLId7gP/shJm67hNcAjOXtG"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUICAgN"},"lastAccountSyncTimestamp":1763234522}",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "GAGA MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "hhttps://github.com/crone",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "263788533181",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "GAGA",           // Owner's name
    DEV: process.env.DEV || "263776777379",                     // Developer's contact number
    DEVELOPER_NUMBER: '263788533181@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*GAGA MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "GAGA-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://i.postimg.cc/xTTgKc2W/IMG.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ GAGA MD*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
