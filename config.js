var config = function() {
  switch(process.env.NODE_ENV || 'development'){
      case 'development':
          return {
            port: 5000
          };

      case 'production':
          return {
            port: 80
          };

      default:
          return {};
  }
}

module.exports = config();
