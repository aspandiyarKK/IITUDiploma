import React, { useState } from 'react'
import cn from 'classnames'
import AppLink from '../AppLink'
import Group from './Group'
import Theme from '../Theme'
import Image from '../Image'
import SocialMedia from '../SocialMedia'

import styles from './Footer.module.sass'

const Footers = ({ navigation }) => {
  return (
    <footer className={styles.footer}>
      <div className={cn('container', styles.container)}>
        <div className={styles.row}>
          <div className={styles.col} aria-hidden="true">
            <AppLink className={styles.logo} href="/">
              <Image
                size={{ width: '92px', height: '92px' }}
                className={styles.pic}
                src={navigation['logo']?.imgix_url}
                srcDark={navigation['logo']?.imgix_url}
                alt="Logo"
                objectFit="cntain"
              />
            </AppLink>
            <div className={styles.info}>The New Creative Economy.</div>
            <div className={styles.version}>
              <div className={styles.details}>Dark theme</div>
              <Theme className="theme-big" />
            </div>
          </div>
          <div className={styles.col}>
            <Group className={styles.group} item={navigation?.['menu']} />
          </div>
          <div className={styles.col}>
            <AppLink href={`https://www.instagram.com/brain_catharsis`}>
              <p className={styles.category}>About US</p>
            </AppLink>
            <AppLink href={`https://github.com/aspandiyarKK/IITUDiploma`}>
              <p className={styles.text}>Documentation</p>
            </AppLink>
            <AppLink href={`https://x.com/iitukz`}>
              <p className={styles.text}>Contact Us</p>
            </AppLink>
            <SocialMedia className={styles.form} />
            <AppLink
              href={`https://www.linkedin.com/in/elnaz-almasuly-017354230/`}
            >
              <button
                aria-hidden="true"
                className={cn('button', styles.button)}
              >
                Main developer
              </button>
            </AppLink>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.copyright} aria-hidden="true">
          <span className={styles.cosmicGroup}>
            <p className={styles.powered}>Powered by </p>
            <a href="https://www.cosmicjs.com">
              <Image
                className={styles.cosmic}
                size={{ width: '110px', height: '90px' }}
                src="/cosmic.svg"
                alt="Cosmic Logo"
                objectFit="contain"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footers
