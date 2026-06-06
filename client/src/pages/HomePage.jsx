import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import HubModules from '../components/HubModules'
import FeaturedEquipment from '../components/FeaturedEquipment'
import HubStats from '../components/HubStats'
import CTASection from '../components/CTASection'

const HomePage = () => (
    <>
        <HeroSection />
        <HubModules />
        <FeaturedEquipment />
        <HubStats />
        <CTASection/>
        <Footer/>
    </>
)

export default HomePage