import { t } from '@lingui/macro'
import { Trans, useLingui } from '@lingui/react'
// import { ChainId } from '@sushiswap/core-sdk'
import HeadlessUIModal from 'app/components/Modal/HeadlessUIModal'
import NavLink from 'app/components/NavLink'
import Typography from 'app/components/Typography'
import features from 'app/config/features'
import { NETWORK_LABEL } from 'app/config/networks'
import { Feature } from 'app/enums'
// import { SUPPORTED_NETWORKS } from 'app/modals/NetworkModal'
import { useActiveWeb3React } from 'app/services/web3'
// @ts-ignore TYPE NEEDS FIXING
// import cookie from 'cookie-cutter'
// import Image from 'next/image'
import React, { FC, Fragment } from 'react'

interface NetworkGuardProps {
  feature: Feature
  asModal?: boolean
}

const Component: FC<NetworkGuardProps> = ({ children, feature, asModal = true }) => {
  const { i18n } = useLingui()
  const { chainId, library, account } = useActiveWeb3React()

  const link = (
    <NavLink href="/swap">
      <a className="text-blue focus:outline-none">{i18n._(t`home page`)}</a>
    </NavLink>
  )

  const supportedNetworks = Object.entries(features).reduce<string[]>((acc, [k, v]) => {
    if (v.includes(feature)) {
      acc.push(k)
    }

    return acc
  }, [])

  const content = (
    <div className="flex justify-center lg:mt-[200px]">
      <div className="flex flex-col justify-center gap-5 p-4 mt-10 lg:mt-0">
        <Typography variant="h1" className="max-w-2xl text-center text-white" weight={700}>
          {/*@ts-ignore TYPE NEEDS FIXING*/}
          {i18n._(t`This feature is not yet supported on the ${NETWORK_LABEL[chainId]} network`)}
        </Typography>
        <Typography className="text-center max-w-[248px] mx-auto">
          <Trans id="Either return to the {link}" values={{ link }} components={Fragment} />{' '}
          {i18n._(t`or change to an available network`)}
        </Typography>
      </div>
    </div>
  )

  if (!asModal) {
    // @ts-ignore TYPE NEEDS FIXING
    if (!!account && !features[chainId].includes(feature)) {
      return content
    }

    return <>{children}</>
  }

  return (
    <>
      <HeadlessUIModal.Controlled
        // @ts-ignore TYPE NEEDS FIXING
        isOpen={!!account && !features[chainId]?.includes(feature)}
        onDismiss={() => null}
        transparent={true}
      >
        {content}
      </HeadlessUIModal.Controlled>
      {children}
    </>
  )
}

type NetworkGuard = (feature: Feature, renderChildren?: boolean) => FC
const NetworkGuard: NetworkGuard = (feature: Feature, renderChildren = true) => {
  if (!renderChildren) {
    return ({ children }) => (
      <Component feature={feature} asModal={false}>
        {children}
      </Component>
    )
  }

  return ({ children }) => <Component feature={feature}>{children}</Component>
}

export default NetworkGuard
