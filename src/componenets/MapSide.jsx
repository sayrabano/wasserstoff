import React from 'react'
import '../assest/css/sidebar.css'
import HexabinMap from './HexabinMap'
import { data } from '../data/worldData'
export default function MapSide() {
  return (
    <div className='MapSide' style={{marginLeft:'60px'}}>
        <HexabinMap  data={data} width={900} height={600}/>
    </div>
  )
}
