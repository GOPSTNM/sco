cubic_eq();
function num_input() {
  return Number(prompt());
}
function solveCubicStrict() {
  let A = num_input();
  let B = num_input();
  let C = num_input();
  let D = num_input();
  let X;
  let Y;
  let M;
  X = (3 * A * C - B * B) / (3 * A * A);
  Y = (2 * B * B * B - 9 * A * B * C + 27 * A * A * D) / (27 * A * A * A);
  M = Math.acos(-Y / 2 * Math.sqrt(-27 / (X * X * X)));
  Y = 2 * Math.sqrt(-X / 3) * Math.cos(M / 3) - B / (3 * A);
  X = 2 * Math.sqrt(-( (3 * A * C - B * B) / (3 * A * A) ) / 3) * Math.cos((M + 2 * Math.PI) / 3) - B / (3 * A);
  M = 2 * Math.sqrt(-( (3 * A * C - B * B) / (3 * A * A) ) / 3) * Math.cos((M + 4 * Math.PI) / 3) - B / (3 * A);
  B = B + (A * Y);
  C = C + (B * Y);
  alert([Y, A, B, C, X, M]);
}
