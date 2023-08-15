import React from "react";
import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";

function MainBoard(props: any) {
    const { cards } = props;
    const [slideIndex, setSlideIndex]: any = React.useState(null);

    const filterSlides = cards.map((element: any, index: number) => {
        return {
            ...element,
            onClick: () => {
                setSlideIndex(index);
            },
        };
    });

    const [slides]: any = React.useState(filterSlides);

    return (
        <div>
            <Carousel
                slides={slides}
                goToSlide={slideIndex}
                offsetRadius={10}
                showNavigation={true}
                animationConfig={config.gentle}
            />
        </div>
    );
}

export default MainBoard;
