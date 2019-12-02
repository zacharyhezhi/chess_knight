import Node from './Node';

class Chess {
    constructor(n) {
        this.n = n;
        this.path = [];
      }
    
      valid(x, y) {
        if (x < 0 || y < 0 || x > this.n || y > this.n) return false;
        return true;
      }
    
      printPath(node) {
        if (node == null) {
          return;
        }
        this.printPath(node.parent);
        this.path.push({ x: node.x, y: node.y })
      }
    
      calcSteps(src, destination) {
        let queue = [];
        queue.push(src);
  
        let visited = [];
        const row = [2, 2, -2, -2, 1, 1, -1, -1];
        const col = [-1, 1, 1, -1, 2, -2, 2, -2];
  
        while(queue.length > 0) {
          const currentNode = queue.shift();
          
          if(currentNode.x === destination.x && currentNode.y === destination.y){
            this.printPath(currentNode);
            return this.path;
          }
  
          const hasVisited = visited.find(item => item.x === currentNode.x && item.y === currentNode.y);
          
          if(!hasVisited) {
            visited.push(currentNode);
  
            for(let i = 0; i < 8; i++) {
              const x1 = currentNode.x + row[i];
              const y1 = currentNode.y + col[i];
              if(this.valid(x1, y1)) {
                queue.push(new Node(x1, y1, currentNode.distance + 1, currentNode))
              }
            }
          }
  
        }
  
        return 'not reachable';
      }
}

export default Chess;