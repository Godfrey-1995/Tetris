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

    OnClickStart() {}

    OnClickOption() {}

    OnClickExit() {}
}