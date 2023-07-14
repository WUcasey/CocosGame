
const {ccclass, property} = cc._decorator;

@ccclass
export default class mapcontrol extends cc.Component {

   map:cc.TiledMap;
   player:cc.Node=null;


    start () {
        this.map = this.getComponent(cc.TiledMap);
        let player = this.map.getObjectGroup('player');
        let playerObj = player.getObject('playerpos');

        if(playerObj.isplayer == true){
            cc.loader.loadRes('myplayer',cc.Prefab,(err ,playerPre)=>{
                this.player = cc.instantiate(playerPre);
                this.player.setParent(this.node.getChildByName('player').getChildByName('layer'));
                this.player.x=playerObj.x;
                this.player.y=playerObj.y;
                
            })
        }


    }

    update (dt) {

        if(this.player!=null){
            cc.Camera.main.node.x = this.player.x - 280;
            cc.Camera.main.node.y = this.player.y - 170;
        }
        
    }
}
