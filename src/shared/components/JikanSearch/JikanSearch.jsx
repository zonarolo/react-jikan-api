import React from 'react';
import './JikanSearch.scss';
import { useForm } from "react-hook-form";

export function JikanSearch(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    props.onSearch(data);
  }

  return(
    <div className="c-jikanSearch">
      <form onSubmit={handleSubmit(onSubmit)} className="c-jikanSearch__form">


          <input className="c-jikanSearch__input" name="name" placeholder="Name" ref={register}  />

        <select className="c-jikanSearch__input" name="category" ref={register}>

          <option value="">Categoria</option>
          {props.categories && props.categories.map((item, index) =>
            <option value={item.attributes.slug} key={index}>{item.attributes.title}</option>
          )};
        </select>

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="c-jikanSearch__submit" type="submit" />
      </form>
    </div>
  );
}