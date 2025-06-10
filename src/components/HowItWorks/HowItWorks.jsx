import React, { useEffect, useRef, useState } from "react";
import { cardsData } from "../../utils/constants/cardsData";

const HowItWorks = () => {
    const categories = ["All", "Nutrition", "Physical activity", "Restorative sleep", "Stress management", "Social connection", "Substance abuse"];

    const [category, setCategory] = useState(categories[0]);

    let cardsCount = useRef(0);

    const moveCards = (val) => {
        const getElement = document.getElementsByClassName("how-it-works__cards");

        getElement[0].scrollLeft = val < 0 ? getElement[0].scrollLeft - 700 : getElement[0].scrollLeft + 700;
    };

    return (
        <section className="how-it-works">
            <div className="container">
                <div className="how-it-works__header">
                    <h2>
                        <span>HOW IT WORKS?</span>
                        Lifestyle as medicine: <span className="text-accent">The six pillars</span>
                    </h2>

                    {/* if the card count is greater than 4, then show the controls */}
                    {(category === "All" || cardsCount.current > 4) && (
                        <div className="how-it-works__nav">
                            <button
                                type="button"
                                className="how-it-works__nav-button"
                                aria-label="Previous"
                                onClick={() => {
                                    moveCards(-1);
                                }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                className="how-it-works__nav-button"
                                aria-label="Next"
                                onClick={() => {
                                    moveCards(1);
                                }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="how-it-works__categories">
                    {categories?.map((data, index) => {
                        return (
                            <button
                                key={index}
                                className="how-it-works__category"
                                style={data === category ? { backgroundColor: "#0369a1", color: "#fff" } : { backgroundColor: "transparent" }}
                                type="button"
                                onClick={() => {
                                    cardsCount.current = 0;

                                    setCategory(data);
                                }}>
                                {data}
                            </button>
                        );
                    })}
                </div>

                <div className="how-it-works__cards">
                    {cardsData.map((card) => {
                        if (card.title === category || category === "All") {
                            cardsCount.current += 1;

                            return (
                                <div key={card?.id}>
                                    <div className="how-it-works__card">
                                        <div className="how-it-works__card-image">
                                            <img src={card?.image} alt={card?.title} />
                                        </div>

                                        <div className="how-it-works__card-content">
                                            <h3>{card?.title}</h3>

                                            <div className="how-it-works__card-duration">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M10 6.66667V10L12.5 12.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>

                                                <span>{card?.duration}</span>

                                                <span>{card?.unit}</span>
                                            </div>

                                            <p>{card?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
