import { data } from '../data/worldData';
import SideCard from './SideCard';
import '../assest/css/sidebar.css'
import MapSide from './MapSide';
export default function Home() {
  console.log(data);

 

  return (
    <div className="Profile">
    

        <SideCard/>
        <MapSide/>
       

        
        
   

</div>
  );
}
