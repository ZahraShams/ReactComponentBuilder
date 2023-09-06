import {
  BoxNode,
  ButtonNode,
  H1Node,
  H2Node,
  ITreeNode,
  LinkNode,
  ListNode,
  ModalNode,
  ParagraphNode,
} from './TreeNode';
const getNodeByType: (type: string) => TreeNode = (type: string) => {
  const dic: { [key: string]: TreeNode } = {};
  dic["H1Component"]= H1Node
  dic["H2Component"]= H2Node
  dic["ListComponent"]= ListNode
  dic["ButtonComponent"]= ButtonNode
  dic["ParagraphComponent"]= ParagraphNode
  dic["LinkNode"]= LinkNode
  dic["ModalComponent"]= ModalNode
  dic["BoxComponent"]= BoxNode

  return dic[type];
};

export default class NodeFactory {
  static createTreeNode(data: any, key = 'root'): ITreeNode | null {
    let { Content, Children } = data;
    const type = getNodeByType(Content.type);

    if (Content.type === 'H1Component') {
      return new type(key, Content?.props);
    } else if (Content.type === 'H2Component') {
      return new H2Node(key, Content?.props);
    } else if (Content.type === 'ListComponent') {
      return new ListNode(key, Content?.props);
    } else if (Content.type === 'ButtonComponent') {
      return new ButtonNode(key, Content?.props);
    } else if (Content.type === 'ParagraphComponent') {
      return new ParagraphNode(key, Content?.props);
    } else if (Content.type === 'LinkComponent') {
      return new LinkNode(key, Content?.props);
    } else if (Content.type === 'BoxComponent') {
      let children: JSX.Element[] = [];
      let i = 0;
      while (i < Object.entries(Children).length) {
        const key = Object.entries(Children)[i][0];
        const child = Object.entries(Children)[i][1];
        children = [...children, this.createTreeNode(child, key).getElement()];
        i++;
      }
      return new BoxNode(key, Content?.props, children);
    } else if (Content.type === 'ModalComponent') {
      let children: JSX.Element[] = [];
      let i = 0;
      while (i < Object.entries(Children).length) {
        const key = Object.entries(Children)[i][0];
        const child = Object.entries(Children)[i][1];
        children = [...children, this.createTreeNode(child, key).getElement()];
        i++;
      }
      return new ModalNode(key, Content?.props, children);
    } else {
      console.log('whattt');
      return null;
    }
  }
}
