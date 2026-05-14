cubic_eq();
function num_input() {
  return Number(prompt());
}
function solveCubicStrict(A, B, C, D) {
    // X = p (depressed cubic)
    X = (3 * A * C - B * B) / (3 * A * A);
    
    // Y = q (depressed cubic)
    Y = (2 * B * B * B - 9 * A * B * C + 27 * A * A * D) / (27 * A * A * A);

    // M = phi (trigonometric angle)
    M = Math.acos(-Y / 2 * Math.sqrt(-27 / (X * X * X)));

    // Store the first root in Y
    // We calculate it using the existing A, B, X, M
    Y = 2 * Math.sqrt(-X / 3) * Math.cos(M / 3) - B / (3 * A);

    // Use X and M to calculate the 2nd and 3rd roots before we lose original B
    X = 2 * Math.sqrt(-( (3 * A * C - B * B) / (3 * A * A) ) / 3) * Math.cos((M + 2 * Math.PI) / 3) - B / (3 * A);
    M = 2 * Math.sqrt(-( (3 * A * C - B * B) / (3 * A * A) ) / 3) * Math.cos((M + 4 * Math.PI) / 3) - B / (3 * A);

    // Repurpose B and C for the Synthetic Division coefficients (A remains quadA)
    B = B + (A * Y);
    C = C + (B * Y);

    // Final order: 
    // 1. First Root (Y)
    // 2. quadA (A)
    // 3. quadB (B)
    // 4. quadC (C)
    // 5. Second Root (X)
    // 6. Third Root (M)
    return [Y, A, B, C, X, M];
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
