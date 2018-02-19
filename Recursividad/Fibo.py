def funcion_fibo(num1):
    if num1 > 1:
        return funcion_fibo(num1-1) + funcion_fibo(num1-2)
    return 1
