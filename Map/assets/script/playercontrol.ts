import Input from "./input";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Playercontrl extends cc.Component {

    
    @property
    speed: number = 50;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        //每一幀都會呼叫Input module
        this.node.x += this.speed*dt*Input.Instance.horizontal;
        this.node.y += this.speed*dt*Input.Instance.vertical;

    }
}
