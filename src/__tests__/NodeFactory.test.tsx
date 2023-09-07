import { describe, expect, it } from 'vitest';
import NodeFactory from '../utils/NodeFactory';
import { ImplementationError } from '../utils/errors';

describe('Fail_Node_Factory', () => {
  it('Should fail because component in sample data is not implemented for rendering', () => {
    //Arrange
    const sampleData = {
      Content: {
        type: 'BoxComponent',
      },
      Children: {
        Headline: {
          Content: {
            type: 'TableComponent',
            props: {
              name: 'register',
            },
          },
        },
      },
    };
    //Act
    const factory = NodeFactory;
    const createTreeNode = NodeFactory.createTreeNode.bind(factory, sampleData);
    //Assert
    expect(() => createTreeNode()).toThrowError(
      new ImplementationError({
        name: 'NotImplementated',
        message: 'type TableComponent is not implemented',
      })
    );
  });
});
