def funcion_sumas(num1, num2):
    if num2 > 0:
        return num1 + funcion_sumas (num1, num2-1)
    return 0

a = int(input())
b = int(input())
print (funcion_sumas(a,b))
