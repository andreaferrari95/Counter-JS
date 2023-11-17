<h1 align="center">
    <a href="https://andreaferrari95.github.io/Counter-JS/">Counter using JavaScript
    </a>
</h1>

<p align="center">
  <i align="center">Try it now and have some fun!🚀</i>
</p>

<h4 align="center">
  <a href="https://github.com/andreaferrari95/Counter-JS/tree/main">
    <img src="https://raw.githubusercontent.com/andreaferrari95/Counter-JS/main/assets/img/Screenshot.png" alt="Screenshot of the counter" style="height: 20px;">
  </a>
  <a href="https://github.com/amplication/amplication/graphs/contributors">
    <img src="https://img.shields.io/github/contributors-anon/amplication/amplication?color=yellow&style=flat-square" alt="contributors" style="height: 20px;">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img src="https://img.shields.io/badge/apache%202.0-blue.svg?style=flat-square&label=license" alt="license" style="height: 20px;">
  </a>
  <br>
  <a href="https://amplication.com/discord">
    <img src="https://img.shields.io/badge/discord-7289da.svg?style=flat-square&logo=discord" alt="discord" style="height: 20px;">
  </a>
  <a href="https://twitter.com/amplication">
    <img src="https://img.shields.io/twitter/follow/amplication?style=social" alt="twitter" style="height: 20px;">
  </a>
  <a href="https://www.youtube.com/c/Amplicationcom">
    <img src="https://img.shields.io/badge/youtube-d95652.svg?style=flat-square&logo=youtube" alt="youtube" style="height: 20px;">
  </a>
</h4>



<p align="center">
    <img src="https://github.com/amplication/amplication/assets/73097785/c7ed2bbc-8954-46a1-a520-91a4711a9320.png" alt="dashboard"/>
</p>

## Introduction

`Amplication` is a robust, open-source development platform designed to revolutionize the creation of scalable and secure Node.js applications. We eliminate repetitive coding tasks and deliver production-ready infrastructure code, meticulously tailored to your specifications and adhering to industry best practices.

Our user-friendly interface fosters seamless integration of APIs, data models, databases, authentication, and authorization. Built on a flexible, plugin-based architecture, Amplication allows effortless customization of the code and offers a diverse range of integrations.

With a strong focus on collaboration, Amplication streamlines team-oriented development, making it an ideal choice for groups of all sizes, from startups to large enterprises. Our platform enables you to concentrate on your business logic, while we handle the heavy lifting.

Experience the fastest way to develop Node.js applications with Amplication.

<details open>
<summary>
 Features
</summary> <br />

<p align="center">
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/9908a54a-7d49-4dbb-8f5e-3e99b7cadf30.png" alt="apis"/>
&nbsp;
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/ff406403-27f7-42b5-9569-d011432f16e5.png" alt="data-models"/>
</p>

<p align="center">
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/62c8d533-8475-4290-abc8-c433c095e68a.png" alt="plugins"/>
&nbsp;
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/9c67a354-a06f-47d1-a118-ab89b775bf91.png" alt="microservices"/>
</p> 
    
<p align="center">
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/a51e166b-07ec-4c80-99ed-8792a81c4064.png" alt="own-your-code"/>
&nbsp;
    <img width="49%" src="https://github.com/amplication/amplication/assets/73097785/1cca9721-b8d6-425b-a1a9-d10d3cdcc9b8.png" alt="customize-code"/>
</p>
    
</details>

## Usage 

