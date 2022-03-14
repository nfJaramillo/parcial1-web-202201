# Documentacion

Inicialmente en el front, al hacer click en view details, se revisará que no este vacío el input, de estarlo se mostrará una alerta al usuario. 

Posteriormente se enviará hara un fetch al back (Ej. localhost:3000/api/users/ray_benigno). Este posteriormente hara dos get a las 2 api usando el usuario que recibe por parámetro. Luego concatenará los json resultantes de ambas peticiones y los devolverá al front.



Luego el front revisara si la petición fallo, revisando si contiene o no un atributo Friends. SI falla le muestra una alerta al usuario y termina, asumiendo que el usuario no existía.

Si no falla, procederá a leer y renderizar los datos en el front, eliminando los duplicados en la lista de plays.

Ej de la respuesta del back:

[
    {
        "friends": [
            "maranda_kjos",
            "jacquetta_hoelscher",
            "garth_coto",
            "leonor_mattis"
        ],
        "uri": "/friend-detail?username=ray_benigno"
    },
    {
        "plays": [
            "35365798-810B-21AD-2F5F-674DD159849E",
            "35365798-810B-21AD-2F5F-674DD159849E",
            "83D55EE4-852A-14E8-8EAA-88B127585823"
        ],
        "uri": "/plays-detail?username=ray_benigno"
    }
]


