const {ccclass, property} = cc._decorator;

@ccclass
export default class Startcontrol extends cc.Component {

   
    // onLoad () {}

    isCllision:boolean = false;

    start () {

        this.node.runAction(cc.fadeOut(5));
        setTimeout(()=>{
            if(!this.isCllision){
                this.node.destroy();
                
            }
        },5000)
        
    }

    onCollisionEnter(other){

        this.isCllision=true;
        let player:cc.AudioSource = this.getComponent(cc.AudioSource);
        

        if(other.tag ==1){
            player.play();
            setTimeout(()=>{
                this.node.destroy()
            },400)
        }
    }

    // update (dt) {}
}
