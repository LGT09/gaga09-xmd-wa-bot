import { Boom } from '@hapi/boom';

export const logger = {
    level: 'silent',
    
    info: (msg) => {
        console.log(`[INFO] ${new Date().toISOString()}: ${msg}`);
    },
    
    error: (msg) => {
        console.error(`[ERROR] ${new Date().toISOString()}: ${msg}`);
    },
    
    warn: (msg) => {
        console.warn(`[WARN] ${new Date().toISOString()}: ${msg}`);
    },
    
    debug: (msg) => {
        // Uncomment for debugging
        // console.log(`[DEBUG] ${new Date().toISOString()}: ${msg}`);
    }
};