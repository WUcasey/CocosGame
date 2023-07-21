
const {ccclass, property} = cc._decorator;

@ccclass
export default class sheepcontrol extends cc.Component {

   

    // onLoad () {}

    start () {

        cc.director.getCollisionManager().enabled = true;        

    }

    onCollisionEnter(other,self){
        if(other.tag == 1){
            //撞到障礙物
            console.log("touch obstacle");
        }else if(other.tag == 2){
            //加分
            console.log("plus")
        }
    }
    // update (dt) {}
}
