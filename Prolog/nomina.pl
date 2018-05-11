horas('Planta',A,B) :- B is 40.
horas('Tiempo completo ocasional',A,B) :- B is 40.
horas('Medio tiempo ocasional',A,B) :- B is 20.
horas('Hora catedra',A,B) :- B is A.
horas('Honorarios',A,B) :- B is A.
salario('Asistentes',A) :- A is 20.
salario('Auxiliares',A) :- A is 50.
salario('Titulares',A) :- A is 150.

nomina(A,B,C,D,E,F) :- horas(B,E,K), salario(C,H), F is K*H*(D/100).
