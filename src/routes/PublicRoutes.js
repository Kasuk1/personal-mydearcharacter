import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from '../components/layout/Footer/Footer';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { HomePage } from '../views/Home/HomePage/HomePage';
import { CharactersPage } from '../views/Characters/CharactersPage/CharactersPage';
import { BoxesPage } from '../views/Boxes/BoxesPage/BoxesPage';
import { CoinsPage } from '../views/Coins/CoinsPage/CoinsPage';
import { CharacterDetail } from '../views/Characters/CharacterDetail/CharacterDetail';

export const PublicRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path="characters" element={<CharactersPage />}></Route>
                <Route path="characters/:characterId" element={<CharacterDetail />}></Route>
                <Route path="coins" element={<CoinsPage />}></Route>
                <Route path="boxes" element={<BoxesPage />}></Route>
                <Route path="*" element={<p>Not found</p>}></Route>
            </Routes>

            <Footer />
        </>

    )
}
