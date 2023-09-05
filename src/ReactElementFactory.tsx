import React from 'react';
import Box from './Box';
import Button from './Button';
import H1 from './H1';
import H2 from './H2';
import List from './List';
import Modal from './Modal';
import Paragraph from './Paragraph';
import { TreeNode } from './BST';
import Link from './Link';

export const ReactElementFactory = function () {
  this.root = new TreeNode();
  this.createTreeNode = function (data,key = "root") {
    let { Content, Children } = data;

    if (Content.type === 'H1Component') {
      return new TreeNode(<H1 key={key} {...Content?.props} />);
    } else if (Content.type === 'H2Component') {
      return new TreeNode(<H2  key={key} text={Content?.props?.text} />);
    } else if (Content.type === 'ListComponent') {
      return new TreeNode(<List key={key}  li={Content?.props?.li} />);
    } else if (Content.type === 'ButtonComponent') {
      return new TreeNode(<Button key={key}  text={Content?.props?.text} />);
    } else if (Content.type === 'ParagraphComponent') {
      return new TreeNode(<Paragraph  key={key}  text={Content?.props?.text} />);
    } else if (Content.type === 'BoxComponent') {
        let children = [];
        let i = 0;
        while (i < Object.entries(Children).length) {
            let key = Object.entries(Children)[i][0];
            let child = Object.entries(Children)[i][1];
          children = [
            ...children,
            this.createTreeNode(child,key).value,
          ];
          i++;
        }
      return new TreeNode(<Box key={key} borderSize={Content?.props?.borderSize} >{children}</Box>);
    } else if (Content.type === 'ModalComponent') {
        let children = [];
        let i = 0;
        while (i < Object.entries(Children).length) {
          let key = Object.entries(Children)[i][0];
          let child = Object.entries(Children)[i][1];
          children = [
            ...children,
            this.createTreeNode(child,key).value,
          ];
          i++;
        }
      return new TreeNode(<Modal  key={key}  {...Content?.props}>{children}</Modal>);
    } else if (Content.type === 'LinkComponent') {
      return new TreeNode(<Link text={Content?.props?.text} />);
    } else {
      console.log('whattt');
    }
  };

  this.generateTree = function (data, childRoot = null) {
    let { Children } = data;
      this.root = this.createTreeNode(data);
  };
};
