let Uni = '/images/Uni.jpg'
let Logo = '/images/logo.png'
function LandingPage(){
    return(
    <div>
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid row">
                    <div class="col-1">

                    </div>         
                    <div class="col-11">

                        <span class="navbar-text">
                            Университеты          
                        </span>
                    </div>
                </div>
            </nav>
        </div>

        <div className="row">
        <div class="col-12">
                <div class="mb-5 card bg-dark text-white ">
                    <img src={Uni} class="card-img"/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">Поступите в самые лучшие универы Казахстана</h5>
                        <p class="card-text">все ВУЗы Казахстана, с подробным описанием</p>
                    </div>
                </div>
            </div>
 
        </div>
           

        <div class="row">
 
            <div class="col-12">
                <div className=" mb-5 row">

                    <div className="col-1"></div>

                    <div className="col-10">
                        <div class=" сс search">
                            <input type="text" class="search-field" placeholder="Поиск"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/109/109164.png" alt="" class="search-icon"/>
                        </div>        
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
            <div className="row mb-">
                <div class="col-1"></div>
                    <div class="col-10">
                        <a className=" link mb-5 " href="/universities">
                            <div class="card">
                                <img src="http://usa-24.ru/wp-content/uploads/2015/05/liga-pluscha1.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Все университеты</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                <div class="col-1"></div>
            </div>

        
        
        <div className="row">
            <div class="col-12">

                <div class="mb-5 p-5 bg-success text-white">
                    <h5 >С нашей помощью более 100 учеников нашли себе ВУЗ</h5>
                    <p >Что бы найти Универсиет мечты, достаточно ввести несколько данных:<br/>
                        Ваши баллы за ЕНТ, интересы и хобби, город обучения
                    </p>
                </div>
            </div>

        </div>         
        
        <div className="row">

            <div class="col-1"></div>
                <div class="col-10">
                    <a className=" link mb-5" href="/form">
                      <div class="card">
                        <img src="https://img.kapital.kz/wvwEITDv3xM/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvZC9lL2YvNC8xLzkwOTRiOWM5ZmNhZjkwYjM3ZmJhMzEwOGUwMS5qcGc" class="card-img-top" alt="..."/>
                        <div class="card-body">
                             <h5 class="card-title">Заполнить форму</h5>
                        </div>
                        </div>

                    </a>

                </div>
                <div class="col-1"></div>
            </div>


    </div>
    )

}
export default LandingPage;