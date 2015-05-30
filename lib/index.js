(function (dust) {

  dust.helpers = dust.helpers || {};

  dust.helpers.stringify = function (chunk, context, bodies, params) {
    var value = dust.helpers.tap(params.value, chunk, context),
        space = parseInt(dust.helpers.tap(params.space, chunk, context)) || 0;

    try {
      return chunk.write(JSON.stringify(JSON.parse(value), null, space));
    } catch (e) {
      return chunk.write('value is not valid JSON');
    }
  };

  if (typeof exports !== 'undefined') {
    module.exports = dust;
  }

}(
  typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust
));
