def potencia(base,exp):
    if exp>0:
        return base * potencia(base,exp-1)
    else:
        return 1
base = int(input())
exp = int(input ())
print (potencia(base,exp))
