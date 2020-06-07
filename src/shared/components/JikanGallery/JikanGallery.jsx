import React from "react";
import './JikanGallery.scss';
import {FigCaption} from "../../../styles/elements/figcaption.elements";
import {Paginator} from 'primereact/paginator';

export function JikanGallery(props) {
  return (

    <div className="c-jikanGallery">
      <div className="row">
        {props.jikans.map((item,index)=>
          <div className={index < 3 ? "col-lg-4 col-sm-6 ": "col-lg-3 col-md-4"} key={index}>
            <figure className="c-jikanGallery__item" >
              {item && item.attributes && item.attributes.posterImage && <a href={"https://kitsu.io/anime/" + item.id}>
                <img className={index < 3 ? "c-jikanGallery__img" +
                " c-jikanGallery__img--max" : "c-jikanGallery__img"}
                      src={item.attributes.posterImage.original} alt={item.attributes.titles}/></a>}
              {item && item.attributes && item.attributes.titles && <FigCaption className={index < 3 ? "c-jikanGallery__title c-jikanGallery__title--max":"c-jikanGallery__title"}>{item.attributes.titles.en_jp}</FigCaption>}
            </figure>
          </div>
        )}
      </div>

      <Paginator className="b-primereact-paginator" first={props.paginationInfo.first} rows={props.paginationInfo.rows} totalRecords={props.totalRecords} onPageChange={props.fnChangePage}/>
    </div>

  )
}