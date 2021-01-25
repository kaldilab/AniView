import React, { useEffect } from 'react'

import UnsplashApi from './unsplashApi'
import "./animate.min.css"

const UnsplashList = (props) => {
  // Intersection Observer
  useEffect(
    () => {
      const options = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      }
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            const image = entry.target.getElementsByTagName('img')[0]
            const aniClass = entry.target.dataset.ani
            image.src = image.dataset.src
            entry.target.classList.add('animate__' + aniClass)
          }
        })
      }, options)
      const card = document.querySelectorAll('.card')
      card.forEach(target => {
        intersectionObserver.observe(target)
      })
    }
  )

  // unsplash
  const imageType = props.type
  const imageTerms = props.terms
  const imageOrderBy = props.orderBy
  const imageOrientation = props.orientation
  const imageColor = props.color
  const imagePage = props.page
  const imagePerPage = props.perPage
  const UI = UnsplashApi(imageType, imageTerms, imageOrderBy, imageOrientation, imageColor, imagePage, imagePerPage)
  const unsplashImages = UI[0]
  const unsplashLoading = UI[1]

  // animation
  const animation = ['backInLeft', 'backInRight', 'backInUp', 'bounceIn', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'rotateIn', 'rotateInUpLeft', 'rotateInUpRight', 'zoomIn', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInLeft', 'slideInRight', 'slideInUp', 'bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'tada', 'heartBeat']
  return (
    <>
      {
        (unsplashLoading)
          ?
          <div
            style={{
              padding: '30vh 0',
              textAlign: 'center'
            }}>
            Loading...
          </div>
          :
          <div className="card-columns">
            {
              (unsplashImages.length > 0)
                ?
                unsplashImages
                  .map((item, index) => {
                    return (
                      <div className="card animate__animated" data-ani={animation[index]} key={index}>
                        <div className="card-header">
                          <img data-src={item.urls.regular} className="card-img-top" alt={item.title} />
                          <h5 className="card-title">Animation : {animation[index]}</h5>
                          <h5 className="card-subtitle">{item.id}</h5>
                          <p className="card-text">{item.description ? item.description : 'There is no description.'}</p>
                        </div>
                      </div>
                    )
                  })
                :
                <div>이미지가 없습니다.</div>
            }
          </div>
      }
    </>
  )
}

export default UnsplashList