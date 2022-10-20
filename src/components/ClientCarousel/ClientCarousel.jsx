import './ClientCarousel.scss';

import ReviewMedia1 from './Assets/c-review--1.png'
import ReviewMedia2 from './Assets/c-review--2.png'
import ReviewMedia3 from './Assets/c-review--3.png'
import ReviewMedia4 from './Assets/c-review--4.png'

function ClientCarousel() {
  return (
    <div class="ClientCarousel">
      <div class="ClientCarousel__wrapper ClientCarousel__wrapper--dark">
        <div class="ClientCarousel__container">
          <h2 class="ClientCarousel__eyebrow ">Testimonials</h2>
          <h3 class="ClientCarousel__title ClientCarousel__title--light ClientCarousel__title--large">What Our <br />Clients Saying</h3>
        </div>
        <div class="ClientCarousel__carousel">
          <div class="ClientCarousel__arrows" data-glide-el="controls">
            <div class="ClientCarousel__arrow--left" data-glide-dir="<"></div>
            <div class="ClientCarousel__arrow--right" data-glide-dir=">"></div>
          </div>
          <div class="ClientCarousel__reviews glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <div class="c-review">
                  <div class="c-review__rating">
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
                  <p class="c-review__text--gray">
                    A digital agency is a business you hire to outsource your digital marketing
                    efforts, instead of handling in-house. They can provide your business with a
                    variety of digital solutions to promote your product or service online and
                    help you. A digital agency is a business you hire to outsource your digital
                    marketing efforts.
                  </p>
                  <div class="c-review__portrait"><img src={ReviewMedia1} /></div>
                  <div class="c-review__author">
                    <h4>Alan Martí</h4>
                    <p>Meta Inc.</p>
                  </div>
                </div>
              </li>
              <li class="glide__slide">
                <div class="c-review">
                  <div class="c-review__rating">
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
                  <p class="c-review__text--gray">
                    Provide your business with a variety of digital solutions to promote your
                    product or service online.
                  </p>
                  <div class="c-review__portrait"><img src={ReviewMedia2} /></div>
                  <div class="c-review__author">
                    <h4>Richardo Kann</h4>
                    <p>Photogram</p>
                  </div>
                </div>
              </li>
              <li class="glide__slide">
                <div class="c-review">
                  <div class="c-review__rating">
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
                  <p class="c-review__text--gray">
                    Outsource your digital marketing efforts, instead of handling in-house.
                    They can provide your business with a variety.
                  </p>
                  <div class="c-review__portrait"><img src={ReviewMedia3} /></div>
                  <div class="c-review__author">
                    <h4>Graham Griffiths</h4>
                    <p>Twitor</p>
                  </div>
                </div>
              </li>
              <li class="glide__slide">
                <div class="c-review">
                  <div class="c-review__rating">
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
                  <p class="c-review__text--gray">
                    Promote your product or service online and help you hit your
                    marketing goals and grow your business.
                  </p>
                  <div class="c-review__portrait"><img src={ReviewMedia4} /></div>
                  <div class="c-review__author">
                    <h4>Maria Trofimova</h4>
                    <p>Whochat</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="ClientCarousel__scroll" data-glide-el="controls[nav]">
            <div class="ClientCarousel__dot" data-glide-dir="=0"></div>
            <div class="ClientCarousel__dot" data-glide-dir="=1"></div>
            <div class="ClientCarousel__dot" data-glide-dir="=2"></div>
            <div class="ClientCarousel__dot" data-glide-dir="=3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientCarousel;
