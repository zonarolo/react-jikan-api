import React, {useEffect, useState} from "react";
import axios from "axios";
import {SponsorsGallery} from "../../shared/components/SponsorsGallery/SponsorsGallery";

export function Sponsors(){
  const [sponsor, setSponsor]=useState([])

  useEffect(()=>{axios.get("https://kitsu.io/api/edge/streamers?page[limit]=100").then(res=>{
    setSponsor(res.data.data)
  })},[])

  return(
    <div>
      <SponsorsGallery sponsor={sponsor}/>
    </div>
  )
}
