const openapi3 = require('swagger2openapi/validate.js');
const fs = require('fs');
const jsYaml = require('js-yaml');

const spec = jsYaml.safeLoad(fs.readFileSync('/spec', 'utf8'));

openapi3.validate(spec, {}, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
});