padrede('Daniel','Jhonathan').
padrede('Daniel','Diana').
padrede('Blanca','Jhonathan').
padrede('Blanca','Diana').
padrede('Leonilde','Blanca').
padrede('Pedro','Blanca').
padrede('Leonilde','Alejandro').
padrede('Pedro','Alejandro').
padrede('Leonilde','Jairo').
padrede('Pedro','Jairo').
padrede('Jairo','Valentina').
padrede('Jairo','Juana').
padrede('Valerio','Leonilde').
padrede('Enriqueta','Leonilde').
padrede('Concepcion','Pedro').
padrede('Pastor','Pedro').
padrede('Misael','Maria').
padrede('Juliana','Maria').
padrede('Manuel','Hernando').
padrede('Ana','Hernando').
padrede('Maria','Daniel').
padrede('Hernando','Daniel').
padrede('Maria','Yolanda').
padrede('Hernando','Yolanda').
padrede('Maria','Stella').
padrede('Hernando','Stella').
padrede('Stella','Alexis').
padrede('Stella','Judy').
padrede('Stella','Vanessa').
padrede('Victor','Alexis').
padrede('Victor','Judy').
padrede('Victor','Vanessa').
padrede('Yolanda','Luis Jr').
padrede('Yolanda','Lina').
padrede('Luis','Luis Jr').
padrede('Luis','Lina').
padrede('Wilmar','Juan David').
padrede('Diana','Juan David').
padrede('Alfonso','Wilmar').
padrede('Ruth','Wilmar').

hijode(A,B) :- padrede(B,A).
abuelode(A,B) :- padrede(A,C), padrede(C,B).
hermanode(A,B) :- padrede(C,A), padrede(C,B), A\==B.
primode(A,B) :- padrede(C,A), padrede(D,B), hermanode(C,D).
tiode(A,B) :- padrede(C,B), hermanode(A,C).
bisabuelode(A,B) :- abuelode(A,C), padrede(C,B).
nietode(A,B) :- abuelode(B,A).
sobrinode(A,B) :- tiode(B,A).
bisnietode(A,B) :- bisabuelode(B,A).
esposode(A,B) :- padrede(A,C), padrede(B,C).
cunadode(A,B) :- esposode(A,C), hermanode(C,B).
suegrode(A,B) :- padrede(A,C), esposode(C,B).
yernode(A,B) :- suegrode(B,A).
esfeliz(A) :- not(esposode(A,_)).
