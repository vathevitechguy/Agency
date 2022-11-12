import React from 'react';

import './ArticlePreview.scss';

function Article(props, { featured }) {
    const articlePreLink = props.articlePreLink;
    const articlePreImg = props.articlePreImg;
    const articlePreType = props.articlePreType;
    const articlePreName = props.articlePreName;
    const articlePreDate = props.articlePreDate;

    return (
        <div className={`ArticlePreview ${(featured = true) ? "ArticlePreview--featured" : ""}`}>
            {articlePreImg &&
                <a class="ArticlePreview__img" href={articlePreLink}>
                    <img src={articlePreImg} />
                </a>
            }
            <p class="ArticlePreview__type ArticlePreview__type--large">{articlePreType}</p>
            <h4 class={`ArticlePreview__name ${(featured = true) ? "ArticlePreview__name--featured" : ""}`}>
                {articlePreName}
            </h4>
            <p class="ArticlePreview__date ArticlePreview__date--gray">{articlePreDate}</p>
        </div>
    )
};

export default Article;