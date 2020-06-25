const logger = require('@wh-iterabb-it/sst').logger;
const format = require('@wh-iterabb-it/sst').format;
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const pkjson = require('../package.json');

const app = express()

// adding helmet to enhance api security
app.use(helmet());

// using bodyParser to parse json bodies into js objects
app.use(bodyParser.json());

/** set up cors middleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, Origin, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

logger.info('turning on app...');

  /**
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   * @param {Next} next - Express Next object
   */
  app.get('/', (req, res, next) => {
    const li = [
      'You will make a fortune with your friend.',
      'Everything will now come your way.',
      'You have at your command the wisdom of the ages.',
      'You have a deep appreciation of the arts and music.',
      'The great joy in life is doing what people say you cannot do.',
      'Invest in Crypto, I see great profits in your future.', // btc=$725 ETH=$7.21 Nov 27, 2016
      'When you squeeze and orange, orange juice comes out - because that is whats inside',
      'Every exit is an entrance to new experiences',
      'Today is the tomorrow we worried about yesterday',
      'There are no limitations to the mind except those we aknowledge.',
      'Old dreams never die they just get filed away.',
      'If you want the rainbow, you have to tolerate the rain.',
      'Humans are born to live and not prepare to live',
      'To courageously shoulder the responsibility of ones mistake is character.',
      'measure twice, cut once',
      'keep cool, never freeze -mayonnaise jar',
      'always underpromise and overdeliver',
      'Never half-ass 2 things. Whole ass 1 thing.',
      'Courtesy is contagious',
      'Sometimes when you get denied at the front door, the back door is unlocked',
      'Constant grinding can turn an iron rod into a needle.',
      'Avoid Senseless contradictions with others.',
      'Too many people volunteer to carry the stool when its time to move the piano',
      'You will always get what you want through your charm and personality.',
      'Luck sometimes visits a fool, but it never sits down with him.',
      'Determination is the wake-up call to the human will.',
      'You are given the chance to take part in an exciting adventure.',
      'A fool is one who values advice spoken from stars and chance.',
      'Birds are entangled by their feet and men by their tongues.',
      'Starting down the right path is pointless, if you are just going to take a wrong turn at the first fork.',
      '404 fortune not found',
      'Great works are performed not by strength, but by perserverance',
      'All men should try to learn before they die what they are running from, and to, and why.',
      'Our deeds determine us, as much as we determine our deeds.',
      'Its amazing how much good you can do if you dont care who gets the credit.',
      'Its better to be alone sometimes.',
      'Let the deeds speak.',
      'Lucky Numbers 4, 8, 15, 16, 23 and 42',
      'Never give up. Always find a reason to keep trying.',
      'Accept your past without regrets. Handle your present with confidence. Face your future without fear.',
      'Don’t be discouraged, because every wrong attempt discarded is another step forward.',
      'Never give up, until you are getting paid to',
      'Dont spend time. Invest it.',
      'Sometimes the path less traveled is more muddy',
      'Your loyalty is a virtue, but not when its welded with blind stubbornness.',
      'Life is too short for time cards',
      'Every lunch is a chance to reinvent the meal',
      'You are here to create not merely survive',
      'Enthusiasm is as contagious as apathy',
      'Alas, the onion you eat is some one elses water lily',
      'Why ask for advice if you wont take any',
      'The possibility of a career change is near.', // nsfw?
      'Consolidate rather than expand your business in the near future.', // nsfw
      'I am sorry, too high to respond', // nsfw?
      'Dont blow out other peoples candles, it wont make yours brighter.', // nsfw?
      'in hindsight, \'Oh well\', is better than \'what if.\'', // nsfw?
      'Sometimes its not enough to know what things mean, sometimes you have to know what things dont mean.',
      'I’ve come to believe that all my past failure and frustration were actually laying the foundation for the understandings that have created the new level of living I now enjoy.',
      'The invariable mark of wisdom is to see the miraculous in the common.',
      'Just as a snake sheds its skin, we must shed our past over and over again.',
      'In the end, it’s not the years in your life that count. It’s the life in your years.', // i think lincon
      'You get in life what you have the courage to ask for.', // i think Oprah Winfrey
      'Life isn’t about finding yourself. Life is about creating yourself.', //George Bernard Shaw
      'Sometimes a hypocrite is nothing more than a person in the process of changing.',// Dalinar Kholin.
    ];
    res.status(200).send({ data: [li[Math.floor(Math.random() * li.length)]] });
  });

  /**
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   * @param {Next} next - Express Next object
   */
  app.get('/health', (req, res, next) => {
    const time = process.uptime();
    const uptime = format.toDDHHMMSS(time + '');
    res.status(200).send({ data: {uptime: uptime, version: pkjson.version} });
  });

  // heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
  var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });

  module.exports = server;
