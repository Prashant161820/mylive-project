const MyContact1 = (state,action) => {
    let data = {

        "mobile":"",
        "email": "",
        "localadd": "",
        "permadd": "",
        "reference": ""

    };
    let contactData = Object.assign(data, state)

    if (action.type ==="contact") {
        contactData = action.info;
    }

    return contactData;

}
export default MyContact1;