import './Review.scss';

function Review(cont) {
    const reviewText = cont.reviewText;
    const authorPortrait = cont.authorPortrait;
    const authorName = cont.authorName;
    const authorCompany = cont.authorCompany;
    return (
        <div class="Review">
            <div class="Review__rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.825" height="21.708"
                    viewBox="0 0 22.825 21.708">
                    <path
                        d="M12,18,4.947,21.708l1.347-7.854L.587,8.292,8.473,7.146,12,0l3.527,7.146,7.886,1.146-5.706,5.562,1.347,7.854Z"
                        transform="translate(-0.587)" fill="#f6d021" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.825" height="21.708"
                    viewBox="0 0 22.825 21.708">
                    <path
                        d="M12,18,4.947,21.708l1.347-7.854L.587,8.292,8.473,7.146,12,0l3.527,7.146,7.886,1.146-5.706,5.562,1.347,7.854Z"
                        transform="translate(-0.587)" fill="#f6d021" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.825" height="21.708"
                    viewBox="0 0 22.825 21.708">
                    <path
                        d="M12,18,4.947,21.708l1.347-7.854L.587,8.292,8.473,7.146,12,0l3.527,7.146,7.886,1.146-5.706,5.562,1.347,7.854Z"
                        transform="translate(-0.587)" fill="#f6d021" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.825" height="21.708"
                    viewBox="0 0 22.825 21.708">
                    <path
                        d="M12,18,4.947,21.708l1.347-7.854L.587,8.292,8.473,7.146,12,0l3.527,7.146,7.886,1.146-5.706,5.562,1.347,7.854Z"
                        transform="translate(-0.587)" fill="#f6d021" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.825" height="21.708"
                    viewBox="0 0 22.825 21.708">
                    <path
                        d="M12,18,4.947,21.708l1.347-7.854L.587,8.292,8.473,7.146,12,0l3.527,7.146,7.886,1.146-5.706,5.562,1.347,7.854Z"
                        transform="translate(-0.587)" fill="#f6d021" />
                </svg>
            </div>
            <p class="Review__text Review__text--gray">{reviewText}</p>
            {authorPortrait && <div class="Review__portrait"><img src={authorPortrait}/></div>}
            <div class="Review__author">
                <h4 class="Review__author-name">{authorName}</h4>
                <p>{authorCompany}</p>
            </div>
        </div>
    )
};

export default Review;