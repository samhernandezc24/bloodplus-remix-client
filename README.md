# BloodPlus Frontend con Remix Framework de React 💿

Remix es un framework web full-stack para construir aplicaciones web modernas
con React, diseñado para ayudar a los desarrolladores a crear aplicaciones de
alto rendimiento y
[renderizadas del lado del servidor](https://remix.run/docs/en/main/pages/technical-explanation#server-framework)
con facilidad.

Remix utiliza la renderización del lado del servidor para generar HTML en el
servidor y enviarlo al cliente. Lo que significa mejor carga y más amigable para
el SEO, además de brindar una mejor experiencia de usuario para los usuarios con
conexiones a Internet más lentas.

---

## ¿Por qué Remix?

> Remix permite crear experiencias de usuario increíbles y seguir estando
> contento con el código que has escrito para conseguirlo.

Si quieres saber más sobre este framework de React, checa su
[documentación](https://remix.run/docs).

---

# Requisitos

Para trabajar con un framework de JavaScript como React vas a necesitar algunas
cosas instaladas primero:

- Versión de [Node.js](https://nodejs.org/es/download) (14.17.0+)
- npm 7 o superior
- [VSCode](https://code.visualstudio.com/download) es una opción para escribir
  código

---

# Primeros pasos

Primero tendrás que clonar el repositorio, honestamente les recomiendo darle
seguimiento clonando el repositorio, pero también pueden desde la GUI de Github
descargar el ZIP del proyecto.

1. Crea un nuevo directorio en tu máquina local.

2. Si han manejado comandos desde la terminal procedan a abrir el directorio
   donde quieren poner el proyecto desde la terminal para poder clonar el
   proyecto con el comando
   `git clone -b main https://github.com/samhernandezc24/bloodplus-remix-client.git`.
   Si no saben usar la terminal en dado caso deberían aprender a usar la
   terminal ya que la mayoría del tiempo estarás ejecutando comandos desde el
   CLI.

3. En caso de que no obtengas los últimos cambios realizados en el repositorio,
   ejecuta el siguiente comando: `git pull origin main`.

Para trabajar en el modo de desarrollo necesitaras ejecutar algunos comandos
desde la terminal:

```bash
npm install
npm run dev
```

Esto inicia su aplicación en modo de desarrollo, la reconstrucción de los assets
en los cambios de archivo.

> Nota: Abra un navegador de incógnito cuando pruebe su proyecto (Ctrl + Shit +
> N)

- Puede acceder a la aplicación de cliente en http://localhost:3000

---

## Fly Setup

1. [Instalar `flyctl`](https://fly.io/docs/getting-started/installing-flyctl/)

2. Regístrate e inicia sesión en Fly

```bash 
flyctl auth signup
```

3. Configurar Fly. Puede que te pregunte si quieres desplegar, di que no ya que aún no has construido la aplicación.

```bash
flyctl launch
```

---

## Producción

Para construir la aplicación para producción ejecutamos los siguientes comandos:

```bash
npm run deploy
```

Puedes ejecutar `flyctl info` para obtener la url y la dirección ip de tu
servidor.

Echa un vistazo a [fly docs](https://fly.io/docs/getting-started/node/) para más
información.

---
