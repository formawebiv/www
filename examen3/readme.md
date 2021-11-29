Mediante Js creamos un header y un footer que va a ser el mismo en todas las secciones que vayamos añadiendo a la web. Al estar ambos "{ mode: 'closed' }", cuando llames a los elementos que hay dentro desde otro Js no se van a modificar. Para que eso ocurriera tendria que ser "{ mode: 'open' }". En este caso todos los apartados del menu y del pie de pagina van a la misma pagina principal de formularios.

A continuacion insertamos distintos tipos de formulario y añadimos validaciones para que solo puedan aceptar, por ejemplo, un maximo o minimo d eletras, solo números, una dirección de un correo especifico...

Por ultimo preparamos los elementos de la pagina con CSS (los que no hayamos ajustado ya con JS) para que sea responsiva y accesible según lo necesitemos.