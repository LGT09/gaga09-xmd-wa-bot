import { formatResponse } from '../utils/helpers.js';

export const aiCommands = {
    nexus: async (sock, msg) => {
        const nexusButtons = {
            text: `🤖 *GAGA09 NEXUS AI ASSISTANT*\n\n*Your Intelligent Companion*\n\n*Capabilities:*\n🧠 Answer questions\n📚 Explain topics\n🧮 Solve math\n📝 Write essays\n🔍 Research help\n💡 Creative thinking\n🌍 Multi-language\n📊 Data analysis`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'ask_nexus', buttonText: { displayText: '🧠 Ask Nexus' }, type: 1 },
                { buttonId: 'text_tools', buttonText: { displayText: '📝 Text Tools' }, type: 1 },
                { buttonId: 'academic_help', buttonText: { displayText: '🎓 Academic Help' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: nexusButtons.text,
            footer: nexusButtons.footer,
            buttons: nexusButtons.buttons,
            headerType: 1
        });
    },

    ai: async (sock, msg, args) => {
        if (!args.length) {
            const aiButtons = {
                text: `🤖 *GAGA09 NEXUS AI*\n\nPlease ask me a question!\n\n*Example:* .ai What is the capital of France?`,
                footer: `Powered by ${config.owner}`,
                buttons: [
                    { buttonId: 'ask_nexus', buttonText: { displayText: '🧠 Ask Question' }, type: 1 },
                    { buttonId: 'ai_menu', buttonText: { displayText: '🤖 AI Menu' }, type: 1 },
                    { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
                ],
                headerType: 1
            };
            await sock.sendMessage(msg.key.remoteJid, aiButtons);
            return;
        }

        const question = args.join(' ');
        
        // Simple AI responses for demonstration
        const aiResponses = {
            'hello': 'Hello! How can I help you today?',
            'how are you': 'I\'m doing great! Ready to assist you with anything.',
            'what is your name': 'I\'m Gaga09 XMD, your intelligent assistant!',
            'who created you': 'I was created by Vincent Ganiza a.k.a Lil Gaga Traxx09, the King! 👑'
        };

        let response_text = aiResponses[question.toLowerCase()] || 
            `🤖 *GAGA09 NEXUS AI RESPONSE*\n\n*Question:* ${question}\n\n*AI Answer:* I understand your question about "${question}". As an AI assistant, I'm here to help with various topics including science, math, general knowledge, and more.\n\nFor more advanced AI features, please ensure full API integration is configured.`;

        const aiButtons = {
            text: response_text,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'ask_nexus', buttonText: { displayText: '🧠 Ask Another' }, type: 1 },
                { buttonId: 'ai_menu', buttonText: { displayText: '🤖 AI Tools' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, aiButtons);
    },

    translate: async (sock, msg, args) => {
        if (args.length < 2) {
            const response = formatResponse('❌ Please provide language and text!\n\nExample: .translate spanish Hello world');
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
            return;
        }

        const language = args[0];
        const text = args.slice(1).join(' ');

        const translateText = `
🌍 *LANGUAGE TRANSLATION*

*Target Language:* ${language.charAt(0).toUpperCase() + language.slice(1)}
*Original Text:* ${text}

*Translated:* [Translation would appear here]

*Supported Languages:*
🇪🇸 Spanish  🇫🇷 French  🇩🇪 German
🇮🇹 Italian  🇵🇹 Portuguese  🇷🇺 Russian
🇯🇵 Japanese  🇰🇷 Korean  🇨🇳 Chinese
🇦🇷 Arabic  🇭🇮 Hindi  🇹🇷 Turkish

*Note:* Full translation requires API integration.`;

        const response = formatResponse(translateText);
        await sock.sendMessage(msg.key.remoteJid, { text: response.text });
    },

    math: async (sock, msg, args) => {
        if (!args.length) {
            const response = formatResponse('🧮 Please provide a math problem!\n\nExample: .math 15 + 25 * 2');
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
            return;
        }

        const problem = args.join(' ');
        
        try {
            // Basic math evaluation (safe for simple expressions)
            const result = Function(`"use strict"; return (${problem.replace(/[^0-9+\-*/().]/g, '')})`)();
            
            const mathText = `
🧮 *MATH SOLVER*

*Problem:* ${problem}
*Answer:* ${result}

*Solution Steps:* [Detailed steps would appear here]

*Math Features:*
➕ Basic arithmetic
📐 Geometry calculations
📊 Statistics  
🔢 Algebra solving
📈 Calculus support
🧮 Advanced functions

Gaga09 Math Solver is ready! 📚`;

            const response = formatResponse(mathText);
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
        } catch (error) {
            const response = formatResponse('❌ Invalid math expression. Please check your input.');
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
        }
    },

    calculator: async (sock, msg, args) => {
        if (!args.length) {
            const response = formatResponse('🧮 Please provide a calculation!\n\nExample: .calculator 50 * 20 + 100');
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
            return;
        }

        const expression = args.join(' ');
        
        try {
            const result = Function(`"use strict"; return (${expression.replace(/[^0-9+\-*/().]/g, '')})`)();
            
            const calcText = `
🧮 *CALCULATOR RESULT*

*Expression:* ${expression}
*Result:* ${result}

*Calculator Features:*
➕ Addition
➖ Subtraction  
✖️ Multiplication
➗ Division
📐 Parentheses support
🔢 Decimal numbers

Quick and accurate calculations! ⚡`;

            const response = formatResponse(calcText);
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
        } catch (error) {
            const response = formatResponse('❌ Invalid calculation. Please check your expression.');
            await sock.sendMessage(msg.key.remoteJid, { text: response.text });
        }
    }
};