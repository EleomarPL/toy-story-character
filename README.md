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

## Despliegue 📦

Para generar el instalador del proyecto, sigua las siguientes instrucciones:

1. Muevase a la rama _react_ y ejecute el script:

```
    npm run build-prod
```

2. Muevase a la rama _electron_ y ejecute el script:

```
    npm run create-db
```

3. Muevase a la rama _production_ y ejecute el script:

```
    npm install -g node-gyp
```
4. Instale el entorno para Visual C++: instalando ya sea [Visual Studio Build Tools](hhttps://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16) (usando la carga de trabajo "Visual C++ build tools") o [Visual Studio 2019 Community](https://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=Community&rel=16) (usando la carga de trabajo "Desktop Development with C++")

5. Inicie cmd y ejecute:

```
    npm config set msvs_version 2019
```

6. Y por ultimo, ejecute el siguiente script, para generar el instalador del proyecto (que será generado en la carpeta out):

```
    npm run make
```

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
