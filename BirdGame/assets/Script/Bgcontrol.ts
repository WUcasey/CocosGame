import Birdcontrol from "./Birdcontrol";
import Gamefunction from "./function";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bgcontrol extends cc.Component {
    


    @property
    speed:number = 4 ;

    @property
    width:number = 288 ;


    @property(cc.Node)
    bird:cc.Node = null;
    
    bgfunction = new Gamefunction;
    

    onLoad () {
     
    }

    start () {

        
        for(let bg of this.node.children){
            bg.on(cc.Node.EventType.MOUSE_DOWN,()=>{
                //腳本載入問題嗎???
                if(cc.isValid(this.bird)){
                    this.bgfunction.fly(this.bird);
                }
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
    
    

    
}
