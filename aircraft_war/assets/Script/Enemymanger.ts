
const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemymanger extends cc.Component {

    @property(cc.Prefab)
    enemyPre:cc.Prefab= null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //單位秒
        this.schedule(()=>{
            let enemy = cc.instantiate(this.enemyPre);
            enemy.setParent(cc.director.getScene());
            enemy.y=this.node.y
            enemy.x=Math.random()*400;
        },0.5);

    }

    update (dt) {}
}
