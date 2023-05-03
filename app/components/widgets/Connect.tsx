"use client"

import React from 'react'
import {
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit'
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, connectorsForWallets, ConnectButton } from '@rainbow-me/rainbowkit'
import { polygonMumbai } from "wagmi/chains";
import { createClient, WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from 'wagmi/providers/public'

function Connect() {
    const connectors = connectorsForWallets([
        {
            groupName: 'Social',
            wallets: [
                googleWallet({ options: { projectId: process.env.PROJECT_ID as string } }),
                facebookWallet({ options: { projectId: process.env.PROJECT_ID as string } }),
                githubWallet({ options: { projectId: process.env.PROJECT_ID as string } }),
                discordWallet({ options: { projectId: process.env.PROJECT_ID as string } }),
                twitchWallet({ options: { projectId: process.env.PROJECT_ID as string } }),
                twitterWallet({ options: { projectId: process.env.PROJECT_ID as string } })
            ],
        },
    ]);

    const { chains, provider, webSocketProvider } = configureChains(
        [polygonMumbai],
        [publicProvider()],
    )
    const client = createClient({
        autoConnect: false,
        connectors,
        provider,
        webSocketProvider,
    })

    return (
        <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains} modalSize={'compact'}>
                <ConnectButton />
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default Connect