To get started with Amplication, the hosted version of the product can be used. You can get started immediately at [app.amplication.com](https://app.amplication.com). After the login page, you will be guided through creating your first service. The [website](https://amplication.com) provides an overview of the application, additional information on the product and guides can be found in the [docs](https://docs.amplication.com).

<details>
<summary>
  Tutorials
</summary> <br />

- [To-do application using Amplication and Angular](https://docs.amplication.com/tutorials/angular-todos)
- [To-do application using Amplication and React](https://docs.amplication.com/tutorials/react-todos)
</details>

## Development

Alternatively, instead of using the hosted version of the product, Amplication can be run locally for code generation purposes or contributions - if so, please refer to our [contributing](#contributing_anchor) section.

<details open>
<summary>
Pre-requisites
</summary> <br />
To be able to start development on Amplication, make sure that you have the following prerequisites installed:

###

- Node.js
- Docker
- Git
</details>

<details open>
<summary>
Running Amplication
</summary> <br />

> **Note**
> It is also possible to start development with GitHub Codespaces, when navigating to `< > Code`, select `Codespaces` instead of `Local`. Click on either the `+`-sign or the `Create codespace on master`-button.

Amplication is using a monorepo architecture - powered by <a href="https://nx.dev">Nx Workspaces</a> - where multiple applications and libraries exist in a single repository. To setup a local development environment the following steps can be followed:

**BEFORE** you run the following steps make sure:
1. You have typescript installed locally on you machine ```npm install -g typescript```
2. You are using a supported node version (check `engines` `node` in the [package.json](./package.json))
3. You are using a supported npm version (check `engines` `npm` in the [package.json](./package.json))
4. You have `docker` installed and running on your machine


1. Clone the repository and install dependencies:
```shell
git clone https://github.com/amplication/amplication.git && cd amplication && npm install
```

2. Run the setup script, which takes care of installing dependencies, building packages, and setting up the workspace:
```shell
npm run setup:dev
```

3. Option 1: Running the required infrastructure - view infrastructure component logs


```shell
npm run docker:dev
```
3. Option 2: Running the required infrastructure - run the infrastructure components in background
```shell
npm run docker:dev -- -d
```

4. Apply database migrations
```shell
npm run db:migrate:deploy
```

5. To start developing, run one or more of the applications available under `serve:[application]` scripts of the package.json.

```shell
# running the server component
npm run serve:server

# running the client component
npm run serve:client

# running the data-service-generator component
npm run serve:dsg

# running the git-pull-request-service component
npm run serve:git

# running the plugin-api component
npm run serve:plugins
```

> **Note**
> In order to run the Amplication client properly, both the client and server need to be started by the `npm run serve:[application]` command, as well as an additional component for development on a specific component.

The development environment should now be set up. Additional information on the different application components can be found under packages/`[application]`/README.md file. Happy hacking! 👾
</details>

## Resources

- **[Website](https://amplication.com)** overview of the product.
- **[Docs](https://docs.amplication.com)** for comprehensive documentation.
- **[Blog](https://amplication.com/blog)** for guides and technical comparisons.
- **[Roadmap](https://amplication.com/#roadmap)** to see what features will be added in the future.
- **[Discord](https://amplication.com/discord)** for support and discussions with the community and the team.
- **[GitHub](https://github.com/amplication/amplication)** for source code, project board, issues, and pull requests.
- **[Twitter](https://twitter.com/amplication)** for the latest updates on the product and published blogs.
- **[YouTube](https://www.youtube.com/c/Amplicationcom)** for guides and technical talks.

<a name="contributing_anchor"></a>
## Contributing

Amplication is an open-source project. We are committed to a fully transparent development process and highly appreciate any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as a part of the Amplication community. Please refer to our [contribution guidelines](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md).

- Bug Report: If you see an error message or encounter an issue while using Amplication, please create a [bug report](https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+bug&template=bug.yaml&title=%F0%9F%90%9B+Bug+Report%3A+).

- Feature Request: If you have an idea or if there is a capability that is missing and would make development easier and more robust, please submit a[feature request](https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+feature+request&template=feature.yml).

- Documentation Request: If you're reading the Amplication docs and feel like you're missing something, please submit a [documentation request](https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A+docs&template=documentation-request.yaml&title=%F0%9F%93%96+Documentation%3A+).

Not sure where to start? Join our discord and we will help you get started!

<a href="https://amplication.com/discord"><img src="https://amplication.com/images/discord_banner_purple.svg" /></a>
