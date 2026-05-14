function cubic_eq() {
  let a = Number(input());
  let b = Number(input());
  let c = Number(input());
  let d = Number(input());
  let x;
  let y;
  let ans;
  b = (-1 * b) / (3 * a)
  c = c / a
  d = b ** 3 - (b * c) / 2 - d / (2 * a)
  y = b ** 2 - c / 3
  global x = d ** 2 - y ** 3
  if x <= 0:
    lbl_1()
  else:
    global ans = d + x ** (1/2)
  global ans = ans ** (1/3) - (ans - 2 * d) ** (1/3)
  lbl_2()
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
cubic_eq() math
a = 0
b = 0
c = 0
d = 0
x = 0
y = 0
ans = 0
def cubic_eq():
  global a = float(input())
  global b = float(input())
  global c = float(input())
  global d = float(input())
  global b = (-1 * b) / (3 * a)
  global c = c / a
  global d = b ** 3 - (b * c) / 2 - d / (2 * a)
  global y = b ** 2 - c / 3
  global x = d ** 2 - y ** 3
  if x <= 0:
    lbl_1()
  else:
    global ans = d + x ** (1/2)
  global ans = ans ** (1/3) - (ans - 2 * d) ** (1/3)
  lbl_2()
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
cubic_eq()
