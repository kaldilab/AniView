import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Unsplash from '../components/unsplashList'

const TechnologyPage = () => (
  <Layout>
    <SEO title="Technology" />
    <h2>Technology <small><samp>by Unsplash</samp></small></h2>
    <Unsplash
      type={'topics'}
      terms={'technology'}
      orderBy={'latest'}
      orientation={null}
      color={null}
      page={1}
      perPage={30}
    />
  </Layout>
)

export default TechnologyPage
