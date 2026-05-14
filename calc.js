cubic_eq();
function num_input() {
  return Number(prompt());
}
function solveCubicStrict(a, b, c, d) {
    // 1. Calculate p (reusing 'p')
    var p = (3 * a * c - b * b) / (3 * a * a);
    
    // 2. Calculate q (reusing 'q')
    var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);

    // 3. Calculate the helper for the trigonometric argument (reusing 'r')
    var r = Math.acos(-q / 2 * Math.sqrt(-27 / (p * p * p)));

    // 4. Overwrite d to find the first root (r1)
    // We reuse 'd' because we no longer need the original constant
    d = 2 * Math.sqrt(-p / 3) * Math.cos(r / 3) - b / (3 * a);

    // 5. Calculate Synthetic Division coefficients
    // We reuse 'a' as quadA (remains 'a')
    // We reuse 'b' as quadB
    b = b + (a * d);
    // We reuse 'c' as quadC
    c = c + (b * d);

    // 6. Calculate second and third roots using 'p' and 'q' as temporary storage
    p = 2 * Math.sqrt(-( (3 * a * (c - (b * d)) - (b - (a * d)) * (b - (a * d))) / (3 * a * a) ) / 3) * Math.cos((r + 2 * Math.PI) / 3) - (b - (a * d)) / (3 * a);
    q = 2 * Math.sqrt(-( (3 * a * (c - (b * d)) - (b - (a * d)) * (b - (a * d))) / (3 * a * a) ) / 3) * Math.cos((r + 4 * Math.PI) / 3) - (b - (a * d)) / (3 * a);

    // Final mapping:
    // d = first root
    // a = quadA
    // b = quadB
    // c = quadC
    // p = second root
    // q = third root
    return [d, a, b, c, p, q];
}

function cubic_eq() {
  let a = num_input();
  let b = num_input();
  let c = num_input();
  let d = num_input();
  let x;
  let y;
  let ans;
  b = (-1 * b) / (3 * a);
  c = c / a;
  d = b ** 3 - (b * c) / 2 - d / (2 * a);
  y = b ** 2 - c / 3;
  x = d ** 2 - y ** 3;
  if (x <= 0) {
    lbl_1();
  } else {
    ans = d + x ** (1/2);
  }
  ans = ans ** (1/3) - (ans - 2 * d) ** (1/3);
  lbl_2();
}
def lbl_1():
  if y:
    global ans = 2 * y ** (1/2) * math.cos((1/3) * math.acos(d / (y ** (3/2))))
def lbl_2():
  global a = b + ans
  print(a)
  global d = 3 * b - a
  global b = d / 2 + (d ** 2 / 4 - c + a * d) ** 1/2
  print(b)
  global c = d - b
  print(c)
