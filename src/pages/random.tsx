import React, { useEffect, useState } from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

// Create a persistent array to store used indices
var CloudusedIndexes: any = [];
const CloudImage = (props: CDImageInterface) => {
    const { cloud_name, tag } = props;

    // Declare the state variable `image` and a function `setImage` to update it
    const [image, setImage]: any = useState(null);

    // The effect hook is executed when the component is first rendered and after any re-render caused by changes in the state
    useEffect(() => {
        const fetchData = async () => {
            // Fetch the list of images from Cloudinary
            const response = await fetch(
                `https://res.cloudinary.com/${cloud_name}/image/list/${tag}.json`
            );
            const data = await response.json();

            // Generate a random index from the list of images
            let randomIndex = Math.floor(Math.random() * data.resources.length);

            // Check if this random index has already been used
            while (CloudusedIndexes.includes(randomIndex)) {
                // If the random index has been used, generate a new random index
                randomIndex = Math.floor(Math.random() * data.resources.length);

                // When the array of used indexes fills up, empty it out
                if (CloudusedIndexes.length === data.resources.length - 1) {
                    CloudusedIndexes = [];
                }
            }

            // Store this new random index in the array of used indexes
            CloudusedIndexes.push(randomIndex);

            // Set the state with the randomly selected image
            const randomImage = data.resources[randomIndex];
            setImage(randomImage);
        };
        fetchData();
    }, [cloud_name, tag]);

    if (image) {
        // Create a new CloudinaryImage instance with the selected image and cloud name
        const myImage = new CloudinaryImage(image.public_id, {
            cloudName: `${cloud_name}`,
        });

        // Set the alt attribute for the image
        const altId = `${image.public_id}`;
        return <AdvancedImage cldImg={myImage} alt={altId} />;
    } else {
        // Return null while the image is not yet fetched
        return null;
    }
};

// var AnimeusedIndexes: any = [];
const AnimeImage = (props: AIImageInterface) => {
    const { cloud_name, tag } = props;

    // Set the alt attribute for the image
    return <img src={cloud_name} alt={tag} />;
};

// Export the RandomImage component
export { CloudImage, AnimeImage };
