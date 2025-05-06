let antMoves = [0, 2, 3, 2, 1, 0, 0, 0, 2, 1];

const antMove = (steps) => {
  const conversion = {
    0: { h: +1, v: +1 },
    1: { h: +1, v: -1 },
    2: { h: -1, v: -1 },
    3: { h: -1, v: +1 },
  };

  const { vx, vy } = steps.reduce(
    (acc, step) => {
      const { h, v } = conversion[step];
      return {
        vx: acc.vx + h,
        vy: acc.vy + v,
      };
    },
    { vx: 0, vy: 0 }
  );
  const distance = Math.sqrt(vx * vx + vy * vy);
  return Math.trunc(distance);
};

console.log(antMove(antMoves)); // 2
