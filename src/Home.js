import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazonimage"
      />
      <div className="home-row">
        <Product
          id="12345"
          title="the lean startup:how constat innovation creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
        />
        <Product
          id="7398127398"
          title="Test Title"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="7398127398"
          title="Test Title"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
        />
        <Product
          id="7398127398"
          title="Test Title"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
        />
        <Product
          id="7398127398"
          title="Test Title"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="12345"
          title="the lean startup:how constat innovation creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
