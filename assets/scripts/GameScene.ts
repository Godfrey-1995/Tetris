// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Camera)
    Camera: cc.Camera = null;

    @property(cc.Node)
    Ui: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {
        this.OpenFirstView();
    }

    OpenFirstView () {
        cc.loader.loadRes('perfab/LoginView', (err, perfab)=>{
            if (err) {
                cc.error('loadRes failed ' + err);
                return;
            }

            let loginView = cc.instantiate(perfab);
            loginView.parent = this.Ui
        });
    }

    // update (dt) {}
}
