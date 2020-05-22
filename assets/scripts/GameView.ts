import {Loader} from './LoaderUtils';

const {ccclass, property} = cc._decorator;
const Wdith = 10;
const Heigh = 20;
const BtnTypeKey = {
    left: 1,
    right: 2,
    dwon: 3,
    buttom: 4
}

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    nodeMainBlock: cc.Node = null;

    @property(cc.Node)
    nodeNextBlock: cc.Node = null;

    @property(cc.Button)
    btnBack: cc.Button = null;

    @property(cc.Button)
    btnRotation: cc.Button = null;

    @property(cc.Label)
    lblScore: cc.Label = null;

    onLoad() {
        this.btnRotation.node.on('click', this.OnBtnRotateClick, this);
        this.btnBack.node.on('click', this.OnBtnBackClick, this);
    }

    OnBtnDirectionClick(event) {}

    OnBtnRotateClick(event) {}

    OnBtnBackClick(event) {
        this.node.destroy();
    }

    InitView () {
        this.GenerateMainBlock();
        this.InitBaseInfo();
    }

    GenerateMainBlock() {}

    InitBaseInfo() {}

    CollsionTest() {}

    CheckIsFullLine() {}
}