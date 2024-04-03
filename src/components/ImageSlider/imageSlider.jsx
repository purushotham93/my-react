import { useEffect, useState } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    async function fetchImages(url) {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        setImages(data);
    }

    function handlePrev() {
        setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : images.length);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length ? 1 : currentSlide + 1);
    }
    useEffect(() => {
        if (url !== "") {
            fetchImages(url);
        }
    }, [url]);
    return (
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={handlePrev}
                className="arrow arrow-left"
            ></BsArrowLeftCircleFill>
            {[...images].map((image, index) => {
                return (
                    <img
                        key={image.id}
                        src={image.download_url}
                        alt={image.author}
                        className={
                            currentSlide === index + 1
                                ? "current-image"
                                : "current-image hide-image"
                        }
                    ></img>
                );
            })}
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            ></BsArrowRightCircleFill>
            <span className="circle-indicator">
                {images && images.length ? (
                    images.map((_, index) => {
                        return <button key={index} className={currentSlide === index + 1
                            ? "current-indicator"
                            : "current-indicator hide-current-indicator"} onClick={() => setCurrentSlide(index + 1)}></button>;
                    })
                ) : (
                    <></>
                )}
            </span>
        </div>
    );
}
