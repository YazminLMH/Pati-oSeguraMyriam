create database [19100231] 
use [19100231]

create table Alumno
(numero_de_control varchar(50) not null,
nombre_de_alumno varchar (50),
semestre int,
carrera varchar (50),
especialidad varchar (50),
estado_carrera varchar (50),
correo_institucional varchar (50),
telefono varchar (50)
PRIMARY KEY(numero_de_control)
);

insert into Alumno(numero_de_control,nombre_de_alumno,semestre,carrera,especialidad,estado_carrera,correo_institucional,telefono)
values('19100231','Myriam Yazmin Patiño Segura',6,'Sistemas computacionales','--','Regular','L19100231@nlaredo.tecnm.mx','8672819410');

