import React from 'react';
import './CompNewsletter.scss';

export function CompNewsletter(props) {
  return(
    <div className="c-compnewsletter">
      <div className="row">
        {props.news.map((item, index) => {
        return <div className={index == 0 ? "col-12" : "col-6"}>
          <div className="c-compnewsletter__item">
            {item.attributes && item.attributes.posterImage && item.attributes.posterImage.original &&
            <img src={item.attributes.posterImage.original} alt={item.attributes.canonicalTitle} className="c-compnewsletter__img"/>}
            {item.attributes && item.attributes.canonicalTitle && <h3 className="c-compnewsletter__title">{item.attributes.canonicalTitle}</h3>}
            {item.attributes && item.attributes.updatedAt && <p className="c-compnewsletter__date">{item.attributes.updatedAt}</p>}
            {item.attributes && item.attributes.synopsis && <p className="c-compnewsletter__desc">{item.attributes.synopsis}</p>}
          </div>
          </div>;
        }).splice(0, 3)}
      </div>
    </div>
  )
}
