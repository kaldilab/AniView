import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Unsplash from '../components/unsplashList'

const ArtsCulturePage = () => (
  <Layout>
    <SEO title="Arts&Culture" />
    <h2>Arts&Culture <small><samp>by Unsplash</samp></small></h2>
    <Unsplash
      type={'topics'}
      terms={'arts-culture'}
      orderBy={'latest'}
      orientation={null}
      color={null}
      page={1}
      perPage={30}
    />
  </Layout>
)

export default ArtsCulturePage
