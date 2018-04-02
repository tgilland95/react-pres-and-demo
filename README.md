# IS Reactjs presentation & demo

## Helpful links

*   React js docs [reactjs](https://reactjs.org)
*   The Spectacle core API [spectacle](https://github.com/FormidableLabs/spectacle/blob/master/README.md).
*   Create a new slide in two ways
    *   copy another slide's file and rename the file & exported component
    *   use the snippet to make a new slide
*   One-off styling should be done inside the slide, them relating styles are in the [theme](/presentation/presentation/index.js)

## Overview

### demo

```bash
    # cd into '/demo'
    # installs all of the needed dependencies found in ./demo/package.json
    $ yarn
    # starts the webpack-dev-server and transpiles/serves your code
    $ yarn start
    # open up http://localhost:3000/
```

### presentation

```bash
    # cd into '/presentation'
    # installs all of the needed dependencies found in ./presentation/package.json
    $ yarn
    # starts the webpack-dev-server and transpiles/serves your code
    $ yarn start
    # open up http://localhost:4000/
```

#### slide snippet

*   add the snippet
    *   open the command palette (ctrl-shift-p)
    *   search & select "Configure User Snippets"
    *   select either global or javascript
    *   add the following, to use it type "newslide" and enter

```json
        "new spectacle slide": {
        "body": [
            "import React from \"react\"",
            "import { Heading, Text, Quote, Slide } from \"spectacle\"\n",
            "export const ${1:Name} = () => (",
            "    <Slide>",
            "          <Heading size={1} fit caps lineHeight={1} textColor=\"secondary\">",
            "               Spectacle Slide",
            "          </Heading>",
            "          <Text margin=\"10px 0 0\" size={",
            "               1",
            "          } fit bold>",
            "               Awesome slides start here",
            "          </Text>",
            "     </Slide>",
            ")"
        ],
        "prefix": "newslide"
    }
```
