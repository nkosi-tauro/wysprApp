
<h1 align="center">Wysprapp</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/nkosi-tauro/wysprapp?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/nkosi-tauro/wysprapp?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/nkosi-tauro/wysprapp?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/nkosi-tauro/wysprapp?color=56BEB8">

</p>


<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/nkosi-tauro" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Simple React application that fetches mock data from [jsonplaceholder](https://jsonplaceholder.typicode.com/).
I kept the application quite rudimentary

### Observations
- React Context.
  - For the Authentication I have gone with a simple implementation that requires no route checking. If I were to implement this, I think having/creating a custom Auth context to keep track of the login/out states would be much beneficial
- Caching.
  - This app could benefit from further improvements to data fetching. At the moment, I implemented pagination to prevent slow loading due to the amount of items(5000) its was fetching and trying to display at once. This solves the issue in our case but if we needed to scale, a cache would come in handy.
  
### Limitation(s)
- 1 user at a time
    - Due to the way the simple authentication system is working, only 1 user can be created at a time.
    - Use the delete account button once logged in to delete the user

## :rocket: Technologies ##

The following tools were used in this project:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/nkosi-tauro/wysprapp

# Access
$ cd wysprapp

# Install dependencies
$ yarn

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.


Made with :heart: by <a href="https://github.com/nkosi-tauro" target="_blank">Nkosilathi Tauro</a>

&#xa0;

<a href="#top">Back to top</a>
