# Especificación de Requerimientos del Sistema (ERS) - Gestión para cine

**Alumno:** Gricel Diaz Zabala  
**Materia:** Programación IV  
**Comisión:** 141  
**Docente:** Ricardo Gastón Plazas  
**Fecha de entrega:** 13 de octubre de 2026

---

## Actores del Sistema

- **Cliente Anónimo:** Usuario no registrado que puede visualizar la cartelera, buscar películas y comprar entradas/candy.
- **Cliente Registrado:** Usuario con cuenta en el sistema. Además de comprar, posee un perfil donde acumula puntos, canjea beneficios, guarda un historial ("Mis películas") y posee saldo/crédito a favor.
- **Empleado:** Personal del cine encargado de validar los accesos (entradas) y entregar los productos del candy bar mediante el escaneo o ingreso manual de códigos QR.
- **Administrador:** Usuario con acceso total (ABM) para gestionar la cartelera, salas, productos, combos, reglas de fidelización, cupones y visualización de reportes/logs de auditoría.

---

## Requerimientos Funcionales (RF)

### Módulo de Autenticación y Perfil

- **RF-01 (Registro):** El sistema debe permitir el registro de usuarios recopilando estrictamente: mail, nombre, apellido, fecha de nacimiento, tipo de sangre, color de ojos y cantidad de días de vacaciones por año.
- **RF-02 (Login Local):** El sistema debe permitir la autenticación de usuarios por mail y contraseña.
- **RF-03 (Login OAuth):** El sistema debe permitir el inicio de sesión adicional mediante OAuth (Google/GitHub).
- **RF-04 (Gestión de Roles):** El sistema debe identificar el rol (Cliente, Empleado, Admin) al iniciar sesión y restringir el acceso a los módulos correspondientes.

### Módulo de Cartelera y Búsqueda

- **RF-05 (Inicio):** La página principal debe destacar las 3 películas más vendidas y los combos especiales de candy bar vigentes.
- **RF-06 (Buscador):** El sistema debe incluir un buscador que permita buscar películas por nombre y filtrar por género.
- **RF-07 (Detalle de Película):** Cada película debe mostrar su horario, duración, imagen, nombre, sinopsis y clasificación de edad (ATP, +13, +18).
- **RF-08 (Reseñas):** Los usuarios deben poder ver reseñas (puntuación en estrellas y comentario corto) y un promedio de calificación antes de comprar la entrada.
- **RF-09 (Próximamente):** Sección con estrenos de las próximas semanas, donde el usuario pueda activar alertas de inicio de venta.

### Módulo de Salas y Funciones

- **RF-10 (Gestión de Funciones):** El sistema debe soportar funciones 2D, 3D, 4D o 5D, en idioma original subtitulado o doblado al castellano.
- **RF-11 (Mapa de Butacas):** Al comprar, el sistema debe mostrar un mapa de butacas que permita seleccionar asientos, resaltando visualmente las filas adaptadas (J y K) y las butacas VIP (R, S y T).

### Módulo de Compra y Candy Bar

- **RF-12 (Venta Unificada):** El usuario debe poder adquirir entradas y productos/combos del candy bar en una misma operación.
- **RF-13 (Generación de Entrada):** Finalizada la compra, el sistema debe generar un PDF con los datos y un código QR.
- **RF-14 (Preventa):** El administrador debe poder habilitar ventas anticipadas 7 días antes del estreno con un precio promocional configurable por película. Una vez finalizada la preventa promocional de 7 días, el precio de la entrada vuelve automáticamente a su valor normal.
- **RF-15 (Cancelación):** El usuario registrado puede cancelar su compra para recibir crédito en su cuenta a favor para futuras operaciones, este crédito puede usarse junto con otros métodos de pago.

### Módulo de Fidelización (Clientes Registrados)

