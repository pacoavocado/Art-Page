import React from 'react';

export default function About() {
    return (
        <div class="center">
            <img class="aboutPic" src={process.env.PUBLIC_URL + '/assets/images/Pic1 (1).jpg'} alt='Pic1' />
            <p id='aboutPerson'>
                stuff about the person
            </p>
            <a id='proffesionalLink' href=''>
                outside link
            </a>
        </div>
    );
}