import img from './Seal_of_the_University_of_Bologna.png';
import { useParams } from "react-router-dom";
import data from '/home/alankurilov/Документы/front/portfolio/project/src/data.js';
import Carousel from 'react-bootstrap/Carousel';
import CarEx from './Carousel';

function University(){
    const { name } = useParams();
    var findUni = data.find(function(Uni){
        if(Uni.name == name){
            return true;
        }
    })
    return(
        <div>
        
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid row">
                        <a class="col-1 link text-block" href="/universities">
                            {"<"}
                        </a>
                        <div class="col-11">
                            <span class="navbar-text">
                                Университеты          
                            </span>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="card ">
                <div className="card-header ">
                {/* <CarEx imgs = {findUni.bgPicture}></CarEx>    */}
                <div class="card-img" >
                    <CarEx imgs = {findUni.bgPicture}></CarEx>     
                </div>
                <div class="card-img-overlay d-flex logo">
                    <img src={findUni.picture} class="round rounded float-start image"/>
                    <div class ="align-self-center logoText"> {findUni.name}</div>

                </div>
                <div class="card-img-overlay d-flex ">
                </div>
                </div>
                <div class="card-body">
                    <p class="fs-4 text-dark text-start">{findUni.fullName}</p>
                    <p class="fs-6 text-secondary text-start">{findUni.city}, Kazakhstan <br />
                    </p>
                    <p class="fs-6 text-dark text-start">{findUni.content}</p>
                </div>
            </div>  

        <div id="browse_app">
        </div>

        {/* element.style {
    width: 100px;
    height: 100px;
    top: 100px;
    color: white;
    font-weight: 600;
    font-size: 20px;

} */}
  </div>
    )

}
export default University;
