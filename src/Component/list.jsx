import {useState} from "react";
import Card from "./card";
import Modal from "./modal";

function List() {
    const [modal, setModal] = useState({
        isShow: false,
        type: 'add',
        list: 'created',
        value: {id: null, title: null, content: null}
    });
    const [listData, setListData] = useState({created: [], progress: [], inspection: [], ready: []});
    const addCard = (id, title, content) => {
        setListData(prev => ({...prev, created: [{id, title, content}, ...prev.created]}));
    }
    const movingCard = (type, typebtn, data,) => {
        if (typebtn === 'next') {
            switch (type) {
                case 2:
                    setListData(prev => ({
                        ...prev,
                        progress: [data, ...prev.progress],
                        created: [...prev.created.filter(item => item.id !== data.id)]
                    }))
                    break;
                case 3:
                    setListData(prev => ({
                        ...prev,
                        inspection: [data, ...prev.inspection],
                        progress: [...prev.progress.filter(item => item.id !== data.id)]
                    }))
                    break;
                case 4:
                    setListData(prev => ({
                        ...prev,
                        ready: [data, ...prev.ready],
                        inspection: [...prev.ready.filter(item => item.id !== data.id)]
                    }))
                    break;
                default:
                    break;
            }
        } else {
            switch (type) {
                case 1:
                    setListData(prev => ({
                        ...prev,
                        created: [data, ...prev.created],
                        progress: [...prev.progress.filter(item => item.id !== data.id)]
                    }))
                    break;
                case 2:
                    setListData(prev => ({
                        ...prev,
                        progress: [data, ...prev.progress],
                        inspection: [...prev.inspection.filter(item => item.id !== data.id)]
                    }))
                    break;
                case 3:
                    setListData(prev => ({
                        ...prev,
                        inspection: [data, ...prev.inspection],
                        ready: [...prev.ready.filter(item => item.id !== data.id)]
                    }))
                    break;
                default:
                    break;
            }
        }
    }
    const removeCard = (id, list) => {
        let type = '';
        switch (list) {
            case '1':
                type = 'created'
                break;
            case '2':
                type = 'progress'
                break;
            case '3':
                type = 'inspection'
                break;
            case '4':
                type = 'ready'
                break;
            default:
                break;
        }
        setListData(prev => ({...prev, [type]: prev[type].filter(card => card.id !== id)}));
    }
    const changeCard = (id, list) => {
        let type = '';
        switch (list) {
            case '1':
                type = 'created'
                break;
            case '2':
                type = 'progress'
                break;
            case '3':
                type = 'inspection'
                break;
            case '4':
                type = 'ready'
                break;
            default:
                break;
        }
        const obj = [...listData[type]].filter(card => card.id === id)[0];
        if (obj?.id) {
            setModal(prev => ({...prev, isShow: true, list: type, type: 'change', value: {...obj}}))
        }
    }
    const exchangeCard = (id, title, content, list) => {
        const index = listData[list].findIndex(item => item.id === id);
        const newArray = [...listData[list]];
        newArray[index] = {id, title, content};
        setListData(prev => ({...prev, [list]: newArray}));
    }
    return (
        <div className="h-100 container">
            <button className="btn btn-outline-primary mb-5"
                    onClick={() => setModal(prev => ({isShow: true, type: 'add'}))}>Создать задачу
            </button>
            <Modal params={modal} changeHidden={setModal} exchangeCard={exchangeCard} addCard={addCard}/>
            <div className="row h-75">
                <div className="list col-12 col-sm-6 col-md-3">
                    <h4>Созданные задачи</h4>
                    {
                        listData.created.map((card, index) =>
                            <Card
                                key={card.id + index}
                                type='1'
                                data={card}
                                movingCard={movingCard}
                                removeCard={removeCard}
                                changeCard={changeCard}
                            />
                        )
                    }
                </div>
                <div className="list col-12 col-sm-6 col-md-3">
                    <h4>В процессе</h4>
                    {
                        listData.progress.map((card, index) =>
                            <Card
                                key={card.id + index}
                                type='2'
                                data={card}
                                movingCard={movingCard}
                                removeCard={removeCard}
                                changeCard={changeCard}
                            />
                        )
                    }
                </div>
                <div className="list col-12 col-sm-6 col-md-3">
                    <h4>На проверке</h4>
                    {
                        listData.inspection.map((card, index) =>
                            <Card
                                key={card.id + index}
                                type='3'
                                data={card}
                                movingCard={movingCard}
                                removeCard={removeCard}
                                changeCard={changeCard}
                            />
                        )
                    }
                </div>
                <div className="list col-12 col-sm-6 col-md-3">
                    <h4>Готово</h4>
                    {
                        listData.ready.map((card, index) =>
                            <Card
                                key={card.id + index}
                                type='4'
                                data={card}
                                movingCard={movingCard}
                                removeCard={removeCard}
                                changeCard={changeCard}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default List;