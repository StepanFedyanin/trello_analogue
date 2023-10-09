function Card({type,data,movingCard}) {
    const typeDefinitionAlert = (value) =>{
         switch (value) {
            case '1':
                return 'alert-primary'
            case '2':
                return 'alert-warning'
            case '3':
                return 'alert-danger'
            case '4':
                return 'alert-success'
            default:
                break;
        }
    }
    const typeDefinitionBtn = (value) =>{
        switch (value) {
           case '1':
               return 'btn-outline-primary'
           case '2':
               return 'btn-outline-warning'
           case '3':
               return 'btn-outline-danger'
           case '4':
               return 'btn-outline-success'
       
           default:
               break;
       }
   }
    return (  
        <div className={"card alert "+ typeDefinitionAlert(type)}>
            <button>Удалить</button>
            <h6>{data.title}</h6>
            <p>{data.content}</p>
            <div className="d-flex justify-content-between">
                <button className={"btn w-auto px-2 py-0 "+typeDefinitionBtn(type)} disabled={type==='1'} onClick={()=>movingCard((Number(type)-1),'prev', data)}>&#8592;</button>
                <button className={"btn w-auto px-2 py-0 "+typeDefinitionBtn(type)} disabled={type==='4'} onClick={()=>movingCard((Number(type)+1),'next', data)}>&#8594;</button>
            </div>
        </div>
    );
}

export default Card;