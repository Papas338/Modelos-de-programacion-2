

n=input("INGRESE UN NUMERO===>")
n=str(n)
l=len(n)
s=""
for i in range(1,l+1):
    s=s+n[l-i]
if s==n:
    print ("ES PALINDROMO")
else:
    print ("NO LO ES")

