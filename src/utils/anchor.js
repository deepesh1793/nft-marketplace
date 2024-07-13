import { AnchorProvider, Program } from '@project-serum/anchor';
import idl from './idl.json';

// Import the PublicKey class from @solana/web3.js
import { PublicKey } from '@solana/web3.js';

// Your program's ID (replace with your actual program ID)
const programID = new PublicKey('8MLJwZe8HY4B54xe2hPcpf7HeDdpa1qCsnYqsTfmxqf');

export const getProvider = (wallet, connection) => {
    return new AnchorProvider(connection, wallet, {
        preflightCommitment: 'processed',
    });
};

export const getProgram = (provider) => {
    return new Program(idl, programID, provider);
};