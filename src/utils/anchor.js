// src/utils/anchor.js
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import idl from './idl.json'; // The IDL file for your Anchor program

const { SystemProgram } = web3;

const programID = new PublicKey(idl.metadata.address);
const network = "https://api.devnet.solana.com";
const opts = {
    preflightCommitment: "processed"
};

const getProvider = (wallet) => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
        connection, wallet, opts.preflightCommitment,
    );
    return provider;
}

const getProgram = (provider) => {
    return new Program(idl, programID, provider);
}

export { getProvider, getProgram, SystemProgram };
