import React, {useEffect, useState} from "react";
import {environment} from "../../environments/environment";
import axios from 'axios';
import {CompNewsletter} from "../../shared/components/CompNewsletter/CompNewsletter"


export function Newsletter() {
  const [newsletter, setNewsletter] = useState([]);

  useEffect( () => {
    axios.get(environment.url + 'anime?sort=-updatedAt').then(res => {
      setNewsletter(res.data.data);
    })
  }, [])
  return (
    <div className="justify-content-center">
      <CompNewsletter news={newsletter} />
    </div>
  )
}