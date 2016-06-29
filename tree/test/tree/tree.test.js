import Tree from '../../src/tree/tree'

describe('Tree', () => {
  let tree;

  describe('#getLeaves()', () => {
    describe('when it gets an empty tree', () => {
      beforeEach(function() {
        tree = new Tree([]);
      });

      it('should return an empty tree', () => {
        tree.getLeaves().should.eql([]);
      });
    });

    describe('when it gets a tree with one element', () => {
      let treeData;

      beforeEach(function() {
        treeData = [{
          id: 42
        }];

        tree = new Tree(treeData);
      });

      it('should return the same tree', () => {
        tree.getLeaves().should.eql(treeData);
      });
    });

    describe('when it gets a tree with one element with one child', () => {
      let treeData;

      beforeEach(function() {
        treeData = [{
          id: 42,
          children: [
            {
              id: 43
            }
          ]
        }];

        tree = new Tree(treeData);
      });

      it('should return the child element', () => {
        tree.getLeaves().should.eql([
          {
            id: 43
          }
        ]);
      });
    });

    describe('when it gets a complex tree structure', () => {
      let treeData;

      beforeEach(function() {
        treeData = [{
          id: 42,
          children: [
            {
              id: 43
            },
            {
              id: 44,
              children: [
                {
                  id: 45
                },
                {
                  id: 46
                }
              ]
            }
          ]
        }];

        tree = new Tree(treeData);
      });

      it('should return the leaves of the tree', () => {
        tree.getLeaves().should.eql([
          {
            id: 43
          },
          {
            id: 45
          },
          {
            id: 46
          }
        ]);
      });

      it('should not change original structure', function() {
        let originalTreeData = Object.assign([], treeData);
        tree.getLeaves();

        tree.treeData.should.eql(originalTreeData);
      });
    });
  });

});