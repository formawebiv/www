1-Mediante Js creamos un header y un footer que va a ser el mismo en todas las secciones que vayamos añadiendo a la web. Al estar ambos "{ mode: 'closed' }", cuando llames a los elementos que hay dentro desde otro Js no se van a modificar. Para que eso ocurriera tendria que ser "{ mode: 'open' }". 

2-En este caso todos los apartados del menu y del pie de pagina van a la misma pagina principal de formularios. 

3-Tambien determinamos la situación y colocación en el Html mediante el header y footer component

4-A continuacion insertamos un formulario y añadimos validaciones con JS para que solo pueda aceptar, por ejemplo, un maximo o minimo de letras, solo números, una dirección de un correo especifico...

5-Añadimos una fuente al formulario.

5-Por último preparamos los elementos de la pagina con CSS (los que no hayamos ajustado ya con JS) para que sea responsiva y accesible según lo necesitemos.