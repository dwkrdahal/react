import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'; 

function Slider() {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active slider-bg-position" style={{ backgroundImage: "url('img/image-1.jpg')" }}>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Villa</h2>
                    </div>
                </div>
                <div className="carousel-item slider-bg-position" style={{ backgroundImage: "url('img/image-2.jpg')" }}>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Baunglow</h2>
                    </div>
                </div>
                <div className="carousel-item slider-bg-position" style={{ backgroundImage: "url('img/image-3.jpg')" }}>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Hotel</h2>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
        </div>
    );
}

export default Slider;
