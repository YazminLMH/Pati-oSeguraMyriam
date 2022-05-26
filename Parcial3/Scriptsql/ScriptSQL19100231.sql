create database L19100231; 
use L19100231;

create table Alumno
(numero_de_control varchar (50),
nombre_de_alumno varchar (50),
semestre int,
carrera varchar (50),
especialidad varchar (50),
estado_carrera varchar (50),
correo_institucional varchar (50),
telefono varchar (50),
PRIMARY KEY(numero_de_control)
);

drop database ;
insert into Alumno(numero_de_control,nombre_de_alumno,semestre,carrera,especialidad,estado_carrera,correo_institucional,telefono)
values('19100231','Myriam Yazmin Patino Segura',6,'Sistemas computacionales','--','Regular','L19100231@nlaredo.tecnm.mx','8672819410');

insert into Alumno(numero_de_control,nombre_de_alumno,semestre,carrera,especialidad,estado_carrera,correo_institucional,telefono)
values('20100231','Myriam ',3,'Electronica','--','Regular','L20100231@nlaredo.tecnm.mx','8672819410');

insert into Alumno(numero_de_control,nombre_de_alumno,semestre,carrera,especialidad,estado_carrera,correo_institucional,telefono)
values('19100231','Myriam Yazmin Patino Segura',6,'Sistemas computacionales','--','Regular','L19100231@nlaredo.tecnm.mx','8672819410');

select * from alumno ;
drop table alumno;