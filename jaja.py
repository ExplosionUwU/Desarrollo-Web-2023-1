import random

def f(x):
    return x**2 - 2*x - 3

a = random.randint(-20,20)
b = random.randint(-20,20)
tol = 1e-6
iter_count = 0

while abs(b-a) > tol and iter_count < 100:
    c = (a*f(b) - b*f(a)) / (f(b) - f(a))
    fc = f(c)
    if fc == 0:
        break
    elif fc * f(a) < 0:
        b = c
    else:
        a = c
    iter_count += 1

print("La aproximación a la raíz es: ",c)
