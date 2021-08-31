//import Slider from './components/Slider';
import {lazy, Suspense} from "react";
import { FaCentercode, FaFileExcel } from "react-icons/fa";
const Slider = lazy(() => import ('./components/Slider'));


const ImageData = [
  {
    id:1,
    image:
      "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
  },
  {
    id:2,
    image:
      "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
  },
  {
    id:3,
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
  },
  {
    id:4,
    image:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
  },
];

function App() {
  return (
    <Suspense fallback = {<div style= {{ display:"flex", marginTop:"40px",justifyContent:"center",alignItems:"center" }}>Loading....</div>}>
      <div>
        <Slider slides = {ImageData} />
      </div>
    </Suspense>
  );
}

export default App;
