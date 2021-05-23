import React, {useEffect, useState} from "react";
import axios from 'axios';
import {environment} from "../../environments/environment";
import {JikanGallery} from "../../shared/components/JikanGallery/JikanGallery";
import {JikanSearch} from "../../shared/components/JikanSearch/JikanSearch";
import { useParams } from 'react-router-dom';

const itemsPerPage = 19;
const defaultPageInfo = {first: 1, rows: itemsPerPage}

export function Jikan() {
const [categories, setCategories] = useState([]);
const [paginationInfo, setPaginationInfo] = useState(defaultPageInfo);
const [totalRecords, setTotalRecords] = useState(0);
const [filteredValues, setFilteredValues] = useState({name: '', category:''});
const categoryParams = useParams().category;
const [categoriesJikans, setCategoriesJikans] = useState([]);

  useEffect(()=> {
    axios.get(environment.url + 'categories?page[limit]=200').then(res=> {
        setCategories(res.data.data);
      }
    )
    axios.get(environment.url + 'anime?page[limit]=19').then(res=> {
        setTotalRecords(res.data.meta.count/itemsPerPage);
      }
    );
    if (!categoryParams) {
      axios.get(environment.url + 'anime?page[limit]='+itemsPerPage).then(res => {
        setCategoriesJikans(res.data.data);
        setTotalRecords(res.data.meta.count / itemsPerPage);
      });
    } else {
      axios.get(environment.url + 'anime?page[limit]='+itemsPerPage + '&filter[categories]=' + categoryParams).then(res => {
        setCategoriesJikans(res.data.data);
        setTotalRecords(res.data.meta.count / itemsPerPage);
      });
    }
  }, []);

// Siempre para el useEffect debes colocar array vacio al final para detener la propagacion del mismo.

  const jikansSearch = (filterValues) => {
    setFilteredValues(filterValues);

    axios.get(environment.url + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=' + createFilterUrl(filterValues)).then(res=> {
        setCategoriesJikans(res.data.data);
        setTotalRecords(res.data.meta.count / itemsPerPage);
      }
    )
  }

  const createFilterUrl = (filterValues) => {
    let filterUrl = filterValues.name.length ? '&filter[text]=' + filterValues.name : '';
    filterUrl += filterValues.category.length ? '&filter[categories]=' + filterValues.category : ''
    return filterUrl;
  }

  const changePage = (pageInfo) => {
    setPaginationInfo(pageInfo);
    axios.get(environment.url + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=' + pageInfo.first + createFilterUrl(filteredValues)).then(res => {
      const jikansLocal = res.data.data;
      setCategoriesJikans(jikansLocal);
    })
  }

  return (
    <div className="justify-content-center">
      <JikanSearch onSearch={jikansSearch} categories={categories}/>
      <JikanGallery totalRecords={totalRecords} paginationInfo={paginationInfo} jikans={categoriesJikans} fnChangePage={changePage}/>
    </div>
  );
}
