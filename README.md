# Información acerca del proyecto

Link del proyecto original

https://blog.lftechnology.com/designing-a-secure-and-scalable-multi-tenant-application-on-node-js-15ae13dda778

Se requiere implementar una api multiusuario que es una arquitectura de software en la que una única instancia de software se ejecuta en un servidor y atiende a varios usuarios. Un buen ejemplo sería Github donde cada usuario u organización tiene su área de trabajo separada. Este concepto se utiliza al desarrollar software que se ejecuta para diferentes organizaciones.

La tenencia múltiple es un concepto clave en la creación y entrega de soluciones de software como servicio (SaaS).

En este ejemplo crearemos un concepto de arquitectura multiusuario para crear una aplicación multiusuario que identificará al inquilino de cada solicitud y proporcionará los datos para esa base de datos en particular. Usaremos NodeJS y ExpressJS junto con MySQL como base de datos y sequelize como generador de consultas.

Comencemos con algunas definiciones:

Inquilino : un grupo de usuarios con el privilegio específico sobre sus datos.

Resolución de conexión: una utilidad que identifica un arrendatario y resuelve un grupo de conexiones de base de datos para ese arrendatario en particular.

Conexión común: un objeto que contiene la información sobre la conexión a una base de datos común.

Conexión de inquilino: un objeto que contiene la información sobre la conexión a la base de datos de inquilinos.

Base de datos común: base de datos que contiene la información sobre todas las bases de datos de inquilinos. También almacena la configuración para las bases de datos de cada arrendatario que se pueden usar para habilitar o deshabilitar funciones para cada arrendatario.

Tenant DB : base de datos separada para cada inquilino que contiene datos según las necesidades del inquilino.

# Librerías usadas:

Agregar un paquete especial
Necesitamos conectarnos a la base de datos de inquilinos correcta según el inquilino que haya solicitado. Una forma de hacerlo es pasar la información sobre el arrendatario (que se recibe de la solicitud) a cada servicio subyacente. Este enfoque no es limpio y también introduce redundancia.

Por lo tanto, usaremos un contexto que persistirá en la tarea asíncrona. Usemos un paquete llamado continuación-local-storage.

``` 
$ npm i continuation-local-storage
```

Este paquete funciona como almacenamiento local de subprocesos en la programación de subprocesos, pero se basa en cadenas de devoluciones de llamada al estilo de nodo en lugar de subprocesos.

# Quick Start
``` 
$ npm install
$ npm start
```

# Ruta base
```
/v1
```

# Endpoints implementados
```
/users

Devuelve todos los registros de la tabla usuarios usando un query.

/usersmodel

Devuelve todos los registros de la tabla usuarios pero usando los modelos generados con sequelize-auto.
```
# Ejemplos de llamadas a los servicios implementados

localhost:8080/users?slug=tenant1

localhost:8080/usersmodel?slug=tenant2

