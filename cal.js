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
