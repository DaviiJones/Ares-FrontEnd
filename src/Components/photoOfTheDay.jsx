import React, { useState } from 'react';

const photoOfTheDay = ({ imageUrl, altText }) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div className="imageCard">
            <h2>IMAGE OF THE DAY!</h2>
            <img src={imageUrl} alt={altText} className="image" />
            <div className="commentSection">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Comment:
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
            </div>
        </div>
    );
};

export default photoOfTheDay;