import React, { useCallback } from 'react';

import ArticleData from './data.json';
import './Articles.scss';

import Article from '../ArticlePreview/ArticlePreview';

function Articles () {
    // can either have it that it orders by date then puts first 2 articles in featured section
    // or can have it so that data.json has a featured item of true/false and any that are true get put into featured section
    // or can have so that featured get default and if less than 2 featured, adds from most recent blog posts
    return(
        <div className='Articles'>
            <div className='Articles__wrapper Articles__wrapper--light'>
                <div className='Articles__container'>
                    <ul className='Articles__featured'>

                    </ul>
                    <div className='Articles__articles'>
                        <ul className='Articles__grid'>

                        </ul>
                        <div className='Articles__load-more'>Load More</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Articles;