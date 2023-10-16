import {useEffect} from "react";
import {useState} from "react";

function Modal({params, changeHidden, addCard, exchangeCard}) {
    const style = ['poppup alert alert-primary'];
    const [cardParams, setCardParams] = useState({id: Date.now(), title: '', content: ''});
    if (params.isShow === true) {
        style.push('poppup__active');
    }
    useEffect(() => {
        if (params.type === 'change' && params.value.id || params.type === 'show' && params.value.id) {
            setCardParams(prev => ({id: params.value.id, title: params.value.title, content: params.value.content}))
        }
    }, [params])
    const pushAddParams = () => {
        if (cardParams.title.trim() !== '' && cardParams.content.trim() !== '') {
            addCard(cardParams.id, cardParams.title, cardParams.content);
            setCardParams({id: Date.now(), title: '', content: ''});
            changeHidden(prev => ({...prev, isShow: !prev.isShow}));
        }
    }
    const changeContentCard = () => {
        if (cardParams.title.trim() !== '' && cardParams.content.trim() !== '') {
            exchangeCard(cardParams.id, cardParams.title, cardParams.content, params.list);
            setCardParams({id: Date.now(), title: '', content: ''});
            changeHidden(prev => ({...prev, isShow: !prev.isShow}));
        }
    }
    return (
        <div className={style.join(' ')} onClick={() => changeHidden(prev => ({...prev, isShow: !prev.isShow}))}>
            <div className="poppup__content d-flex flex-column" onClick={e => e.stopPropagation()}>
                <div className="h4 d-flex flex-row align-items-center justify-content-between">
                    создание задачи
                    <button className='poppup__exit'
                            onClick={() => changeHidden(prev => ({...prev, isShow: !prev.isShow}))}></button>
                </div>
                <div className="w-100 d-flex flex-column h-100">
                    <label className="h6 d-flex flex-column gap-3 mb-5">
                        Заголовок
                        <input type='text' className='input form-control' value={cardParams.title}
                               onChange={e => setCardParams(prev => ({...prev, title: e.target.value}))}/>
                    </label>
                    <label className="h6 d-flex flex-column gap-3 flex-grow-1 mb-5">
                        Описание задачи
                        <textarea type='text' className='input form-control flex-grow-1' value={cardParams.content}
                                  onChange={e => setCardParams(prev => ({...prev, content: e.target.value}))}/>
                    </label>
                    {
                        params.type === 'show' ?
                            <button className="btn btn-outline-primary"
                                    onClick={() => changeHidden(prev => ({
                                        ...prev,
                                        isShow: !prev.isShow
                                    }))}>Закрыть</button>
                            :
                            params.type === 'add' ?
                                <button className="btn btn-outline-primary"
                                        onClick={() => pushAddParams()}>Сохранить</button>
                                :
                                <button className="btn btn-outline-primary"
                                        onClick={() => changeContentCard()}>Изменить</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;