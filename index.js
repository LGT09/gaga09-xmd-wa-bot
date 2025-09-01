import { makeWASocket, DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';
import { commandHandler } from './src/handlers/commandHandler.js';
import { config } from './src/config/config.js';
import { logger } from './src/utils/logger.js';

async function startBot() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
        
        const sock = makeWASocket({
            auth: state,
            printQRInTerminal: false,
            logger: logger,
            version: [2, 2413, 1],
            browser: ['Gaga09 XMD', 'Chrome', '1.0.0']
        });

        sock.ev.on('creds.update', saveCreds);

        sock.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect, qr } = update;
            
            if (qr) {
                console.log('\n🔗 Scan QR Code to connect Gaga09 XMD Bot:');
                qrcode.generate(qr, { small: true });
            }
            
            if (connection === 'close') {
                const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
                console.log('Connection closed due to:', lastDisconnect?.error, ', reconnecting:', shouldReconnect);
                
                if (shouldReconnect) {
                    startBot();
                }
            } else if (connection === 'open') {
                console.log('🚀 Gaga09 XMD Bot Connected Successfully!');
                console.log('📱 Bot is now ready to receive commands');
                console.log('👑 Created by Vincent Ganiza a.k.a Lil Gaga Traxx09');
            }
        });

        sock.ev.on('messages.upsert', async (m) => {
            try {
                const msg = m.messages[0];
                if (!msg.message || msg.key.fromMe) return;

                await commandHandler(sock, msg);
            } catch (error) {
                console.error('Error handling message:', error);
            }
        });

        return sock;
    } catch (error) {
        console.error('Error starting bot:', error);
        setTimeout(startBot, 5000);
    }
}

console.log('🎭 Starting Gaga09 XMD Bot...');
console.log('👑 Created by Vincent Ganiza a.k.a Lil Gaga Traxx09');
console.log('📢 Support: https://whatsapp.com/channel/0029Vb6huGcJJhzUGbPbkN3W');
startBot();