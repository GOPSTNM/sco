import math
def cubic_eq():
  a = float(input())
  b = float(input())
  c = float(input())
  d = float(input())
  b = (-1 * b) / (3 * a)
  c = c / a
  d = b ** 3 - (b * c) / 2 - d / (2 * a)
  y = b ** 2 - c / 3
  x = d ** 2 - y ** 3
  if x <= 0:
    lbl_1()
  else:
    ans = d + x ** (1/2)
  ans = ans ** (1/3) - (ans - 2 * d) ** (1/3)
  lbl_2()
def lbl_1():
  if y:
    ans = 2 * y ** (1/2) * math.cos((1/3) * math.acos(d / (y ** (3/2))))
def lbl_2():
  a = b + ans
  print(a)
  d = 3 * b - a
  b = d / 2 + (d ** 2 / 4 - c + a * d) ** 1/2
  print(b)
  c = d - b
  print(c)
cubic_eq()
