

const {ccclass, property} = cc._decorator;

@ccclass
export default class monstercontrol extends cc.Component {

    @property
    JumpHeight:number = 0;

    @property
    JumpDuration:number = 0;

    @property
    MaxMoveSpeed:number = 0;

    @property
    accel:number = 0;
    
    accLeft:boolean = false;
    accRight:boolean =false;
    xSpeed:number = 0;


    JumpAction(){
        var JumpUp=cc.moveBy(this.JumpDuration,cc.v2(0,this.JumpHeight)).easing(cc.easeCubicActionOut());
        var Jumpdown=cc.moveBy(this.JumpDuration,cc.v2(0,-this.JumpHeight)).easing(cc.easeCubicActionIn());
        return cc.repeatForever(cc.sequence(JumpUp,Jumpdown));
    }

    onLoad(){

        let action = this.JumpAction()
        this.node.runAction(action);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);

        
    }

    onKeyDown(event){
        switch(event.keyCode){
         case cc.macro.KEY.left:
             this.accLeft = true;
             
             break;
         case cc.macro.KEY.right:
             this.accRight = true;
             break;
        }
     
    }

    onKeyUp(event){
       switch(event.keyCode){
        case cc.macro.KEY.left:
            this.accLeft = false;
            break;
        case cc.macro.KEY.right:
            this.accRight = false;
            break;

       }
       
    }
    
    start () {
        cc.director.getCollisionManager().enabled=true;
    }

    update(dt){

       
        //xspeed 控制速度
        if(this.accLeft){
            this.xSpeed -= this.accel * dt;
        }
        else if(this.accRight){
            this.xSpeed += this.accel * dt;
        }

        if(Math.abs(this.xSpeed)>this.MaxMoveSpeed){
            //為了保留正負號(做左右轉換)
            this.xSpeed = this.MaxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed);
        }
        
       
        this.node.x+=this.xSpeed * dt;
    }

    onDestroy(){

        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    }
}
