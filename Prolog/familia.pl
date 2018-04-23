padrede('Leonardo','Brandon').
padrede('Sandra','Brandon').
padrede('Leonardo','Lorena').
padrede('Sandra','Lorena').
padrede('Leonardo','Sebastian').
padrede('Sandra','Sebastian').
padrede('Teresa','Leonardo').
padrede('Hector','Leonardo').
padrede('Teresa','German').
padrede('Hector','German').
padrede('German','Julian').
padrede('Lorenay','Julian').
padrede('Reinaldo','Hector').
padrede('Monica','Hector').
padrede('Maria','Sandra').
padrede('Oswaldo','Sandra').
padrede('Oscar','Teresa').
padrede('Susana','Teresa').
padrede('Jose','Maria').
padrede('Laura','Maria').
padrede('Pablo','Oswaldo').
padrede('Ana','Oswaldo').
padrede('Maria','Deyanira').
padrede('Oswaldo','Deyanira').
padrede('Deyanira','Cristian').
padrede('Ricardo','Cristian').
padrede('Deyanira','Lis').
padrede('Ricardo','Lis').
padrede('Maria','Armando').
padrede('Oswaldo','Armando').
padrede('Armando','Oscar').
padrede('Rut','Oscar').
padrede('Armando','Julio').
padrede('Rut','Julio').

hijode(A,B) :- padrede(B,A).
abuelode(A,B) :- padrede(A,C), padrede(C,B).
hermanode(A,B) :- padrede(C,A), padrede(C,B), A\==B.
primode(A,B) :- padrede(C,A), padrede(D,B), hermanode(C,D).
tiode(A,B) :- padrede(C,B), hermanode(A,C).
bisabuelode(A,B) :- abuelode(A,C), padrede(C,B).
nietode(A,B) :- abuelode(B,A).
sobrinode(A,B) :- tiode(B,A).
bisnietode(A,B) :- bisabuelode(B,A).
