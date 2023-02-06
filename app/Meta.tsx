import Head from "next/head"
import { MetaTypes } from "../types"

const Meta = ({title, keywords, description}: MetaTypes) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Digital Impact Builders',
  keywords: 'web development, programming, digital solution',
  description: 'DIB is a platform to provide digital services to those in need'
}

export default Meta