import { config } from '../config/config.js';
import { extractCommand, formatResponse, getRandomBotImage } from '../utils/helpers.js';
import { handleButtonResponse } from './buttonHandler.js';
import { generalCommands } from '../commands/general.js';
import { adminCommands } from '../commands/admin.js';
import { fakeCommands } from '../commands/fake.js';
import { downloaderCommands } from '../commands/downloader.js';
import { funCommands } from '../commands/fun.js';
import { aiCommands } from '../commands/ai.js';
import { soccerCommands } from '../commands/soccer.js';
import { searchCommands } from '../commands/search.js';
import { mediaCommands } from '../commands/media.js';
import { toolsCommands } from '../commands/tools.js';

const commandCategories = {
    ...generalCommands,
    ...adminCommands,
    ...fakeCommands,
    ...downloaderCommands,
    ...funCommands,
    ...aiCommands,
    ...soccerCommands,
    ...searchCommands,
    ...mediaCommands,
    ...toolsCommands
};

export async function commandHandler(sock, msg) {
    try {
        // Handle button responses
        if (msg.message?.buttonsResponseMessage) {
            await handleButtonResponse(sock, msg);
            return;
        }
        
        const messageText = msg.message?.conversation || 
                           msg.message?.extendedTextMessage?.text || '';
        
        if (!messageText) return;
        
        const commandData = extractCommand(messageText);
        if (!commandData) return;
        
        const { command, args } = commandData;
        const from = msg.key.remoteJid;
        const sender = msg.key.participant || msg.key.remoteJid;
        
        // Check if command exists
        if (commandCategories[command]) {
            console.log(`Executing command: ${command}`);
            await commandCategories[command](sock, msg, args, from, sender);
        } else {
            // Handle unknown commands
            const errorButtons = {
                text: `❌ *Unknown command: ${command}*\n\nType *.menu* to see all available commands.`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'general_menu', buttonText: { displayText: '📱 View Commands' }, type: 1 },
                    { buttonId: 'support_help', buttonText: { displayText: '📞 Get Help' }, type: 1 }
                ],
                headerType: 1
            };
            
            await sock.sendMessage(from, errorButtons);
        }
        
    } catch (error) {
        console.error('Command handler error:', error);
        
        const errorButtons = {
            text: `❌ *ERROR OCCURRED*\n\nAn error occurred while processing your command. Please try again.`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'support_help', buttonText: { displayText: '📞 Report Issue' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        try {
            await sock.sendMessage(msg.key.remoteJid, errorButtons);
        } catch (sendError) {
            console.error('Error sending error message:', sendError);
        }
    }
}