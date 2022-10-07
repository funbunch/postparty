import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      {/* <link rel="stylesheet" href="https://use.typekit.net/njb4mad.css" /> */}
      <link rel="stylesheet" href="https://use.typekit.net/njb4mad.css"></link>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'postparty',
  keywords: 'gameing, gamers',
  description: '',
}

export default Meta