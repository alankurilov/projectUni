
import img from './Seal_of_the_University_of_Bologna.png';
import MakeCard from './MakeCard';
import "../../App.css"
import data from '../../data.js';
function Universities(){
    console.log(data)
    return(
    <div>
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid row">
                    <a class="col-1 link" href="/landingpage">
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
        {
            data.map(Uni =>{
                console.log(Uni)
                return <MakeCard Uni = {Uni}></MakeCard>
            })
        }
        
    </div>
    )

}
export default Universities;