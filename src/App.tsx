import React from "react";
import { v4 as uuid } from "uuid";
import MainBoard from "./pages/main";
import { CloudImage, AnimeImage } from "./pages/random";

// Global StyleSheet
import "./assets/style/index.scss";

function App() {
    const slides: any = [
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <CloudImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
    ];

    // Anime Image URL:: https://pic.re/image
    const animeSlide: any = [
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="1"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="2"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="3"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="4"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="5"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="7"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="8"
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <AnimeImage
                    cloud_name="https://narutodb.xyz/api/akatsuki/"
                    tag="9"
                />
            ),
        },
    ];

    return (
        <div className="main">
            <MainBoard cards={animeSlide} />
        </div>
    );
}
export default App;
