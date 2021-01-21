//import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Comet Stone.</h1>
      <h2>様々な葛藤の中で生きていくのだ。</h2>

      <div className="explanation">
        <h3>About　</h3>
        <p>そういうことですよ</p>
      </div>
    </div>
  </>
)
