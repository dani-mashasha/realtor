import React from "react";


class ImagesGallery extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            imgList: this.props.imagesList.map((item,i)=> <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={i===0? "active": "normal"}></li>),
            imgDivs: this.props.imagesList.map((item,i)=>
                    <div className={i===0? "carousel-item active": "carousel-item"}>
                        <img className="d-block w-100" style={{width:"100%" ,height:"500px"}} src={"."+item} alt="slide"/>
                    </div>)
        }
    }
    render() {

        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  >
                <ol className="carousel-indicators">
                    {this.state.imgList}
                </ol>
                <div className="carousel-inner">
                    {this.state.imgDivs}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default ImagesGallery;