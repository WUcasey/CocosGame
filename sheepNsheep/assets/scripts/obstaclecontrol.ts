

const {ccclass, property} = cc._decorator;

@ccclass
export default class obstaclemanger extends cc.Component {

    @property
    speed:number = 50;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    

    start () {

        

    }

    update (dt) {
        //obstacle往前移動
        for(let obstacle of this.node.children){
            obstacle.x -= this.speed * dt
            if(obstacle.x<-314){
                obstacle.x=Math.random()*500;
            }
        }
        

        
    }
}
