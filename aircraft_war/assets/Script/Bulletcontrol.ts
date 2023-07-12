import Enemycontrol from "./Enemycontrol";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bulletcontrol extends cc.Component {

    @property
    speed: number = 800;

    start () {

    }

    update (dt) {

        this.node.y += this.speed*dt;

        if(this.node.y>820){
            this.node.destroy();
        }
    }
    
    onCollisionEnter(other){
        
        if(other.tag == 1){

            other.getComponent(Enemycontrol).die();

            this.node.destroy();
        }
    }
}
