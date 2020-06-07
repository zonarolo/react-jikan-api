import React, {useEffect, useState} from "react";
import {CategoryGallery} from "../../shared/components/CategoryGallery/CategoryGallery";
import axios from "axios";
import {environment} from "../../environments/environment";

export function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(environment.url + 'categories?page[limit]=1000').then(res=> {
      setCategories((res.data.data).filter((item)=> item.attributes.image !== null));
    });
  }, []);

  return(
    <CategoryGallery categories={categories}/>
  );
}
