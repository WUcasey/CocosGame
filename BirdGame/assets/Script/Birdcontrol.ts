import Bgcontrol from "./Bgcontrol";
import Gamefunction from "./function";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Birdcontrol extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    score_1:cc.Node = null;

    @property(cc.Node)
    score_2:cc.Node = null;

    @property(cc.Node)
    gameover:cc.Node = null;

    scoredir:cc.SpriteFrame[] = null;
    score:number = 0;
    birdfunction = new Gamefunction;

    onLoad () {
        cc.director.getPhysicsManager().enabled=true;
        cc.loader.loadResDir('score',cc.SpriteFrame,(err,assetArr)=>{
            this.scoredir = assetArr;
        })
        
    }

    start () {

    }

    onBeginContact(contact,self,other){

        //循環腳本呼叫方法
        let bgcontrol=cc.find('bg').getComponent("Bgcontrol");
        if(other.tag==1){
            this.score+=1;
            this.birdfunction.plus(this.score,this.score_1,this.score_2,this.scoredir);
        }else{
            
            this.birdfunction.die(this.gameover);
        }
    }

    // update (dt) {}
}
