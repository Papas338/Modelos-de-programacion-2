with open('laberinto.txt','r') as f:
    lines = [line.split() for line in f]
        
class Nodo_n:
    def __init__ (self, valor, hijos = []):
        self.valor = valor
        self.hijos = hijos

def buscar (arbol, valor):
    if arbol == None:
        return False
    if arbol.valor == valor:
        return True
    return buscar_hijos(arbol.hijos, valor)

def buscarHijos (lista, valor):
    if lista == []:
        return False
    return buscar(lista[0], valor) or buscar_hijos(lista[1:], valor)

def buscarX():
    for coordx in range(len(lines)):
        for coordy in range(len(lines[0])):
            if lines[coordx][coordy] == 'x':
                return [coordx,coordy]

def buscarCeros(valor, lista, arbol, lista2):
    if arbol == None:
        return Nodo_n(valor)


