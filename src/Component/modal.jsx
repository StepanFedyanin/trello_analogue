import { useState } from "react";

function Modal({isShow,changeHidden,addCard}) {
    const style= ['poppup alert alert-primary'];
    const [cardParams,setCardParams] = useState({id:Date.now(),title:'',content:''});
    if(isShow === true) {
        style.push('poppup__active');
    }
    const pushAddParams=()=>{
        addCard(cardParams.id,cardParams.title, cardParams.content);
        setCardParams({id:Date.now(),title:'',content:''});
        changeHidden(prev=>!prev);
    }
    return (  
        <div className={style.join(' ')} onClick={()=>changeHidden(prev=>!prev)}>
            <div className="poppup__content d-flex flex-column" onClick={e=>e.stopPropagation()}>
                <div className="h4 d-flex flex-row align-items-center justify-content-between">
                    создание задачи
                    <button className='poppup__exit' onClick={()=>changeHidden(prev=>!prev)}></button>
                </div>
                <div className="w-100 d-flex flex-column h-100">
                    <label className="h6 d-flex flex-column gap-3 mb-5">
                        Заголовок
                        <input type='text' className='input form-control' value={cardParams.title} onChange={e=>setCardParams(prev=>({...prev,title:e.target.value}))}/>
                    </label>
                    <label className="h6 d-flex flex-column gap-3 flex-grow-1 mb-5">
                        Описание задачи
                        <textarea type='text' className='input form-control flex-grow-1' value={cardParams.content} onChange={e=>setCardParams(prev=>({...prev,content:e.target.value}))}/>
                    </label>
                    <button className="btn btn-outline-primary" onClick={()=>pushAddParams()}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;