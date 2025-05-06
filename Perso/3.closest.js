const temperatures = [-4, -2, 1, 3, 5, 7, 8, 10, 12, 15];

function findClosest(arr) {
  if (arr.length === 0) return 0;
  let closest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const t = arr[i];
    if (
      Math.abs(t) < Math.abs(closest) ||
      (Math.abs(t) === Math.abs(closest) && t > closest)
    ) {
      closest = t;
    }
  }
  return closest;
}

console.log(findClosest(temperatures)); // 1
