const Mypro1 = (state,action)=>{

    let data={

        "proname":"",
        "prodetails":"",
        "tech":"",
        "url":""
    };

    let proData=Object.assign(data,state)

    if(action.type==="pro"){
      proData=action.info;
    }

    return proData;
 }
 export default Mypro1;