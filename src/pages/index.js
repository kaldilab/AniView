import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Unsplash from '../components/unsplashList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Home - Current Events <small><samp>by Unsplash</samp></small></h2>
    <Unsplash
      type={'topics'}
      terms={'current-events'}
      orderBy={'latest'}
      orientation={null}
      color={null}
      page={1}
      perPage={30}
    />
  </Layout>
)

export default IndexPage
