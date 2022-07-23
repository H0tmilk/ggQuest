import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ethers } from "ethers";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import Footer from './../components/Footer';

import "./../public/assets/css/animate.min.css";
import "./../public/assets/css/aos.css";
import "./../public/assets/css/bootstrap.min.css";
import "./../public/assets/css/default.css";
import "./../public/assets/css/fontawesome-all.min.css";
import "./../public/assets/css/magnific-popup.css";
import "./../public/assets/css/odometer.css";
import "./../public/assets/css/responsive.css";
import "./../public/assets/css/slick.css";
import "./../public/assets/css/style.css";

function MyApp({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygonMumbai, chain.optimism, chain.arbitrum],
    [
      alchemyProvider({ alchemyId: process.env.REACT_APP_ALCHEMY_ID }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (   <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <header>
          <Link href="/leaderboard">Leaderboard</Link> |
          <Link href="/quests">Quests</Link>
          <ConnectButton />
        
        </header>
        <Component {...pageProps} />
        <Footer />

      </RainbowKitProvider>
    </WagmiConfig>
        
    </div>

  )
}

export default MyApp
