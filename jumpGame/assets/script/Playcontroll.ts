
const {ccclass, property} = cc._decorator;

@ccclass
export default class Playcontroll extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
            cc.director.loadScene('game');
            
        })
    }

    // update (dt) {}
}
