import {
    BoxNode,
    ButtonNode,
    H1Node,
    H2Node,
    LinkNode,
    ListNode,
    ModalNode,
    ParagraphNode,
  } from './TreeNode';
export type AllowedKeys =
    | 'H1Component'
    | 'H2Component'
    | 'ListComponent'
    | 'ButtonComponent'
    | 'LinkComponent'
    | 'ParagraphComponent'
    | 'BoxComponent'
    | 'ModalComponent';
  
export  const NodeLookup: { [K in AllowedKeys]: TreeNode } = {
    H1Component: H1Node,
    H2Component: H2Node,
    ListComponent: ListNode,
    ButtonComponent: ButtonNode,
    ParagraphComponent: ParagraphNode,
    LinkComponent: LinkNode,
    ModalComponent: ModalNode,
    BoxComponent: BoxNode,
  };