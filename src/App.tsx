import React from "react";
import { v4 as uuid } from "uuid";
import MainBoard from "./pages/main";
import RandomImage from "./pages/random";

// Global StyleSheet
import "./assets/style/index.scss";

function App() {
    const slides: any = [
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
        {
            key: uuid(),
            content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />,
        },
    ];

    return (
        <div className="main">
            <MainBoard cards={slides} />
        </div>
    );
}
export default App;
