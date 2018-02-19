def longitud(a):
    if a==0:
        return 0
    if a>0:
        return 1 + int(longitud(a/10))
