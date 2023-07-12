

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    start () {

    }

    update (dt) {

        for(let bgNode of this.node.children){
            //往下移動 看起來往上飛
            bgNode.y -= 50 * dt
            if(bgNode.y<-850){
                bgNode.y+= 852*2
            }
        }
    }

}
