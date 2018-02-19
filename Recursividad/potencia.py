def potencia(base,exp):
    if exp>0:
        return base * potencia(base,exp-1)
    else:
        return 1

