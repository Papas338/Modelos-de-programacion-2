def longitud(a):
    if a==0:
        return 0
    if a>0:
        return (a%10) + int(longitud(a/10))
