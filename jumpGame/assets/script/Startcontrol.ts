const {ccclass, property} = cc._decorator;

@ccclass
export default class Startcontrol extends cc.Component {

   
    // onLoad () {}

    

    start () {

        this.node.runAction(cc.fadeOut(5));
        setTimeout(()=>{
            if(cc.isValid(this.node)){
                this.node.destroy();
            }
        },5000)
        
       
        
    }

    onCollisionEnter(other){

        let player:cc.AudioSource = this.getComponent(cc.AudioSource);
        player.play();
        if(other.tag ==1){
            setTimeout(()=>{
                if(cc.isValid(this.node)){
                    this.node.destroy();
                }
            },400)
        }
    }

    // update (dt) {}
}
