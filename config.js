var config = function() {
  switch(process.env.NODE_ENV || 'development'){
      case 'development':
          return require('./config/development.js');
      case 'production':
          return require('./config/production.js');
      default:
          return {}; // need to throw exception
  }
}

module.exports = config();
