const Myedu1 = (state,action) => {
    let data = {
        "hedu": "",
        "pass": "",
        "grade": "",
        "college": ""

    };
    let eduData = Object.assign(data, state)

    if (action.type === "edu") {
        eduData = action.info;
    }

    return eduData;

}
export default Myedu1;