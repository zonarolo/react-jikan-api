import React, {useEffect, useState} from "react";
import './Home.scss';
import {CarouselHome} from "../../shared/components/Carousel/Carousel";
import {environment} from "../../environments/environment";
import axios from 'axios';


export function Home() {
const [trendingJikans, setTrendingJikans] = useState([]);

  useEffect( () => {
    axios.get(environment.url + 'trending/anime').then(res => {
      setTrendingJikans(res.data.data);
    })
  }, [])
  return (
    <div className="justify-content-center">
      < CarouselHome trending={trendingJikans} />
    </div>
  )
}