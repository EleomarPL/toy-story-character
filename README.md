# Toy Story - Personajes

Aplicaci贸n recreativa que adivinara el personaje que piensas de la serie de pel铆culas de Toy Story. Esta aplicaci贸n te evalua mediante un test totalmente adaptable.

# Comenzando 馃殌

Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas.

### Pre-requisitos 馃搵

- NodeJS versi贸n 10.16 o superior
- NPM versi贸n 5.6 o superior

### Instalaci贸n (desarrollo) 馃敡

Tal vez suene muy obvio pero primero clone el repositorio

```
    git clone https://github.com/EleomarPL/toy-story-character
```

Instale las dependencias. Las depedencias ya se encuentran implicitas en el Package del proyecto, solo basta ejecutar la siguiente instrucci贸n:

```
    npm i
```

Despu茅s cree la base de datos, ejecutando la siguiente instrucci贸n:

```
    npm run create-db
```

En desarrollo, que es la rama _main_, electron carga las vistas mediante un servidor. Por lo antes mencionado primero levante el servidor de react:

```
    npm run start-react
```

Una vez levantado y comprobado el funcionamiento del servidor para las vistas, se ejecuta la siguiente instrucci贸n:

```
    npm run start-electron
```

## Despliegue 馃摝

En el proyecto se encuentra la rama Production, y dentro de esta se encuentra el proyecto listo para producci贸n, de nada.

## Construido con 馃洜锔?

- ReactJS
- ElectronJS
- Bootstrap 5

Al usar Electron, se implemento las interfaces visuales mediante paginas web, lo que significa que se aplicaron las tenologias HTML, CSS y JavaScript.

## Contribuyendo 馃枃锔?

> Las Pull Request son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustar铆a cambiar.
> Aseg煤rese de actualizar las pruebas seg煤n corresponda.

## Autores 鉁掞笍

- **Eleomar Pedro Lorenzo**
- **Heraclio Galv谩n Torres**
- **H茅ctor Hugo Gonz谩lez Rodr铆guez**
- **Mart铆n Monjaraz Almaraz**

## Expresiones de Gratitud 馃巵

Si el proyecto te gusto, o te sirvio para aprender nuevas cosas, puedes agradecernos de la siguiente forma:

- Com茅ntale a otros sobre este proyecto 馃摙
- Regala una estrella a este proyecto 猸?
- Da las gracias p煤blicamente 馃.
