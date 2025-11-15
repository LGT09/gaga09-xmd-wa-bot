const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "GAGA~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ljS0xCbytJT2FKVEtQRFZNa0F3UStGQlhxOFNhN2dOM1dtMStWdERrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGlzeVFZbTlMRUZaSURTMlBwaEdXWWtJdUlTVFFyMGpZZ3VzUTNyd1F6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUDlPU215cU84UkNiRWVBdTF6aEM2RXFMbHFWZmJnL0tqK21aMGpVWUhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqNEEyYWN3ODBMVWF2eTJvdStqQUFZRkJlUFJ4TnBpbFpNTVBTNGgwT200PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHWE14bmhzNEpnUCtsazVXd3FzcjhLdWpjWlJtYUNtYUplcnBUY3hFWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFSN3k2V015Lzd3ekxacWZFcnFZdHhZd09vM3VvcmZWYzUyeDBrM0h3Z289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hmbzAyS1BudTV4a0hwU1pLcFJrNEZGV01nSU0vcWRuZVAyb21SU2hHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1VWQ1pWeWhCTDhEeGsxWG04L0NuVC9ZbmdTaHZIYy9oQ2x1US9hdkVCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRWallyM0lCd3dtWllSMzNxaFhFN3ZpMnp6RS8zcVZGVi95TngwM0JHM3ZGRk1NNHBFaDA3TWk0MzlZaEVUVk1PYzZpL0NMQU5pQzJybmVjdFNyUWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6InN4NmhUbFVTajNnYWJwbVF4bHFJNDhBSEQwRWFnVldTZnUxRkpxY0VYSVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE2ODU3OTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QzcwODQxMDNDNTQyQTVCNUM2MzVFRjRGMjk4NzhCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjMyMjc3MDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNjg1Nzk5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTExN0MyQzVCRTI2MEU0NzM0OTExMjkzOTE2NjgyRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzMjI3NzA1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTY4NTc5OTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxQkY3Q0U2QjA4MUI4MjA2NkQ0MjdFOEM3NUFFMDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzIyNzcwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE2ODU3OTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MDA4MzVCNTZCRDg2Q0U3OTg5MTFBQkE4M0IzNUFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjMyMjc3MDd9XSwibmV4dFByZUtleUlkIjoxNjI1LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MTYyNSwiYWNjb3VudFN5bmNDb3VudGVyIjo0LCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiMjYzNzE2ODU3OTk5OjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRyYXh4aW9uIFRlY2giLCJsaWQiOiIxNzAwNTEzMjgwMjg5MjY6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT0UwSjBFRUtqdzRzZ0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhcWkzUG9HZGdnNXA3cUVlM1FrdFlzaDN1QS8reUVtYnJ1RTF3Q001ZTBZPSIsImFjY291bnRTaWduYXR1cmUiOiJkVG1JeGVsV09OcHd0clBXMEROOGxOM2RMaDFDdW9vcVRFb2VFVFB3eWNnYlB3QzNMTlo0VkVDQlJHVW41MUQ2ZVlSUGgzVG5hUFJuR0VNL3FJQ2hCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV3hMV25RenQ1TmxOQVl5clI0aVUvUFJzdW9vN2JEeXhvVGdWd3ZNT3JzSTNnemhlZFk0WFdTOEdweXNnUUNrditpOURjdTdlRkpSNy81VlNrMHRmamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTY4NTc5OTk6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3FvdHo2Qm5ZSU9hZTZoSHQwSkxXTElkN2dQL3NoSm02N2hOY0FqT1h0RyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzMjI3NzI3LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURURSJ9",  // Your bot's session ID (keep it secure)
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
        
