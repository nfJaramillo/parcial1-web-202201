# Documentacion

Inicialmente en el front, al hacer click en view details, se revisará que no este vacío el input, de estarlo se mostrará una alerta al usuario. 

Posteriormente se enviará hara un fetch al back (Ej. localhost:3000/api/users/ray_benigno). Este posteriormente hara dos get a las 2 api usando el usuario que recibe por parámetro. Luego concatenará los json resultantes de ambas peticiones y los devolverá al front.

Luego el front revisara si la petición fallo, revisando si contiene o no un atributo Friends. SI falla le muestra una alerta al usuario y termina, asumiendo que el usuario no existía.

Si no falla, procederá a leer y renderizar los datos en el front, eliminando los duplicados en la lista de plays.
