import { NATIVE } from '@sushiswap/core-sdk'
import Container from 'app/components/Container'
import { NAV_CLASS } from 'app/components/Header/styles'
import useMenu from 'app/components/Header/useMenu'
import Web3Network from 'app/components/Web3Network'
import Web3Status from 'app/components/Web3Status'
import useIsCoinbaseWallet from 'app/hooks/useIsCoinbaseWallet'
import { useActiveWeb3React } from 'app/services/web3'
import { useNativeCurrencyBalances } from 'app/state/wallet/hooks'
import Image from 'next/image'
import React, { FC } from 'react'

import Dots from '../Dots'
import Typography from '../Typography'
import { NavigationItem } from './NavigationItem'

const HEADER_HEIGHT = 120

const Desktop: FC = () => {
  const menu = useMenu()
  const { account, chainId, library } = useActiveWeb3React()
  const userEthBalance = useNativeCurrencyBalances(account ? [account] : [])?.[account ?? '']
  const isCoinbaseWallet = useIsCoinbaseWallet()

  return (
    <>
      <header className="fixed z-20 hidden w-full lg:block" style={{ height: HEADER_HEIGHT }}>
        <nav className={NAV_CLASS}>
          {!account ? (
            <Container maxWidth="full" className="mx-auto">
              <div className="flex items-center justify-between gap-4 px-6">
                <div className="flex gap-4">
                  <div className="flex items-center mr-1">
                    <Image
                      src="https://raw.githubusercontent.com/Chigag-Studio/pogo-contracts-v2/302458cdfc66233e3fb2ba5e950e5214812551e0/2.svg"
                      alt="Pogo logo"
                      width="120px"
                      height="160px"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end w-auto shadow select-none whitespace-nowrap">
                  {account && chainId && (
                    <Typography weight={700} variant="sm" className="px-2 py-5 font-bold">
                      {userEthBalance ? (
                        `${userEthBalance?.toSignificant(4)} ${NATIVE[chainId].symbol}`
                      ) : (
                        <Dots>FETCHING</Dots>
                      )}
                    </Typography>
                  )}

                  {library && (library.provider.isMetaMask || isCoinbaseWallet) && (
                    <div className="hidden sm:inline-block">
                      <Web3Network />
                    </div>
                  )}

                  <Web3Status />
                </div>
              </div>
            </Container>
          ) : (
            <Container maxWidth="full" className="mx-auto">
              <div className="flex items-center justify-between gap-4 px-6">
                <div className="flex gap-4">
                  <div className="flex items-center mr-1">
                    <Image
                      src="https://raw.githubusercontent.com/Chigag-Studio/pogo-contracts-v2/302458cdfc66233e3fb2ba5e950e5214812551e0/Pogooo.svg"
                      alt="Pogo logo"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  {menu.map((node) => {
                    return <NavigationItem node={node} key={node.key} />
                  })}
                </div>

                <div className="flex items-center justify-end w-auto shadow select-none whitespace-nowrap">
                  {account && chainId && (
                    <Typography weight={700} variant="sm" className="px-2 py-5 font-bold">
                      {userEthBalance ? (
                        `${userEthBalance?.toSignificant(4)} ${NATIVE[chainId].symbol}`
                      ) : (
                        <Dots>FETCHING</Dots>
                      )}
                    </Typography>
                  )}

                  {library && (library.provider.isMetaMask || isCoinbaseWallet) && (
                    <div className="hidden sm:inline-block">
                      <Web3Network />
                    </div>
                  )}

                  <Web3Status />
                </div>
              </div>
            </Container>
          )}
        </nav>
      </header>
      <div style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }} />
    </>
  )
}

export default Desktop
