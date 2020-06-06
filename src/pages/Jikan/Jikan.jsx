import React, {useEffect, useState} from "react";
import axios from 'axios';
import {environment} from "../../environments/environment";
import {JikanGallery} from "../../shared/components/JikanGallery/JikanGallery";
import {JikanSearch} from "../../shared/components/JikanSearch/JikanSearch";

export function Jikan() {
const [jikans, setJikans] = useState([]);
const [categories, setCategories] = useState([]);

  useEffect(()=> {

    axios.get(environment.url + 'categories?page[limit]=200').then(res=> {
        setCategories(res.data.data);
      }
    )
    axios.get(environment.url + 'anime?page[limit]=19').then(res=> {
        setJikans(res.data.data);
      }
    );


  }, [])
// Siempre para el useEffect debes colocar array vacio al final para detener la propagacion del mismo.



  const jikansSearch = (filteredValues) => {
    const filterUrl = filteredValues.name.length ? '&filter[text]=' + filteredValues.name : '';

    axios.get(environment.url + 'anime?page[limit]=19' + (filteredValues.category !== "" && '&filter[categories]='+filteredValues.category) + filterUrl).then(res=> {
        setJikans(res.data.data);
      }
    )

  }

  // const animeSearch = (filterValues) => {
  //   console.log(filterValues)
  //   axios.get(environment.url + 'anime?page[limit]=19' + (filterValues.category !== "" && '&filter[categories]='+filterValues.category) + (filterValues.name !== "" ? '&filter[text]=' + filterValues.name : "")).then(res => {
  //     setAnimes(res.data.data)
  //   });
  // }

  return (
    <div className="justify-content-center">
      <JikanSearch onSearch={jikansSearch} categories={categories}/>
      <JikanGallery jikans={jikans}/>
    </div>
  );
}