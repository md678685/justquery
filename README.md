# justquery
A JC3MP server package that let you query info about your server.

## Installation
1. Go to your server package folder.
2. Do `git clone https://github.com/md678685/justquery.git`.
3. Go inside the new `justquery` directory and do `npm install` or `yarn install`.
4. Edit `config.json` as needed.

## Usage
Restart your Just Cause 3 MP server or reload the package with `restart_package justquery` if your server was already running.
Go to the url `http://<server IP>:4204/v0`. The server will return you data in JSON format.

## Dependencies
* [Express](https://github.com/expressjs/express), a web framework for Node.js.
  
## Feedback and Contributing

Please submit issues and pull requests on the GitHub repo.

If you want to contribute (feel free, there's a lot I want to add!):

1. Fork the repo.
2. Make your changes and commit them.
3. Submit a PR on the GitHub repo.

If you want to report a bug or suggest a feature, just open a new issue on GitHub.

## Contributors
* [zoski](https://github.com/zoski), who wrote this README.

## License

Justquery is released under the MIT license.
