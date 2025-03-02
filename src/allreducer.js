import { combineReducers } from "redux";
import MyBasic1 from "./basicreducer";
import MyContact1 from "./contactreducer";
import Myedu1 from "./edureducer";
import Myskill1 from "./skillreducer";
import Mypro1 from "./projectreducer";
import Myexp1 from "./expreducer";

const MainReducer =combineReducers({
    MyBasic1,MyContact1,Myedu1,Myskill1,Mypro1,Myexp1
})
export default MainReducer;