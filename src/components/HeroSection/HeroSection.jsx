import React, { useRef } from "react";
import { useNavigate } from "react-router";

const HeroSection = () => {
    const navigate = useNavigate();

    const column1Images = [
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=700&fit=crop",
    ];

    const column2Images = [
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&h=700&fit=crop",
    ];

    const formValues = useRef({
        problems: null,
        location: null,
        insurance: null,
    });

    const processRequest = () => {
        navigate(`/details/${formValues.current.problems}/${formValues.current.location}/${formValues.current.insurance}`);
    };

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__grid">
                    <div className="hero__images">
                        <div className="image-columns__col image-columns__col--down">
                            {[...column1Images, ...column1Images].map((src, index) => (
                                <div className="image-columns__item" key={`col1-${index}`}>
                                    <img src={src} alt="Lifestyle medicine" loading="lazy" />
                                </div>
                            ))}
                        </div>

                        <div className="image-columns__col image-columns__col--up">
                            {[...column2Images, ...column2Images].map((src, index) => (
                                <div className="image-columns__item" key={`col2-${index}`}>
                                    <img src={src} alt="Lifestyle medicine" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero__content">
                        <h1>
                            Book an appointment with
                            <span className="highlight"> lifestyle medicine </span> experts
                        </h1>
                        <p>
                            Find a board-certified doctor in your network to see if you're a candidate for reversing diabetes, hypertension, obesity,
                            and more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="search-bar">
                <div className="search-bar__fields">
                    <div className="search-bar__field">
                        <span className="search-bar__icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>

                        <input
                            type="text"
                            placeholder="Condition, procedure, specialty..."
                            onChange={(e) => {
                                formValues.current.problems = e.target.value;
                            }}
                        />
                    </div>

                    <div className="search-bar__field">
                        <span className="search-bar__icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10 18.3333C10 18.3333 16.6667 13.3333 16.6667 8.33333C16.6667 4.65143 13.6819 1.66666 10 1.66666C6.31811 1.66666 3.33334 4.65143 3.33334 8.33333C3.33334 13.3333 10 18.3333 10 18.3333Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <input
                            type="number"
                            placeholder="City, state, or zipcode"
                            onChange={(e) => {
                                formValues.current.location = e.target.value;
                            }}
                        />
                    </div>

                    <div className="search-bar__field">
                        <span className="search-bar__icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M14.1667 17.5H5.83333C3.99238 17.5 2.5 16.0076 2.5 14.1667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H14.1667C16.0076 2.5 17.5 3.99238 17.5 5.83333V14.1667C17.5 16.0076 16.0076 17.5 14.1667 17.5Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M7.5 10H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>

                        <input
                            type="text"
                            placeholder="Insurance carrier"
                            onChange={(e) => {
                                formValues.current.insurance = e.target.value;
                            }}
                        />
                    </div>
                </div>

                <button
                    type="button"
                    className="search-bar__button"
                    onClick={() => {
                        processRequest();
                    }}>
                    Find now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
