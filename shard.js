// sharding.js
const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./app.js');
const moment = require('moment');

Manager.spawn(1);
Manager.on('launch', shard => console.log(`- Spawned shard ${shard.id} -`));
console.log(`-- ${moment().utc().format('MMMM Do')}, ${moment().utc().format('hh:mm a')} --`);