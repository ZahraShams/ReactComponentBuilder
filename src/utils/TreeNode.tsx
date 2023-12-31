import Box from '../components/Box';
import Button from '../components/Button';
import H1 from '../components/H1';
import H2 from '../components/H2';
import Link from '../components/Link';
import List from '../components/List';
import Modal from '../components/Modal';
import Paragraph from '../components/Paragraph';


export interface ITreeNode {
  nodeKey: string;
  props: any;
  getElement(): JSX.Element;
}

export class TreeNode implements ITreeNode {
  constructor(key: string, props: any) {
    this.nodeKey = key;
    this.props = props;
  }
  nodeKey = '';
  props = {};
 
  getElement(): JSX.Element {
    return <> </>;
  }
}
export class H1Node extends TreeNode {
  getElement(): JSX.Element {
    return <H1 key={this.nodeKey} nodeKey={this.nodeKey} {...this.props} />;
  }
}
export class H2Node extends TreeNode {
  getElement(): JSX.Element {
    return <H2 key={this.nodeKey} nodeKey={this.nodeKey} {...this.props} />;
  }
}
export class LinkNode extends TreeNode {
  getElement(): JSX.Element {
    return <Link key={this.nodeKey} nodeKey={this.nodeKey} {...this.props}/>;
  }
}
export class ListNode extends TreeNode {
  getElement(): JSX.Element {
    return <List key={this.nodeKey} nodeKey={this.nodeKey} {...this.props}/>;
  }
}
export class ButtonNode extends TreeNode {
  constructor(key: string, props: any) {
    super(key, props);
  }
  getElement(): JSX.Element {
    return <Button key={this.nodeKey} nodeKey={this.nodeKey} {...this.props}  />;
  }
}
export class ParagraphNode extends TreeNode {
  getElement(): JSX.Element {
    return <Paragraph key={this.nodeKey} nodeKey={this.nodeKey} {...this.props}/>;
  }
}

/*This type of node need 1 extra property named: 
children(the name describes its usage) and also `getElement` behavior uses component composition to render its children */
export class BoxNode extends TreeNode {
  constructor(key: string, props: any,children: JSX.Element[]) {
    super(key,props);
    this.children = children;
  }
  children: JSX.Element[];
  getElement(): JSX.Element {
    return (
      <Box key={this.nodeKey} nodeKey={this.nodeKey} {...this.props}>
        {this.children}
      </Box>
    );
  }
}
/*This type of node need 1 extra property named: 
children(the name describes its usage) and also `getElement` behavior uses component composition to render its children */
export class ModalNode extends TreeNode {
  constructor(key: string, props: any,children: JSX.Element[]) {
    super(key,props);
    this.children = children;
  }
  children: JSX.Element[];
  getElement(): JSX.Element {
    return (
      <Modal key={this.nodeKey} nodeKey={this.nodeKey} {...this.props}>
        {this.children}
      </Modal>
    );
  }
}

