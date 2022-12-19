

# Individual Project - Henry Dogs

<img height="200" src="./dog.png" />

## Project Objectives

- Build an App using React, Redux, Node and Sequelize.
- Affirm and connect the concepts learned in the race.
- Learn best practices.
- Learn and practice the GIT workflow.
- Use and practice testing.



Currently the required versions are:

- __Node__: 12.18.3 or higher
- __NPM__: 6.14.16 or higher

To check which version you have installed:

```bash
node -v
npm -v
```



Versions:

- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3






```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Replace `postgresuser` and `Postgrespassword` with your own credentials to connect to postgres. This file will be ignored on github upload, as it contains sensitive information (credentials).

Additionally, it will be necessary to create from psql a database called `dogs`

The `client` content was created using: Create React App.

## statement

The general idea is to create an application in which you can see different dog breeds along with relevant information about them using the external api [the dog api](https://thedogapi.com/) and from it be able, among other things:

- Search dogs
- Filter / Sort them
- Add new dogs

__IMPORTANT__: To be able to use this external API it is necessary to create an account to obtain an API Key that should then be included in all the requests we make to rawg simply by adding `?api_key={YOUR_API_KEY}` at the end of each endpoint. Add the key in the `.env` file so that it is not uploaded to the repository for security reasons and use it from there.

__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

### Únicos Endpoints/Flags que pueden utilizar

- GET <https://api.thedogapi.com/v1/breeds>
- GET <https://api.thedogapi.com/v1/breeds/search?q={raza_perro}>

### Requerimientos mínimos

A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

__IMPORTANTE__: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Botones/Opciones para filtrar por:
  - Temperamento
  - Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
  - Orden alfabético
  - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.

__IMPORTANT__: Within the Main Route, both the dog breeds brought from the API and those from the database must be shown, but it is NOT allowed to store dog breeds from the API in the database, but only can save those created from the form.

__Dog Breed Detail Path__ - Must contain

- [ ] The fields shown in the main route for each breed (image, name and temperament)
- [ ] Height
- [ ] Weight
- [ ] Years of life

__Dog Breed Creation Path__ - Must contain

- [ ] A form __controlled with JavaScript__ with the following fields:
  - Name
  - Height (Differentiate between minimum and maximum height)
  - Weight (Differentiate between minimum and maximum weight)
  - Years of life
- [ ] Possibility to select/add one or more temperaments
- [ ] Button/Option to create a new breed of dog

> It is a requirement that the creation form is validated with JavaScript and not only with HTML validations. They can add the validations they consider. For example: That the name of the breed cannot contain numbers or symbols, that the minimum weight/height cannot be greater than the maximum and vice versa, etc.
## Base de datos

The database model must have the following entities (Those properties marked with an asterisk must be mandatory):

- [ ] Breed with the following properties:
  -ID *
  - Name *
  - Height *
  - Weight *
  - Years of life
- [ ] Temperament with the following properties:
  -ID
  - Name

The relationship between both entities must be many-to-many since a dog breed can have several "temperaments" simultaneously and, in turn, a "temperament" can correspond to multiple different dog breeds. For example, the `pug` breed is docile, intelligent and sociable (among others). But at the same time, there are other dog breeds that are also sociable or intelligent.

__IMPORTANT__: Think about how to model the IDs of the dog breeds in the database. There are different correct ways to do it but keep in mind that when we click on one, it can come from the API or from the Database, so when it shows its detail there should be no ambiguity as to which one should be displayed. For example, if in the API the breed `Pug` has id = 1 and in our database we create a new breed `Henry Pug` with id = 1, see how to differentiate between them when we want to access its details.

## Backend

A server must be developed in Node/Express with the following paths:

__IMPORTANT__: It is not allowed to use the filtering, ordering and paging provided by the external API, all these functionalities have to be implemented by you.

- [ ] __GET /dogs__:
  - Get a list of dog breeds
  - It should return only the data necessary for the main route
- [ ] __GET /dogs?name="..."__:
  - Get a list of dog breeds that contain the word entered as query parameter
  - If there is no breed of dog, display an appropriate message
- [ ] __GET /dogs/{idBreed}__:
  - Get the detail of a particular dog breed
  - You must bring only the data requested in the dog breed detail route
  - Include associated temperaments
- [ ] __POST /dogs__:
  - Receives the data collected from the controlled form of the dog breed creation path by body
  - Create a dog breed in the database related to their temperaments
- [ ] __GET /temperaments__:
  - Get all possible temperaments
  - In the first instance they must obtain them from the external API and save them in their own database and then use them from there
