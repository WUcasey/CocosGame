
export default class Gamefunction {

    //小鳥飛
    public fly(node:cc.Node){
        
        node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,150);
    };
 
    //小鳥死亡 導回主畫面 顯示gamever
    public die(node:cc.Node){
        // cc.resources.load('gameover',cc.SpriteFrame,(err,asset)=>{
        //    this.gameover.getComponent(cc.Sprite).spriteFrame=asset;
        //    //(編譯提示錯誤 但可正常執行)類型 'Asset' 在類型 'SpriteFrame' 中缺少下列屬性: insetTop, insetBottom, insetLeft, insetRight，以及另外 25 個
        // })
        cc.loader.loadRes('gameover',cc.SpriteFrame,(err,res)=>{
            
            node.getComponent(cc.Sprite).spriteFrame=res;
            setTimeout(()=>{
                cc.director.loadScene('start');
            },300)
            
        });
    
    };

    //分數顯示
    public plus(score:number,score_1:cc.Node,score_2:cc.Node,scoredir:cc.SpriteFrame[]){

        if(score>9){
            score_1.getComponent(cc.Sprite).spriteFrame = scoredir[Math.trunc(score/10)];
        }
        else{
            score_1.getComponent(cc.Sprite).spriteFrame = scoredir[0];
        }
        score_2.getComponent(cc.Sprite).spriteFrame = scoredir[score%10];

        if(score>99){
            cc.director.loadScene('start');
        }

    }
}
