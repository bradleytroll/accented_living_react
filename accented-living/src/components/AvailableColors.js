import React, { useEffect } from 'react';
import './AvailableColors.css';
import roomImage from '../images/room2.jpg';

function AvailableColors() {
    useEffect(() => {
        // Select the accent wall element
        const accentWall = document.getElementById('accentWall');

        // Select all swatches
        const swatches = document.querySelectorAll('.swatch');

        // Add a click event listener to each swatch
        swatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                const color = this.getAttribute('data-color');
                // Set the background color of the accent wall
                accentWall.style.backgroundColor = color;
            });
        });
    }, []);

    return (
        <div className="container">
            <h1>Choose Your Accent Wall Color</h1>
            <div className="room-container">
                <div className="room">
                    <img src={roomImage} alt="Living room with accent wall" className="room-image" />
                    <div className="accent-wall" id="accentWall"></div>
                </div>
            </div>
            <h2 className="color-title">Select a Behr Paint Color</h2>
            <div className="color-options">
                <div className="swatch-container">
                    <div className="swatch" data-color="#F8B5FA" style={{ backgroundColor: '#F8B5FA' }}></div>
                    <span className="swatch-label">Pink Chintz</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#F44A4E" style={{ backgroundColor: '#F44A4E' }}></div>
                    <span className="swatch-label">Wet Coral</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#EE9E89" style={{ backgroundColor: '#EE9E89' }}></div>
                    <span className="swatch-label">Ceramic Glaze</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#FDE458" style={{ backgroundColor: '#FDE458' }}></div>
                    <span className="swatch-label">Sun Shower</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#B1CF65" style={{ backgroundColor: '#B1CF65' }}></div>
                    <span className="swatch-label">Grass Cloth</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#979A63" style={{ backgroundColor: '#979A63' }}></div>
                    <span className="swatch-label">River Bank</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#2AADC4" style={{ backgroundColor: '#2AADC4' }}></div>
                    <span className="swatch-label">Riviera Paradise</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#3D5BA0" style={{ backgroundColor: '#3D5BA0' }}></div>
                    <span className="swatch-label">Enduring</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#A290CD" style={{ backgroundColor: '#A290CD' }}></div>
                    <span className="swatch-label">Garden Flower</span>
                </div>
                <div className="swatch-container">
                    <div className="swatch" data-color="#3C3C3D" style={{ backgroundColor: '#3C3C3D' }}></div>
                    <span className="swatch-label">Limousine Leather</span>
                </div>
            </div>
        </div>
    );
}

export default AvailableColors;
