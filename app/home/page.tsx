import HeroSection from '@/components/HeroSection/page'
import React from 'react'

const HomePage = () => {
    return (
        <div className='w-full h-screen'
         style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
        }}
        >
            <HeroSection />
        </div>
    )
}

export default HomePage