

const {ccclass, property} = cc._decorator;

@ccclass
export default class bgcontrol extends cc.Component {

    @property
    speed:number=100

    @property
    width:number = 600 ;

    @property(cc.Node)
    sheep:cc.Node = null;

    @property
    jumpduration:number = 0.5;

    @property
    jumpHeight:number = 70;

    holdtimeeslipse:number=0;
    holdclick:boolean=false

    onLoad(){
        this.node.on(cc.Node.EventType.TOUCH_START,function(event){
           this.holdclick = false;
           
        })
    }

    start () {

        for(let bg of this.node.children){
            
            bg.on(cc.Node.EventType.TOUCH_START,()=>{
                
                this.sheepjump()
                
            })
        }
        

    }

    update (dt) {
        for(let bg of this.node.children){

            bg.x -= this.speed*dt;
            if(bg.x<-this.width){
                bg.x += this.width*2;
            }

        }
    }


    sheepjump(){
        //檢查羊是否有回到地面
        if(97>this.sheep.y){

            //跳躍動畫
            let sheepanima=this.sheep.getComponent(cc.Animation);
            sheepanima.playAdditive('sheep_down');//不會停止當前所撥放的動畫 所以會jump後回到run
            //跳躍動作
            let jumpup = cc.moveBy(this.jumpduration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut());
            let jumpdown = cc.moveBy(this.jumpduration,cc.v2(0,-this.jumpHeight)).easing(cc.easeCubicActionIn());
            let jumpseq = cc.sequence(jumpup,jumpdown);
            this.sheep.runAction(jumpseq);
        }
        
    }
}
