const Myexp1 = (state,action) => {
    let data = {
        "totalexp":"",
        "abtexp":""
    };
    let expData = Object.assign(data,state)

    if (action.type ==="exp") {
        expData = action.info;
    }

    return expData;

}
export default Myexp1;