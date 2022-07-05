/** 
 * Autor : Dilan Martinez
 * 
 * **/

create database pruebas

create table appusertb(
id int auto_increment,
LastName varchar(20),
Name varchar(20),
isMilitar bool,
TimeCreate datetime,
IsTemporal bool,
username varchar(20),
Password_User varchar(50),
emailVerified bool,
verificationToken varchar(500),
primary key (id)
)

create table contacinfotb(
id int auto_increment,
UserID int,
Address varchar(60),
CountryID int,
City varchar(50),
Phone varchar(20),
CellPhone varchar(20),
EmergencyName varchar(100),
EmergencyPhone varchar(20),
primary key (id)
)

ALTER TABLE contacinfotb ADD FOREIGN KEY (UserID) REFERENCES appusertb(id)


create table countrytb(
id int auto_increment,
CountryCode varchar(4),
countryName varchar(100),
primary key (id)
)

ALTER TABLE contacinfotb ADD FOREIGN KEY (CountryID) REFERENCES countrytb(id)

create table userdocumenttb(
UserID int,
Document varchar(20),
TypeDocumentID int,
PlaceExpedition varchar(60),
DateExpetion date,
primary key (UserID)
)

ALTER TABLE userdocumenttb ADD FOREIGN KEY (UserID) REFERENCES appusertb(id)

create table typedocumenttb(
id int auto_increment,
NameTypeDocument varchar(50),
primary key (id)
)

ALTER TABLE userdocumenttb ADD FOREIGN KEY (TypeDocumentID) REFERENCES typedocumenttb(id)

/**  DATOS DE PRUEBA **/
insert into typedocumenttb (NameTypeDocument) values ('cedula de ciudadania' )
insert into typedocumenttb (NameTypeDocument) values ('Nit' )
insert into typedocumenttb (NameTypeDocument) values ('tarjeta de identidad' )


insert into countrytb (CountryCode , countryName) values ('co57' ,'colombia' )
insert into countrytb (CountryCode , countryName) values ('cl56' ,'chile' )



