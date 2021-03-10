## Debug no VSCode
```javaScript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Depurar Projeto",
            "protocol": "inspector",
            "args": ["${workspaceRoot}\\src\\main.ts"],
            "cwd": "${workspaceRoot}",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "internalConsoleOptions": "openOnSessionStart"
        }
    ]
}
```

## Description

Implementação exemplo de uma API usando [Nest](https://github.com/nestjs/nest)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

  Nest is [MIT licensed](LICENSE).
