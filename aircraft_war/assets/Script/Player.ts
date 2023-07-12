const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property(cc.Prefab)
    bulletPre:cc.Prefab = null

    start () {

        let self = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(event){
            self.node.setPosition(event.getLocation());
        });

        this.schedule(()=>{
            let bullet = cc.instantiate(this.bulletPre);
            bullet.setParent(cc.director.getScene());

            bullet.x = this.node.x;
            bullet.y = this.node.y+60;
        },0.1);
        
        cc.director.getCollisionManager().enabled=true;
    }

    update (dt) {
        
    }

    onCollisionEnter(other){
        
        if(other.tag == 1){

            setTimeout(() => {
                cc.director.loadScene("startGame");
            }, 100);
            this.node.destroy();
        }
    }
}
