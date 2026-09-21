# Requerimientos del sistema (según la consigna)

Sobre el cine:
- Un solo edificio, varias salas todas iguales: 20 filas numeradas con letras y 3 columnas con 4, 20 y 4 butacas
- Hay butacas con espacio extra para personas discapacitadas

Sobre las películas:
- Tienen horario, duración, imagen, nombre, sinopsis, género, restricción de edad (SAM 13, SAM 18 o ATP)

Sobre las funciones:
- Pueden ser: 2D, 3D, 4D o 5D
- Castellano o subtitulada
- No puede haber funciones antes de que pase media hora de que terminó la función anterior en esa sala

Sobre la app a desarrrollar:
- Los clientes deben poder sacar entradas y les tiene que generar el pdf con los datos de la entrada y el QR que van a presentar para ver la película
- Se recopilan los datos: mail, nombre, apellido, fecha de nacimiento
- Registro y anonimidad: Existe un beneficio por registrarse en el sistema, es un descuento en la primer compra (el monto del descuento es manejado por el admin, de las entradas o aplica al candy también??), pero no es necesario registrarse para comprar
- Debe haber un sistema de reseñas: antes de sacar entradas a la película, el cliente debe poder ver reseñas en formato cantidad de estrellas y comentarios breves sobre la película, además de una puntuación promedio
- La página principal de la app debe mostrar primero las 3 películas más vendidas, además de que de deben destacar los combos especiales tales como entrada + pochoclo + bebida (promos de los combos administrados desde admin)
- Buscador de películas que filtre por horario, duración, imagen, nombre, sinopsis, género
- Existen cupones para la gente mayor de 50 años
- El admin debe poder crear y modificar productos del candy
- El QR de la entrada es el mismo que el del retiro del candy
- Mapa de todo el cine que indique cuál es la sala para la que se compró la entrada ???? 
- Debe haber usuarios admin que controlen las funciones, la distribución de las butacas, los productos y demás
- Debe haber usuarios empleados que pueden escanear los QRs para validar las entradas, tanto para el cine como para el Candy bar
- Los QR se deben poder leer con lector o ingresar el código a mano, además los QR dejan de funcionar cuando se escanean
- Asignación de salas automática y NO se pueden superponer funciones en la misma sala
- Los usuarios menores de 13 o 18 no pueden comprar entradas a peliculas SAM 13 o SAM 18 respectivamente, y a esas peliculas, en la entrada se debe aclarar sobre que deben ir acompañados de un adulto
- Track de butacas en tiempo real: cuando un usuario está seleccionando butacas, debe ver
cuáles ya están ocupadas por otra compra en ese mismo momento. Las butacas accesibles (filas J y K adaptadas para discapacidad) deben resaltarse visualmente de forma diferente
- UX/UI bonito y fácil para TODOS los usuarios (admin, empleado y cliente)
- NO calendario para las fechas de funciones
- NO scroll ni espacios en blanco
- En el apartado de admin debe haber reportes de facturación por día y cantidad de entradas vendidas
- Programa de fidelización: 1 ARS = 1 punto (sólo clientes registrados). El admin debe poder configurar los beneficios por puntos. Los puntos som canjeables por candy y entradas. El usuario debe poder ver en su perfil cuántos puntos tiene acumulados y el historial de canjes. Los puntos no se pueden
transferir entre usuarios.
- Sección 'Próximamente' donde se muestra las películas que se estrenan en las próximas semanas. Los usuarios deben poder activar una alerta para recibir una notificación cuando las entradas de esa película estén disponibles para la venta
- Preventa: queremos poder abrir la venta de entradas 7 días antes del estreno con un precio especial de preventa. Una vez que pase la fecha de preventa, el precio vuelve al normal. Esto debe ser configurable película por película.
- Sección 'Mis películas' donde el usuario vea un historial visual de todo lo que vio, con pósters fechas y su propia calificación.
- Cancelaciones hasta 2 horas antes de la función, no se devuelve el dinero, se da un crédito para futuras compras. El crédito debe aparecer en su perfil y poder usarse junto con otros métodos de pago.
- Butacas VIP en las últimas 3 filas de cada sala (filas R, S y T). Estas butacas deben tener un
precio más alto y deben marcarse visualmente de forma diferente en el mapa de butacas. El usuario debe saber claramente que está comprando una butaca VIP antes de pagar
- Desde el lado del admin, necesito poder exportar el reporte de facturación a PDF y a Excel. También quiero ver un gráfico de las películas más vistas por semana y por mes, y cuál es el producto del candy bar que más se vende.
- Log de actividad en el panel de admin: quién creó qué función, quién modificó un precio, quién validó
un QR. Todo debe quedar registrado con fecha y hora.
