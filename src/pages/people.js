import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Unsplash from '../components/unsplashList'

const PeoplePage = () => (
  <Layout>
    <SEO title="People" />
    <h2>People <small><samp>by Unsplash</samp></small></h2>
    <Unsplash
      type={'topics'}
      terms={'people'}
      orderBy={'latest'}
      orientation={null}
      color={null}
      page={1}
      perPage={30}
    />
  </Layout>
)

export default PeoplePage
