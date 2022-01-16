import React from 'react'
import { CharacterSection } from '../CharacterSection/CharacterSection'
import { HeroSection } from '../HeroSection/HeroSection'
import { StoreSection } from '../StoreSection/StoreSection'

export const HomePage: React.FC = () => {
    return (
        <main>
            <HeroSection />
            <CharacterSection />
            <StoreSection />
        </main>

    )
}
