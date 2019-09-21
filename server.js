const request = require('request');

const getInfo = () => {
  const url = 'https://api.eosnewyork.io/v1/chain/get_info';
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) reject(error);
      resolve(body);
    });
  });
};

getInfo()
  .then(body => {
    let myBody = JSON.parse(body);
    console.log(myBody);
    const getBlock = () => {
      var options = {
        method: 'POST',
        url: 'https://api.eosnewyork.io/v1/chain/get_block',
        headers: { accept: 'application/json' },
        body: `{ "block_num_or_id":${myBody.head_block_num} }`
      };
      return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
          if (error) reject(error);
          resolve(body);
        });
      });
    };

    getBlock()
      .then(body => {
        const block = JSON.parse(body);
        //Do what you need here
        console.log(block);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
