import React from "react";
import '../JikanGallery/JikanGallery.scss';
import {Link} from "react-router-dom";
import {FigCaption} from "../../../styles/elements/figcaption.elements";

export function CategoryGallery(props) {

  return (
    <div className="c-jikanGallery">
      <div className="row">
        {props.categories.map((item, index) => {
          if (item.attributes.image !== null) {
            return (<div className={index < 3 ? "col-lg-4 col-sm-6 ": "col-lg-3 col-md-4"} key={index}>


              <figure className="c-jikanGallery__item">
                <a href={'/animes/'+ item.attributes.slug}><img
                  src={item.attributes.image.original}
                  className={index < 3 ? "c-jikanGallery__img" +
                    " c-jikanGallery__img--max" : "c-jikanGallery__img"} alt={item.attributes.title}/></a>
                <FigCaption
                  className={index < 3 ? "c-jikanGallery__title c-jikanGallery__title--max":"c-jikanGallery__title"}>{item.attributes.title}</FigCaption>
              </figure>

            </div>);
          }
        })}
      </div>
    </div>
  );
}