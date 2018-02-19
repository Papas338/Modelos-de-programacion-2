def invertir(a):
    if a < 10:
        return a
    else:
        return  (a%10) * (10 ** longitud(a)) + invertir(int(a/10))
