padrede('Daniel','Jhonathan').

hijode(A,B) :- padrede(B,A).
abuelode(A,B) :- padrede(A,C), padrede(C,B).
hermanode(A,B) :- padrede(C,A), padrede(C,B), A\==B.
primode(A,B) :- padrede(C,A), padrede(D,B), hermanode(C,D).
tiode(A,B) :- padrede(C,B), hermanode(A,C).
bisabuelode(A,B) :- abuelode(A,C), padrede(C,B).
nietode(A,B) :- abuelode(B,A).
sobrinode(A,B) :- tiode(B,A).
