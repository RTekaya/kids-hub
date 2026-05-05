// Recursive backtracker — produit un labyrinthe parfait (toujours soluble).
// Sortie : grille 2D où chaque cellule a 4 murs { N, S, E, W } booléens.
const OPP = { N: 'S', S: 'N', E: 'W', W: 'E' };

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateMaze = (size) => {
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({
      walls: { N: true, S: true, E: true, W: true },
      visited: false,
    })),
  );
  const stack = [[0, 0]];
  grid[0][0].visited = true;

  while (stack.length > 0) {
    const [r, c] = stack[stack.length - 1];
    const neighbors = [];
    if (r > 0 && !grid[r - 1][c].visited) neighbors.push(['N', r - 1, c]);
    if (r < size - 1 && !grid[r + 1][c].visited) neighbors.push(['S', r + 1, c]);
    if (c < size - 1 && !grid[r][c + 1].visited) neighbors.push(['E', r, c + 1]);
    if (c > 0 && !grid[r][c - 1].visited) neighbors.push(['W', r, c - 1]);
    if (neighbors.length === 0) {
      stack.pop();
      continue;
    }
    const [dir, nr, nc] = pick(neighbors);
    grid[r][c].walls[dir] = false;
    grid[nr][nc].walls[OPP[dir]] = false;
    grid[nr][nc].visited = true;
    stack.push([nr, nc]);
  }
  return grid;
};

export const canMove = (grid, r, c, dir) => {
  const cell = grid[r] && grid[r][c];
  if (!cell) return false;
  return !cell.walls[dir];
};

export const stepFor = (dir) => {
  switch (dir) {
    case 'N': return [-1, 0];
    case 'S': return [1, 0];
    case 'E': return [0, 1];
    case 'W': return [0, -1];
    default: return [0, 0];
  }
};

// BFS shortest path from `start` to `end`. Returns array of directions, or null if unreachable.
export const findPath = (grid, start, end) => {
  if (start[0] === end[0] && start[1] === end[1]) return [];
  const visited = new Set([`${start[0]}-${start[1]}`]);
  const queue = [[start, []]];
  const dirs = ['N', 'S', 'E', 'W'];
  while (queue.length > 0) {
    const [[r, c], path] = queue.shift();
    for (const dir of dirs) {
      if (!canMove(grid, r, c, dir)) continue;
      const [dr, dc] = stepFor(dir);
      const nr = r + dr;
      const nc = c + dc;
      const key = `${nr}-${nc}`;
      if (visited.has(key)) continue;
      if (nr === end[0] && nc === end[1]) return [...path, dir];
      visited.add(key);
      queue.push([[nr, nc], [...path, dir]]);
    }
  }
  return null;
};
