import React from 'react';
import './LoadMoreBtn.css';

/**
 * Component to load more movies at the end of scroll
 * @param text
 * @param onClick
 * @returns {*}
 * @constructor
 */
const LoadMoreBtn = ({ text, onClick }) => (
    <div className="mg-loadmorebtn" onClick={onClick}>
        <p>{text}</p>
    </div>
)

export default LoadMoreBtn;
