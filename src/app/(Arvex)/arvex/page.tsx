import Banner from '@/components/Shared/Banner/Banner'
import React from 'react'
import bannerImg from '@/app/images/sliderImages/design1.jpg'

export default function page() {
  return (
    <div>
      <Banner bannerImg={bannerImg} banner_title='ARVEX' />
    </div>
  )
}
