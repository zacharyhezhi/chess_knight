import Node from '../class/Node';

describe("Test Node class", () => {
 it("should generate a node instance", () => {
  const node = new Node(1,1);
  expect(node.x).toBe(1);
  expect(node.y).toBe(1);
 });
});
