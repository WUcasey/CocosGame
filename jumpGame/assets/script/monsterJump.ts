// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class monsterJump extends cc.Component {

    @property
    jumpHeight:number = 0;
  

    onLoad(){
        cc.director.getPhysicsManager().enabled=true;
    }


    start () {
  
       let rotation = cc.rotateBy(3,360);
       let moveright = cc.jumpBy(3,cc.v2(750,0),this.jumpHeight,4)
       let moveleft = cc.jumpBy(3,cc.v2(-750,0),this.jumpHeight,4)
       let seq=cc.sequence(cc.spawn(moveright,rotation),cc.spawn(moveleft,rotation))
       this.node.runAction(seq.repeatForever());
    }



    
}
