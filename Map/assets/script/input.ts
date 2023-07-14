
export default class Input {

    private static instance:Input = null;

    horizontal:number = 0;

    vertical:number = 0;


    static get Instance(){
        if(this.instance==null){
            this.instance = new Input();
        }

        return this.instance;
    }

    constructor(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>{
            if(event.keyCode == cc.macro.KEY.left){
                this.horizontal = -1;
            }else if(event.keyCode == cc.macro.KEY.right){
                this.horizontal = 1;
            }else if( event.keyCode == cc.macro.KEY.up){
                this.vertical = 1;
            }else if(event.keyCode == cc.macro.KEY.down){
                this.vertical = -1;
            }
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,(event)=>{
            if(event.keyCode == cc.macro.KEY.left && this.horizontal == -1){
                this.horizontal = 0;
            }else if(event.keyCode == cc.macro.KEY.right && this.horizontal == 1){
                this.horizontal = 0;
            }else if( event.keyCode == cc.macro.KEY.up && this.vertical == 1){
                this.vertical = 0;
            }else if(event.keyCode == cc.macro.KEY.down && this.vertical == -1){
                this.vertical = 0;
            }
        })
    }
}
