import React, {useEffect, useState} from "react";
import axios from 'axios';
import {environment} from "../../environments/environment";
import {JikanGallery} from "../../shared/components/JikanGallery/JikanGallery";
import {JikanSearch} from "../../shared/components/JikanSearch/JikanSearch";

export function Jikan() {
const [jikans, setJikans] = useState([]);
const [filteredJikans, setFilteredJikans] = useState([])

  useEffect(()=> {
    axios.get(environment.url).then(res=> {
        setJikans(res.data.data);
        setFilteredJikans(res.data.data);
      }
    )
  }, [])
// Siempre para el useEffect debes colocar array vacio al final para detener la propagacion del mismo.

  function jikansSearch(filteredValues) {
    let jikanFilter = [];
    jikanFilter = jikans.filter( (item) => {
      if (item.attributes.titles.en_jp !== "" && filteredValues.name !== "") {
        console.log(item.attributes.titles.en_jp);
        return item.attributes.titles.en_jp.toLowerCase().includes(filteredValues.name.toLowerCase());
      }
      if (filteredValues.name == "") return true;
    });
    console.log(jikanFilter);
    setFilteredJikans(jikanFilter);
  }


  return (
    <div className="justify-content-center">
      <img src="https://la-space.sfo2.cdn.digitaloceanspaces.com/main-site/logo_transparente.png" alt="" className="b-img-primary"/>
      <JikanSearch onSearch={jikansSearch}/>
      <JikanGallery jikans={filteredJikans}/>
    </div>
  );
}