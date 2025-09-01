import { formatResponse } from '../utils/helpers.js';

export const funCommands = {
    fun: async (sock, msg) => {
        const funButtons = {
            text: `🎮 *FUN & GAMES MENU*\n\nEntertainment and interactive games:`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'games_menu', buttonText: { displayText: '🎯 Games' }, type: 1 },
                { buttonId: 'random_fun', buttonText: { displayText: '🎲 Random Fun' }, type: 1 },
                { buttonId: 'truth_dare', buttonText: { displayText: '💭 Truth or Dare' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, {
            image: { url: getRandomBotImage() },
            caption: funButtons.text,
            footer: funButtons.footer,
            buttons: funButtons.buttons,
            headerType: 1
        });
    },

    dice: async (sock, msg) => {
        const result = Math.floor(Math.random() * 6) + 1;
        const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        
        const diceButtons = {
            text: `🎲 *DICE ROLL*\n\n*Result:* ${diceEmojis[result - 1]} ${result}\n\n*Luck Level:* ${result >= 4 ? 'High 🍀' : result >= 3 ? 'Medium 🎯' : 'Try again! 🎲'}\n\nRoll again anytime! 🎮`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'roll_dice', buttonText: { displayText: '🎲 Roll Again' }, type: 1 },
                { buttonId: 'flip_coin', buttonText: { displayText: '🪙 Flip Coin' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, diceButtons);
    },

    coin: async (sock, msg) => {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        const emoji = result === 'Heads' ? '🪙' : '🔄';
        
        const coinButtons = {
            text: `🪙 *COIN FLIP*\n\n*Result:* ${emoji} ${result}!\n\n*This flip:* ${result}\n*Your luck:* ${result === 'Heads' ? 'Winning! 🎉' : 'Keep trying! 💪'}\n\nFlip again for more fun! 🎲`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'flip_coin', buttonText: { displayText: '🪙 Flip Again' }, type: 1 },
                { buttonId: 'roll_dice', buttonText: { displayText: '🎲 Roll Dice' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, coinButtons);
    },

    joke: async (sock, msg) => {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything! 😂",
            "I told my wife she was drawing her eyebrows too high. She looked surprised! 😆",
            "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
            "What do you call a fake noodle? An impasta! 🍝",
            "Why don't eggs tell jokes? They'd crack each other up! 🥚",
            "What's the best thing about Switzerland? I don't know, but the flag is a big plus! 🇨🇭"
        ];
        
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        
        const jokeButtons = {
            text: `😂 *RANDOM JOKE*\n\n${randomJoke}\n\n*Rating:* ⭐⭐⭐⭐⭐\n*Laughter Level:* Maximum 😆\n*Dad Joke Factor:* ${Math.floor(Math.random() * 10) + 1}/10`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'another_joke', buttonText: { displayText: '😂 Another Joke' }, type: 1 },
                { buttonId: 'random_meme', buttonText: { displayText: '🎭 Random Meme' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        const memeButtons = {
            text: `😂 *RANDOM MEME*\n\n*Status:* ✅ Fresh Meme Generated\n*Humor Level:* 💯 Maximum\n*Dankness:* 🔥 Supreme\n*Share Level:* 📤 Highly Shareable\n\n*Categories:*\n😂 Classic memes\n🐸 Pepe collection\n🎭 Reaction memes\n🔥 Trending memes\n💎 Premium content`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'another_meme', buttonText: { displayText: '🎭 Another Meme' }, type: 1 },
                { buttonId: 'random_joke', buttonText: { displayText: '😂 Random Joke' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, memeButtons);
    },

    truth: async (sock, msg) => {
        const truths = [
            "What's the most embarrassing thing you've ever done?",
            "Who was your first crush?",
            "What's your biggest fear?",
            "What's the weirdest dream you've ever had?",
            "What's your most guilty pleasure?",
            "What's the biggest lie you've ever told?",
            "What's your most embarrassing moment?",
            "Who do you have a secret crush on?"
        ];
        
        const randomTruth = truths[Math.floor(Math.random() * truths.length)];
        
        const truthButtons = {
            text: `💭 *TRUTH QUESTION*\n\n*Question:* ${randomTruth}\n\n*Rules:*\n✅ Answer honestly\n⏰ 30 seconds to respond\n🤐 No secrets allowed\n💯 Be truthful\n\n*Difficulty:* ${Math.floor(Math.random() * 5) + 1}/5 ⭐\n\nReady for your truth! 😏`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'new_truth', buttonText: { displayText: '💭 New Truth' }, type: 1 },
                { buttonId: 'dare_challenge', buttonText: { displayText: '🔥 Dare Instead' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, truthButtons);
    },

    dare: async (sock, msg) => {
        const dares = [
            "Send a funny selfie to the group",
            "Do 10 push-ups and share a video",
            "Sing your favorite song (voice note)",
            "Tell everyone your most embarrassing moment",
            "Do your best dance move",
            "Call someone and sing 'Happy Birthday'",
            "Post an embarrassing photo from your gallery",
            "Do an impression of a famous person"
        ];
        
        const randomDare = dares[Math.floor(Math.random() * dares.length)];
        
        const dareButtons = {
            text: `🔥 *DARE CHALLENGE*\n\n*Your Dare:* ${randomDare}\n\n*Challenge Level:* ${Math.floor(Math.random() * 5) + 1}/5 ⭐\n*Time Limit:* 2 minutes ⏰\n*Reward:* Epic respect! 💪\n\n*Rules:*\n✅ Complete the dare\n📸 Share proof if needed\n🏆 Gain legendary status\n\nAre you brave enough? 😎`,
            footer: `Powered by ${config.owner}`,
            buttons: [
                { buttonId: 'new_dare', buttonText: { displayText: '🔥 New Dare' }, type: 1 },
                { buttonId: 'truth_question', buttonText: { displayText: '💭 Truth Instead' }, type: 1 },
                { buttonId: 'back_to_menu', buttonText: { displayText: '🔙 Main Menu' }, type: 1 }
            ],
            headerType: 1
        };
        
        await sock.sendMessage(msg.key.remoteJid, dareButtons);
    }
};