- **RF-16 (Historial "Mis Películas"):** El usuario verá un listado visual de las películas que ya vio, con fechas, pósters y su calificación personal.
- **RF-17 (Puntos):** El sistema mostrará en el perfil los puntos acumulados y el historial de canjes realizados.
- **RF-18 (Cupones):** El sistema aplicará cupones de descuento, incluyendo uno del 20% (u otro monto configurable) en la primera compra, y cupones exclusivos para usuarios mayores de 50 años.

### Módulo de Empleados (Validación)

- **RF-19 (Lector QR):** El empleado debe poder escanear QRs o ingresar su código manualmente para validar entradas y entrega de candy.

### Módulo de Administración

- **RF-20 (ABM General):** Gestión de películas, salas, programación de horarios (incluyendo creación de funciones por patrón de días/horarios), productos de candy y combos.
- **RF-21 (Reglas Comerciales):** Configuración del valor de las recompensas en puntos, porcentajes de descuento y habilitación de preventas.
- **RF-22 (Reportes):** Visualización de facturación diaria, cantidad de entradas vendidas y gráficos de películas más vistas (semana/mes) y productos estrella. Posibilidad de exportar a PDF y Excel.
- **RF-23 (Log de Actividad):** Registro inmutable en el panel admin que audite con fecha y hora: creación de funciones, modificación de precios y validación de QRs.

---

## Reglas de Negocio (RN)

- **RN-01 (Limpieza de sala):** Debe existir un bloque de 30 minutos obligatorio entre la finalización de una función y el inicio de la siguiente en la misma sala.
- **RN-02 (Asignación Automática):** No puede haber superposición de horarios en una misma sala. El sistema debe asignar la sala de forma automática para asegurar esta restricción.
- **RN-03 (Cancelación):** Las cancelaciones se aceptarán exclusivamente hasta 2 horas antes de la función. No hay reintegro de dinero, solo devolución en saldo (crédito). El crédito puede usarse junto con otros métodos de pago en futuras compras.
- **RN-04 (Puntuación):** La equivalencia de acumulación es estricta: 1 ARS gastado = 1 punto. Los puntos son intransferibles entre usuarios.
- **RN-05 (Uso de QR):** El código QR posee estados independientes (ingreso a sala consumido / candy entregado). Cada concepto se consume una única vez de manera independiente.
- **RN-06 (Restricción de Edad):** Usuarios menores de 13 o 18 años no pueden comprar para películas +13 o +18 respectivamente. El sistema debe emitir una advertencia de acompañamiento adulto.
- **RN-07 (Distribución de Butacas Inclusivas):** Las filas J y K son adaptadas y tendrán una distribución estricta de 2, 10 y 2 butacas.
- **RN-08 (Decisión sobre Primer Descuento):** El cupón de la primera compra por registro se aplica al valor total del carrito (entradas + candy).
- **RN-09 (Validador de butacas):** El sistema debe validar de manera nativa que las butacas elegidas en una compra sean contiguas.
- **RN-10 (Distribución de las butacas):** La forma estándar de las salas cuenta con 20 filas numeradas con letras, organizadas en 3 columnas que contienen 4, 20 y 4 butacas respectivamente.

---

## Requerimientos No Funcionales (RNF) - Requisitos de Cursada

