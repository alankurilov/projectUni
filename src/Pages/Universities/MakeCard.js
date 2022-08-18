
import '/home/alankurilov/Документы/front/portfolio/project/src/App.css';

function MakeCard({Uni}){
    
    return(
        <div className="row">


            <div className="col-1"></div>
            
            <div className="col-10">
                <a class="p-3 bg-body rounded col-12 btn btn-large" href={"/University/" + Uni.name}>
                    <div className="row">
                        <div className="col-4">

                            <img src={Uni.picture} class="round rounded float-start image"/>
                        </div>
                        
                        <div className="col-7">
                            <p class="fs-4 text-dark text-start">{Uni.name}</p>

                                        <p class="fs-6 text-dark text-start">{Uni.fullName}</p>
                                    
                            <p class="fs-6 text-secondary text-start">{Uni.city}, Kazakhstan <br /></p>
                            </div>
                                    <div className="col-1 align-self-center">

                                        <p class="fs-6 text-dark text-start">{">"}</p>
                                    </div>
                            

                    </div>
                </a>
            </div>
            
              
            <div className="col-1">

            </div>

            <hr />
        </div>
        
    )

}
// /images/Seal_of_the_University_of_Bologna.png


// est: "2234"
// id: 1
// name: "СДУ"
// picture: "/images/Seal_of_the_University_of_Bologna.png"
// placesOnCampus: "5435"
export default MakeCard;