import { formatResponse } from '../utils/helpers.js';

export const adminCommands = {
    admin: async (sock, msg) => {
        const adminButtons = {
            text: `👥 *ADMIN CONTROL PANEL*\n\nManage your group with powerful tools:`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'member_management', buttonText: { displayText: '👤 Member Management' }, type: 1 },
                { buttonId: 'group_settings', buttonText: { displayText: '⚙️ Group Settings' }, type: 1 },
                { buttonId: 'security_tools', buttonText: { displayText: '🔒 Security Tools' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: adminButtons.text,
            footer: adminButtons.footer,
            buttons: adminButtons.buttons,
            headerType: 1
        });
    },

    ban: async (sock, msg, args) => {
        // Check if user is admin
        const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
        const isAdmin = groupMetadata.participants.find(p => 
            p.id === (msg.key.participant || msg.key.remoteJid) && 
            (p.admin === 'admin' || p.admin === 'superadmin')
        );

        if (!isAdmin) {
            const errorButtons = {
                text: `❌ *ACCESS DENIED*\n\nOnly admins can use this command!`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Menu' }, type: 1 },
                    { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
                ],
                headerType: 1
            };
            await sock.sendMessage(msg.key.remoteJid, errorButtons);
            return;
        }

        const banButtons = {
            text: `🚫 *BAN COMMAND*\n\n*Usage:* .ban @user\n*Permission:* Admin only\n*Action:* Remove and restrict user\n\n*Example:* .ban @username\n\nNote: Real ban requires proper permissions.`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'member_management', buttonText: { displayText: '👤 Member Tools' }, type: 1 },
                { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Menu' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, banButtons);
    },

    promote: async (sock, msg, args) => {
        const promoteButtons = {
            text: `⬆️ *PROMOTE COMMAND*\n\n*Usage:* .promote @user\n*Permission:* Admin only\n*Action:* Make user admin\n\n*Example:* .promote @username\n\nRequires admin permissions in group.`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'member_management', buttonText: { displayText: '👤 Member Tools' }, type: 1 },
                { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Menu' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, promoteButtons);
    },

    admins: async (sock, msg) => {
        try {
            const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
            const admins = groupMetadata.participants.filter(p => 
                p.admin === 'admin' || p.admin === 'superadmin'
            );

            const adminList = admins.map((admin, index) => 
                `${index + 1}. @${admin.id.split('@')[0]}`
            ).join('\n');

            const adminsButtons = {
                text: `👥 *GROUP ADMINS*\n\n${adminList || 'No admins found'}\n\n*Total Admins:* ${admins.length}`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'member_management', buttonText: { displayText: '👤 Manage Members' }, type: 1 },
                    { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Menu' }, type: 1 },
                    { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
                ],
                headerType: 1
            };
            
            await sock.sendMessage(msg.key.remoteJid, { 
                text: adminsButtons.text + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
                footer: adminsButtons.footer,
                buttons: adminsButtons.buttons,
                mentions: admins.map(a => a.id)
            });
        } catch (error) {
            const errorButtons = {
                text: `❌ Could not fetch admin list. This might not be a group.`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
                ],
                headerType: 1
            };
            await sock.sendMessage(msg.key.remoteJid, errorButtons);
        }
    },

    tagall: async (sock, msg) => {
        try {
            const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
            const participants = groupMetadata.participants;

            const mentions = participants.map(p => `@${p.id.split('@')[0]}`).join(' ');

            const tagButtons = {
                text: `📢 *ATTENTION EVERYONE!*\n\n${mentions}\n\n*Group:* ${groupMetadata.subject}\n*Members:* ${participants.length}\n\nEveryone has been tagged! 📣`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Tools' }, type: 1 },
                    { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
                ],
                headerType: 1
            };
            
            await sock.sendMessage(msg.key.remoteJid, { 
                text: tagButtons.text + `\n\n${config.brandSignature}\n📢 Support: ${config.supportChannel}`,
                footer: tagButtons.footer,
                buttons: tagButtons.buttons,
                mentions: participants.map(p => p.id)
            });
        } catch (error) {
            const errorButtons = {
                text: `❌ Could not tag all members. This might not be a group.`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
                ],
                headerType: 1
            };
            await sock.sendMessage(msg.key.remoteJid, errorButtons);
        }
    },

    clear: async (sock, msg) => {
        const clearButtons = {
            text: `🗑️ *CLEAR CHAT*\n\nThis command would clear the chat history.\n\n*Note:* This is a simulation for demonstration.\nReal chat clearing requires special permissions.\n\n*Alternative:* Admins can manually clear chat in group settings.`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'admin_menu', buttonText: { displayText: '👥 Admin Tools' }, type: 1 },
                { buttonId: 'security_tools', buttonText: { displayText: '🔒 Security' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, clearButtons);
    }
};