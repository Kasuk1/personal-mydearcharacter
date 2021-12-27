import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from '../components/layout/Footer/Footer';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { BoxesPage } from '../views/Boxes/BoxesPage/BoxesPage';
import { CharactersPage } from '../views/Characters/CharactersPage/CharactersPage';
import { CoinsPage } from '../views/Coins/CoinsPage/CoinsPage';
import { HomePage } from '../views/Home/HomePage/HomePage';

export const PublicRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path="characters" element={<CharactersPage />}></Route>
                <Route path="characters/:characterId"></Route>
                <Route path="coins" element={<CoinsPage />}></Route>
                <Route path="boxes" element={<BoxesPage />}></Route>
                <Route path="*" element={<p>Not found</p>}></Route>
            </Routes>

            <Footer />
        </>

    )
}
