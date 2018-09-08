module.exports = {
  bundle: {
    vendor: {
      scripts: [
        './node_modules/jquery/dist/jquery.slim.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        './node_modules/jquery-validation/dist/jquery.validate.min.js',
        './node_modules/jquery-serializejson/jquery.serializejson.min.js',
      ],
      styles: [],
      options: {
        rev: false,
        maps: false
      }
    }
  }
};