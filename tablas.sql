create table tbl_persona
(
    id_persona int auto_increment primary key ,
    nombre varchar(100),
    apellido varchar(100),
    genero varchar(15)
);

create table tbl_alumno
(
    numero_de_cuenta   varchar(15) primary key,
    nombre             varchar(300),
    correo_electronico varchar(20)

);


create table tbl_telefono
(

    id_telefono       int auto_increment primary key,
    numero_de_cuenta  varchar(15),
    numero_telefonico varchar(30),
    constraint fk_nm_cuenta foreign key (numero_de_cuenta)
        references tbl_alumno (numero_de_cuenta)
);



create table tbl_libro
(

    id_libro        int auto_increment primary key,
    edicion         int,
    fecha_impresion date,
    nombre          varchar(300)
);

create table tbl_autor
(
    id_autor     int auto_increment primary key,
    id_libro     int,
    nombre_autor varchar(300),
    constraint fk_id_libro foreign key (id_libro) references tbl_libro (id_libro)

);

create table tbl_prestamo
(
    id_prestamo    int auto_increment primary key,
    fecha_prestamo date,
    fecha_entrega  date,
    numero_cuenta  varchar(15),
    id_libro       int,
    constraint fk_num_cuenta_2 foreign key (numero_cuenta)
        references tbl_alumno (numero_de_cuenta),
    constraint fk_id_lib_2 foreign key (id_libro)
        references tbl_libro (id_libro)
);


insert into tbl_alumno
(numero_de_cuenta, nombre, correo_electronico)
values
    ('T1123', 'Fernando Lopez', 'frlopez@unitec.edu'),
    ('T28983', 'Leonel Messi' , 'lmessi@unitec.edu'),
    ('T89823', 'Tony Stark', 'tstark@unitec.edu');
