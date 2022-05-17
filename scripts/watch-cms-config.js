const yaml = require('js-yaml');
const fs = require('fs');
const jsonConfig = require('../public/admin/config.json');

const jsonToYaml = async () => {
  const output = yaml.dump(jsonConfig);
  fs.writeFileSync('public/admin/config.yml', output);
};

jsonToYaml();
