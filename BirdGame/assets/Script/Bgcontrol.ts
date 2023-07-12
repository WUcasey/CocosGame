import Birdcontrol from "./Birdcontrol";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bgcontrol extends cc.Component {
    


    @property
    speed:number = 4 ;

    @property
    width:number = 288 ;

    @property(Birdcontrol)
    bird:Birdcontrol = null;

    @property(cc.Node)
    gameover:cc.Node = null;

    @property(cc.Node)
    score_1:cc.Node = null;

    @property(cc.Node)
    score_2:cc.Node = null;

    
    
    scoredir:cc.SpriteFrame[] = null;

    onLoad () {
        cc.loader.loadResDir('score',cc.SpriteFrame,(err,assetArr)=>{
            this.scoredir = assetArr;
        })
    }

    start () {

        for(let bg of this.node.children){
            bg.on(cc.Node.EventType.MOUSE_DOWN,()=>{
                this.bird.fly()
            })
        }
        

    }

    update (dt) {
        for(let bg of this.node.children){
            bg.x -= this.speed*dt;
            if(bg.x<-this.width){
                bg.x += this.width*2;
            }
        }
    }
    
    die(){
        // cc.resources.load('gameover',cc.SpriteFrame,(err,asset)=>{
        //    this.gameover.getComponent(cc.Sprite).spriteFrame=asset;
        //    //(編譯提示錯誤 但可正常執行)類型 'Asset' 在類型 'SpriteFrame' 中缺少下列屬性: insetTop, insetBottom, insetLeft, insetRight，以及另外 25 個
            
        // })
        cc.loader.loadRes('gameover',cc.SpriteFrame,(err,res)=>{
            
            this.gameover.getComponent(cc.Sprite).spriteFrame=res;
            setTimeout(()=>{
                cc.director.loadScene('start');
            },300)
            
        });
        
    }

    plus(score:number){

        if(score>9){
            this.score_1.getComponent(cc.Sprite).spriteFrame = this.scoredir[Math.trunc(score/10)];
        }
        else{
            this.score_1.getComponent(cc.Sprite).spriteFrame = this.scoredir[0];
        }
        this.score_2.getComponent(cc.Sprite).spriteFrame = this.scoredir[score%10];

        if(score>99){
            cc.director.loadScene('start');
        }

    }
}
