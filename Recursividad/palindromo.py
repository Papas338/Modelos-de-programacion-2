def longitud(num):
        if num > 0:
                return((int(logitud(num/10))) + 1)
        else:
            return 0
    
def invertir(num):
    if(num > 1):
            return(invertir(int(num/10)) + (num%10)* pow(10,longitud(num/10)))
    else:
        return 0

def palindromo (num):
    if num == invertir(num):
        return("el numero es palindromo")
    else:
        return("el numero no es palindromo")
print palindromo(int(input("ingrese un numero")))
