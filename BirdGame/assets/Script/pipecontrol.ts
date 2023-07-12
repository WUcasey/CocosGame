
const {ccclass, property} = cc._decorator;

@ccclass
export default class Pipecontrol extends cc.Component {

   
    @property
    speed: number = 50;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        for (let pipe of this.node.children){
            pipe.x-=this.speed*dt;
            if(pipe.x<-50){
                pipe.x +=  288*2;
                pipe.y = 450+Math.random()*150;
            }

        }
    }
}
