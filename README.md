# Micro front-end with Webpack

## About the project

Project created to study the **Webpack** tool together with the **Module Federation** of webpack to simulate a **micro-frontend architecture**.

## Technologies used

-   HTML
-   CSS
-   JavaScript
-   ReactJS
-   Node JS
-   Webpack

## Install and Run

First you need to have Node JS installed on your machine.
After installing Node JS:

```README
clone the repository
git clone https://github.com/pedrogutierresbr/micro-front-end-com-webpack.git

Access the project folder in the terminal/cmd
cd packages
```

After that, you will need to install the dependencies in each project (app | contact | home), as the intention was to create different applications that could communicate with each other:

```
In the terminal execute:


For project App
cd app -> to access the App project (project responsible for grouping the others) 

npm install -> To install project dependencies


For project Home 
cd home -> to access the App project (project responsible for grouping the others) 

npm install -> To install project dependencies


For project Contact
cd contact -> to access the App project (project responsible for grouping the others) 

npm install -> To install project dependencies
```

After installing the dependencies in each project, you will need to separately run the server for each project, so that they run in the development environment:

```
In the terminal execute:


For project App
npm run dev -> To run the project in port: 9012


For project Home 
npm run dev -> To run the project in port: 9013


For project Contact
npm run dev -> To run the project in port: 9014
```

The project will be available on your local port: 9012 *(localhost:9012)*

## Build

The build process has to be performed for each project separately, as they are different applications.

```
In the terminal execute:


For project App
npm run build -> A 'dist' folder will be created with the files inside


For project Home 
npm run build -> A 'dist' folder will be created with the files inside


For project Contact
npm run build -> A 'dist' folder will be created with the files inside
```

## Author

Pedro Gabriel Gutierres de Faria
See my [LinkedIn](https://www.linkedin.com/in/pedro-gutierres/)
