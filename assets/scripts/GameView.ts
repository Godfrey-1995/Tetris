const {ccclass, property} = cc._decorator;
const Wdith = 10;
const Heigh = 20;

@ccclass
export default class NewClass extends cc.Component {
    
    @property(cc.Node)
    nodeMainBlock: cc.Node = null;

    @property(cc.Node)
    nodeNextBlock: cc.Node = null;

    @property(cc.Label)
    lblScore

    onLoad() {}

    OnBtnDirectionClick(event) {}

    OnBtnRotateClick(event) {}

    OnBtnBackClick(event) {}

    InitView () {
        this.GenerateMainBlock();
        this.InitBaseInfo();
    }

    GenerateMainBlock() {}

    InitBaseInfo() {}

    CollsionTest() {}

    CheckIsFullLine() {}
}