import React, { useEffect } from 'react';
import './landingPage.css';
//import './cursorEffect.js';

function LandingPage() {

    useEffect(() => {
        const cursor = document.getElementById('landing_cursor');
        if (!cursor) {
            console.error('Cursor element not found');
            return;
        }

        const handlePointerMove = (e) => {
            const { clientX, clientY } = e;

            cursor.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 1500, fill: 'forwards' }
            );
        };

        document.body.addEventListener('pointermove', handlePointerMove);

        return () => {
            document.body.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <div className='landing_container'>
            <li className='landing_title'>
                <ul>L</ul>
                <ul>A</ul>
                <ul>M</ul>
                <ul>D</ul>
                <ul>O</ul>
            </li>
            <p>By Deraze Loïc</p>
            <div id='landing_cursor'></div>
        </div>
    )
}

export default LandingPage;