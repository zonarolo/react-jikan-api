import React from "react";
import "./SponsorsGallery.scss";

export function SponsorsGallery(props){

  return(
    <div className="c-sponsor-gallery">
      <h1 className="c-sponsor-gallery__title">Sponsors</h1>
      <div className="row">
        {props.sponsor.map((item,index)=>{
          console.log(item.attributes.siteName)
          return( <div className= "col-lg-3 col-md-6 col-sm-12">
              <div className="c-sponsor-gallery__item">
                {item.attributes && !item.attributes.logo ? <h3 className="c-sponsor-gallery__name">{item.attributes.siteName}</h3>: <img className="c-sponsor-gallery__img" src={item.attributes.logo.original} alt="sponsor-img"/>}
              </div>
            </div>
          )})}
      </div>
    </div>
  )
}
