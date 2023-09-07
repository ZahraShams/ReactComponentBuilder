import { AllowedEventsKeys } from '../AllowedEventsKeys';
import { AllowedKeys, NodeLookup } from './NodeLookup';
import { ITreeNode } from './TreeNode';
import { ImplementationError } from './errors';

export default class NodeFactory {
  static createTreeNode(data: any, key = 'root'): ITreeNode {
    const { Content, Children } = data;
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
    if (NodeLookup[Content.type as AllowedKeys]) {
      return new NodeLookup[Content.type as AllowedKeys](
        key,
        Content?.props,
        children
      );
    } else
     { 
      throw new ImplementationError({
        name: 'NotImplementated',
        message: `type ${Content.type} is not implemented`,
      });
      
    }
    
   
  }
}