- **RNF-01 (Frontend):** La aplicación debe estar desarrollada en Angular 22 utilizando standalone components, signals y control flow.
- **RNF-02 (Backend y Base de Datos):** La persistencia y servicios backend se resolverán utilizando Supabase (PostgreSQL, Auth).
- **RNF-03 (Transacción Atómica):** La compra completa (butacas + cobro + generación de QR + aplicación de cupón + impacto de puntos) debe ejecutarse en una transacción atómica mediante RPC o Edge Functions de Supabase.
- **RNF-04 (PWA):** La plataforma debe cumplir con los estándares de Progressive Web App (instalabilidad, Service Worker activo y caché offline de la cartelera de películas).
- **RNF-05 (Tiempo Real):** El seguimiento de la ocupación de butacas concurrentes durante la compra debe desarrollarse utilizando Supabase Realtime.
- **RNF-06 (Seguridad y Privacidad):** Se debe implementar Row Level Security (RLS) en Supabase para garantizar que cada usuario acceda exclusivamente a su información.
- **RNF-07 (Archivos):** Las imágenes (pósters, productos del candy, avatares) se gestionarán mediante Supabase Storage.
- **RNF-08 (Despliegue):** El proyecto debe desplegarse con URL funcional en plataformas como Vercel, Netlify o Firebase Hosting, configurando las variables de entorno adecuadamente. El código estará en GitHub junto con un archivo README que detalle la arquitectura.
- **RNF-09 (Notificaciones Push):** El sistema debe disparar notificaciones automáticas 24 hs y 2 hs antes de la función (incluyendo sala, hora y QR), un aviso al momento de validar el QR en el cine, y envío de alertas de los estrenos en la sección "Próximamente".
- **RNF-10 (Usabilidad UX/UI):** Interfaz clara y fácil de navegar para clientes, empleados y administradores. Se debe contar con un selector de fecha y hora ágil que evite scroll excesivo y calendarios engorrosos.

---

## Historias de Usuario / Casos de Uso (Flujos Principales)

- **HU-01 (Flujo de Compra):** Como cliente (anónimo o registrado) quiero seleccionar mi película, horario, butacas contiguas y productos del candy bar en un único flujo de compra para obtener mi entrada digital (PDF + QR) de forma rápida.
- **HU-02 (Validación QR):** Como empleado quiero escanear el QR del cliente para registrar su ingreso a la sala de forma independiente al retiro de su comida, para evitar que pierda su derecho al candy si entra al cine primero (y viceversa).
- **HU-03 (Flujo de Cancelación):** Como cliente registrado quiero cancelar mi compra en la sección de mis reservas (hasta 2 hs antes del inicio) para recuperar automáticamente el valor de la misma en forma de créditos en mi perfil.

---

## Matriz de Trazabilidad (Tecnologías VS Requerimientos)

| Concepto de Cursada                                          | Requerimiento Asignado / Impacto                                  |
| :----------------------------------------------------------- | :---------------------------------------------------------------- |
| **Angular 22 (Standalone, Signals)**                         | RNF-01 (Core estructural de todo el proyecto)                     |
| **Supabase (Auth, OAuth)**                                   | RF-02, RF-03                                                      |
| **Supabase (Realtime)**                                      | RNF-05, RF-11 (Bloqueo y visualización de butacas en vivo)        |
| **Supabase (Storage)**                                       | RNF-07 (Posters de películas, productos del candy)                |
| **Supabase (RPC / Edge Functions)**                          | RNF-03 (Transacción de compra unificada e integral)               |
| **Row Level Security (RLS)**                                 | RNF-06, RF-16 (Privacidad del perfil y saldo del cliente)         |
| **Lazy Loading (/admin, /empleado)**                         | Estructuración modular para usuarios en RF-04, RF-19 y RF-20      |
| **Guards**                                                   | RF-04 (Protección de rutas según si es Admin, Empleado o Cliente) |
| **Pipes** (duracion, precioArs, edad)                        | Formateo en vista de datos de RF-07, RF-12 y RN-06                |
| **Directivas Propias** (appHighlightButaca, appRestrictEdad) | RF-11 (Resaltado visual J/K/VIP) y RN-06 (Control de edad)        |
| **Validador de butacas contiguas**                           | RN-09                                                             |

---

## Fuera de Alcance

- **Mapa Interactivo del Cine:** Se solicitó un plano general del edificio mostrando cómo llegar a la sala asignada tras la compra, pero no cuenta con aprobación del cliente y queda descartado para esta iteración. _(Solo se implementará el mapa de butacas interior por sala)._
