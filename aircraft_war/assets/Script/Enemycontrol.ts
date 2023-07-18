
const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemycontrol extends cc.Component {

    isDie:boolean = false
    
    start () {

    }


    update (dt) {

        if(this.isDie== false){
            this.node.y -= 300*dt   
        }

        if(this.node.y<-10){

            this.node.destroy();
            setTimeout(() => {
                cc.director.loadScene("startGame");
            }, 100);
            
            
        }
    }

    die(){
        this.isDie=true;
        // 加載死亡圖片
        cc.loader.loadRes('player_over',cc.SpriteFrame,(err,res)=>{
            this.node.setScale(0.7);
            this.node.getComponent(cc.Sprite).spriteFrame=res;
            
        });

        //300ms
        setTimeout(()=>{
            //cc.isValid 檢查此節點是否還存在 如果存在在銷毀
            if(cc.isValid(this.node)){
                this.node.destroy()
            }
        },300);
       

        
    }
}
