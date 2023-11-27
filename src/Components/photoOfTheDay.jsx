import React, { useState } from 'react';
import "./photoOfTheDay.css"
import POTDDRAFT from "../assets/POTDDRAFT.webp"

const photoOfTheDay = ({ imageUrl, altText }) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div className="imageCard">
            <h2>IMAGE OF THE DAY!</h2>
            <img src={POTDDRAFT} alt={altText} className="image" />
            <div className="commentSection">
                <label className='name'>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="title">
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label >
                <label className="comment">
                    Comment:
                    <input value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
            </div>
        </div>
    );
};

export default photoOfTheDay;