import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Unsplash from '../components/unsplashList'

const NaturePage = () => (
  <Layout>
    <SEO title="Nature" />
    <h2>Nature <small><samp>by Unsplash</samp></small></h2>
    <Unsplash
      type={'topics'}
      terms={'nature'}
      orderBy={'latest'}
      orientation={null}
      color={null}
      page={1}
      perPage={30}
    />
  </Layout>
)

export default NaturePage
