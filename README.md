# Toy Story - Personajes

Aplicación recreativa que adivinara el personaje que piensas de la serie de películas de Toy Story. Esta aplicación te evalua mediante un test totalmente adaptable.

# Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

- NodeJS versión 10.16 o superior
- NPM versión 5.6 o superior

### Instalación (desarrollo) 🔧

Tal vez suene muy obvio pero primero clone el repositorio

```
    git clone https://github.com/EleomarPL/toy-story-character
```

Instale las dependencias. Las depedencias ya se encuentran implicitas en el Package del proyecto, solo basta ejecutar la siguiente instrucción:

```
    npm i
```

Después cree la base de datos, ejecutando la siguiente instrucción:

```
    npm run create-db
```

En desarrollo, que es la rama _main_, electron carga las vistas mediante un servidor. Por lo antes mencionado primero levante el servidor de react:

```
    npm run start-react
```

Una vez levantado y comprobado el funcionamiento del servidor para las vistas, se ejecuta la siguiente instrucción:

```
    npm run start-electron
```

## Despliegue 📦

En el proyecto se encuentra la rama Production, y dentro de esta se encuentra el proyecto listo para producción, de nada.

## Construido con 🛠️

- ReactJS
- ElectronJS
- Bootstrap 5

Al usar Electron, se implemento las interfaces visuales mediante paginas web, lo que significa que se aplicaron las tenologias HTML, CSS y JavaScript.

## Contribuyendo 🖇️

> Las Pull Request son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustaría cambiar.
> Asegúrese de actualizar las pruebas según corresponda.

## Autores ✒️

- **Eleomar Pedro Lorenzo**
- **Heraclio Galván Torres**
- **Héctor Hugo González Rodríguez**
- **Martín Monjaraz Almaraz**

## Expresiones de Gratitud 🎁

Si el proyecto te gusto, o te sirvio para aprender nuevas cosas, puedes agradecernos de la siguiente forma:

- Coméntale a otros sobre este proyecto 📢
- Regala una estrella a este proyecto ⭐
- Da las gracias públicamente 🤓.
