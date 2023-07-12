import Bgcontrol from "./Bgcontrol";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Birdcontrol extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:
    
    score:number = 0;
    onLoad () {
        cc.director.getPhysicsManager().enabled=true;
        
    }

    start () {

    }

    fly(){
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,150);
    }

    onBeginContact(contact,self,other){

        //循環腳本呼叫方法
        let bgcontrol=cc.find('bg').getComponent("Bgcontrol");
        if(other.tag==1){
            this.score+=1;
            bgcontrol.plus(this.score);
        }else{
            
            bgcontrol.die();
        }
    }

    // update (dt) {}
}
