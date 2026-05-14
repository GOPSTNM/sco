import math
a = 0
b = 0
c = 0
d = 0
x = 0
y = 0
ans = 0
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
    lbl_1(a, b, c, d, x, y)
  else:
    ans = d + x ** (1/2)
  ans = ans ** (1/3) - (ans - 2 * d) ** (1/3)
  lbl_2(a, b, c, d, x, y)
def lbl_1(a, b, c, d, x, y):
  if y:
    ans = 2 * y ** (1/2) * math.cos((1/3) * math.acos(d / (y ** (3/2))))
def lbl_2(a, b, c, d, x, y):
  a = b + ans
  print(a)
  d = 3 * b - a
  b = d / 2 + (d ** 2 / 4 - c + a * d) ** 1/2
  print(b)
  c = d - b
  print(c)
cubic_eq()
