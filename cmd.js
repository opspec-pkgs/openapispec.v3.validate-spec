const openapi3 = require('swagger2openapi/validate.js');
const fs = require('fs');
const jsYaml = require('js-yaml');

const definition = jsYaml.safeLoad(fs.readFileSync('/definition', 'utf8'));

openapi3.validate(definition, {}, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
});