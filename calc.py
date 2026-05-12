def cubic_eq(a, b, c, d):
  b = (-1 * b) / (3 * a)
  c = c / a
  d = b ** 3 - (b * c) / 2 - d / (2 * a)
  y = b ** 2 - c / 3
  x = d ** 2 - y ** 3
  if x <= 0:
    lbl_1()
  ans = d + x ** (1/2)
  ans = ans ** (1/3) - (ans - 2 * d) ** (1/3)
  lbl_2()
  def lbl_1():
    
