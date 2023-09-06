import { NodeLookup } from "./NodeLookup";

export default class NodeFactory {
  static createTreeNode(data: any, key = 'root'): ITreeNode {
    let { Content, Children } = data;
    let children: JSX.Element[] = [];
    if (Children) {
      let i = 0;
      while (i < Object.entries(Children).length) {
        const key = Object.entries(Children)[i][0];
        const child = Object.entries(Children)[i][1];
        children = [...children, this.createTreeNode(child, key).getElement()];
        i++;
      }
    }
    return new NodeLookup[Content.type](key, Content?.props,children);
  }
}
