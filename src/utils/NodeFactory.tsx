import { AllowedEventsKeys } from '../AllowedEventsKeys';
import { AllowedKeys, NodeLookup } from './NodeLookup';
import { ITreeNode } from './TreeNode';
import { ImplementationError } from './errors';

export default class NodeFactory {
  //first element of the the JSON has 'root' key as default the others have the key specified the json structure(so the uniqueness is satisfied)
  static createTreeNode(data: any, key = 'root'): ITreeNode {
    const { Content, Children } = data;
    let children: JSX.Element[] = [];
    /* some components like `Box` , `Modal` can have children so
     I first create their children Nodes then inject them to their own node to be rendered 
     as a normal react component children prop
     In other words component composition technique is used here
    */
    if (Children) {
      let i = 0;
      while (i < Object.entries(Children).length) {
        const key = Object.entries(Children)[i][0];
        const child = Object.entries(Children)[i][1];
        //recursively call factory createTreeNode method
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
