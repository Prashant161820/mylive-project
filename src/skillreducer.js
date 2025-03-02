const Myskill1 = (state,action)=>{
    let data={
        "skills":""
    };
   
    let skillData=Object.assign(data,state)

    if(action.type==="skill"){
      skillData=action.info;
    }

    return skillData;
 }
 export default Myskill1;