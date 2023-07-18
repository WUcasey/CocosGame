const {ccclass, property} = cc._decorator;

@ccclass
export default class StartManger extends cc.Component {

    @property(cc.Prefab)
    StartPre:cc.Prefab = null;
    

    // onLoad () {}

    start () {
        //每秒生成
        this.schedule(()=>{
            let newstart = cc.instantiate(this.StartPre);
            newstart.setParent(cc.director.getScene());
            newstart.x=100+Math.random()*1000;
            newstart.y=200+Math.random()*150;
        },1)

        
        
    }

    // update (dt) {}
}
