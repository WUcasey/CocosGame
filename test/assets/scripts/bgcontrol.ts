const {ccclass, property} = cc._decorator;

@ccclass
export default class bgcontrol extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.getComponent(cc.AudioSource).play();
    }

    // update (dt) {}
}
