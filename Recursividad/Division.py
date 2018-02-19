def division(a,b):
    if b == 0:
        return 0
    if b-a == 0:
        return 1
    if b>a:
        return 0
    if a>0:
        return 1 + division(a-b,b)
