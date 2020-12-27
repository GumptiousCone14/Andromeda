# Andromeda

[![GitHub Stars](https://img.shields.io/github/stars/Andromeda/node-chat.svg)](https://github.com/GumptiousCone14/Andromeda) [![GitHub Issues](https://img.shields.io/github/issues/IgorAntun/node-chat.svg)](https://github.com/IgorAntun/node-chat/issues) [![Current Version](https://img.shields.io/badge/version-0.0.1-red.svg)](https://github.com/GumptiousCone14/Andromeda) [![Live Demo](https://img.shields.io/badge/demo-ofline-green.svg)](https://igorantun.com/chat)

## Features
```
It currently has these features:
- Kicking users
- Banning users
- Ping command
- Eval command
- Purge
- Say command (says what you tell it to say)
- Stats
- Change settings command
- Embed command (basic, using RichEmbed)
- Deleted message logs
- Invite link filter
- And much more
```

## Upcoming Features
```
- Change of database
```

## Installation

First of all, clone this repository.

This bot requires Node.js v8+ (and npm) to run.

Also, please make a channel for mod logs in your Discord server.

Once you have that done, edit the config.json.example file and then rename the file to config.json.

## Example Configuration
```
{
  "token": " Bot Token here",
  "ownerId": "Your ID",
  "bugReportChannelId": "bug Report Channel Id",
  "feedbackChannelId": "feedback Channel Id",
  "serverLogId": "server Log Id",
  "apiKeys": {
    "catApi": "your_API_key_here",
    "googleApi": "Bot Google API Key"
  }
}
```

After that, you can install the dependencies and start the bot


**You can use the command line**

```bash
$ npm install 
$ npm start
```

**OR** start the bot using the `Start.bat` for Windows. _These files may be outdated._

**NOTE:** Running the bot with a process manager (like PM2) is recommended.

>This bot must be run on a Discord bot account. Do __NOT__ try to run this on a normal user account. This is against the Discord Terms of Service.

>Also, do __NOT__ play with the `eval` or `exex` command. You have been warned.

## Changes to the Code

You may change code if needed under the following conditions:

For the dashboard, you may change the theme, wording, design, links, etc. however I will not accept any bug reports coming from this. You will also agree to **not remove the copyright notice in the footer. You may add your name here, however, you must keep the original wording used**.

**ALL** copyright notices and credits **must** be kept as is, not edited in any way (except for adding your own name) and not removed.

## Contributing

Want to contribute?

Andromeda is written in Discord.js. If you want to add a feature or work on the code, feel free make a pull request and your code might be accepted.

## Credits


## Privacy:

Please read the `PRIVACY.md` file.