import { Loader } from './LoaderUtils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    btnStart: cc.Button = null;

    @property(cc.Button)
    btnOption: cc.Button = null;

    @property({
        type: cc.Button,
        tooltip: "退出按钮",
    })
    btnExit = null;

    onLoad() {
        this.btnStart.node.on('click', this.OnClickStart, this);
        this.btnOption.node.on('click', this.OnClickOption, this);
        this.btnExit.node.on('click', this.OnClickExit, this);
    }

    start() {}

    OnClickStart() {
        Loader.LoadRes('prefab/GameView', (perfab) => { 
            let loginView = cc.instantiate(perfab);
            loginView.parent = this.node;
        });
    }

    OnClickOption() {}

    OnClickExit() {
        cc.game.end();
    }
}