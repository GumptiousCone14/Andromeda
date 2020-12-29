// index.js
const Discord = require('discord.js');
const moment = require('moment');
// sharding.js
const Manager = new Discord.ShardingManager('./app.js');

Manager.spawn(3);
Manager.on('launch', shard => console.log(`- Spawned shard ${shard.id} --- ${moment().utc().format('MMMM Do')}, ${moment().utc().format('hh:mm a')} --`));

