import React from 'react';
import './JikanSearch.scss';
import { useForm } from "react-hook-form";

export function JikanSearch(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    props.onSearch(data);
  }

  return(
    <div className="c-jikanSearch">
      <form onSubmit={handleSubmit(onSubmit)} className="c-jikanSearch__form">

        <label className="c-jikanSearch__label" htmlFor="name">Name
          <input className="c-jikanSearch__input" id="name" name="name" ref={register}  />
        </label>

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="c-jikanSearch__submit" type="submit" />
      </form>
    </div>
  );
}