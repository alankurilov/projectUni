import React, { useState } from 'react';


function Form(){
    return(
        <div>

            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid row">
                        <a class="col-1 text-block link" href="/landingpage">
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

                <input class="form-control mb-5" type="text" placeholder="Баллы за ЕНТ" aria-label="Баллы на ЕНТ"/>
                <input class="form-control mb-5" type="text" placeholder="Интересы и хобби" aria-label="Интересы и хобби"/>
                <input class="form-control mb-5" type="text" placeholder="Город обучения" aria-label="Город обучения"/>
                <select class="form-control mb-5">        
                    <option selected>Платное или бесплатное обучение</option>
                    <option>Платное</option>
                    <option>Бесплтаное select</option>
                </select>                
                <input class="form-control mb-5" type="text" placeholder="Номер телефона" aria-label="Номер телефона"/>

                <input class="form-control mb-5" type="text" placeholder="Электронна почта" aria-label="Электронна почта"/>
                <a className="btn btn-primary w-100 link ">
                            Отправить        
                </a>
        </div>
    )

}
export default Form;