const outdated = process.versions.node.split('v')[1] < 16.6;

if (outdated) {
  console.log('Please Upgrade to Node Version 16.6 or higher | https://nodejs.org');

  return setTimeout(process.exit, 5000);
}

require('./server/server');


const { Client, GatewayIntentBits } = require('discord.js');
const Enmap = require('enmap');

const { bypassed, replace, getFiles } = require('./utils/utils');
const { token, prefix, 'developer-id': dev } = require('./config.json');

const { manager, guilds } = Enmap.multi(['manager', 'guilds']);
const events = ['channelCreate', 'channelDelete', 'roleCreate', 'roleDelete', 'guildBanAdd', 'guildMemberRemove'];

// GUILD, GUILD_BANS, GUILD_MESSAGES, GUILD_MEMBERS
const client = new Client({ intents: [1 << 0, 1 << 1, 1 << 2, 1 << 9] });

client.on('messageCreate', (message) => {
  if (message.content == '^antinuke') {
    //or for no reply do message.channel.send("pong!");
    message.reply("Antinuke Status:✅");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == '^ai enable') {
    //or for no reply do message.channel.send("pong!");
    message.reply("AI enabled!");
  } else {
    console.log('AI enabled')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == '^ai disable') {
    //or for no reply do message.channel.send("pong!");
    message.reply("AI disabled!");
  } else {
    console.log('AI disabled')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'chat beef') {
    //or for no reply do message.channel.send("pong!");
    message.reply("OOOOHHHH SHITTTTTTT");
message.reply("ITS CHAT BEEF EVERYONE OH FUCK THEY SMACKIN SHI IN CHAT");
  } else {
    console.log('AI disabled')
  }
})

client.on('messageCreate', (message) => {
    if (message.content == 'gain') {
        //or for no reply do message.channel.send("pong!");
        message.reply("discord.gg/gain");
        message.reply("inv ur friends");
    } else {
        console.log('invite in chat sent')
    }
})

client.on('messageCreate', (message) => {
  if (message.content == 'b4b') {
    //or for no reply do message.channel.send("pong!");
    message.reply("lets go band 4 band");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'unbackdoorable') {
    //or for no reply do message.channel.send("pong!");
    message.reply("wsg nigga");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'jaylen') {
    //or for no reply do message.channel.send("pong!");
    message.reply("yo a bitch nigga callin u <@373094449531715586>");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'darnel') {
    //or for no reply do message.channel.send("pong!");
    message.reply("<@1207080372978843719>");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'bullet') {
    //or for no reply do message.channel.send("pong!");
    message.reply("<@411312494582169610>");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'hi') {
    //or for no reply do message.channel.send("pong!");
    message.reply("wsg nigga");
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == '^antinuke whitelist') {
    //or for no reply do message.channel.send("pong!");
    message.reply("Loading current whitelisted members.");
message.reply("<@373094449531715586>")
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'nigga what') {
    //or for no reply do message.channel.send("pong!");
message.reply("https://cdn.discordapp.com/attachments/1336200448163577911/1337734692413247488/Screenshot_2025-02-08_053946.png?ex=67a88604&is=67a73484&hm=4b2731408420758ed16c306bed8a3f6b9f932ce88a146de1bab238590ead1090&")
  } else {
    console.log('ria jus got posted sob')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'wock') {
    //or for no reply do message.channel.send("pong!");
message.reply("<:05wock:1337064010943565854>")
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'nuke') {
    //or for no reply do message.channel.send("pong!");
message.reply("nuke a salad fat ass nigga")
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'kali') {
    //or for no reply do message.channel.send("pong!");
message.reply("<@1202027428742955068> kali smell like shittttttttt")
message.reply("why the fuck did you say her name bro now it smells like shit")
message.reply("fuck bro i told u bout this shit")
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'jordan') {
    //or for no reply do message.channel.send("pong!");
message.reply("<:jordan:1337722239688114197>")
  } else {
    console.log('not hi')
  }
})

client.on('messageCreate', (message) => {
    if (message.content == 'Jordan') {
        //or for no reply do message.channel.send("pong!");
        message.reply("<:jordan:1337722239688114197>")
    } else {
        console.log('not hi')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == 'JORDAN') {
        //or for no reply do message.channel.send("pong!");
        message.reply("<:jordan:1337722239688114197>")
    } else {
        console.log('not hi')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == '^guild') {
        //or for no reply do message.channel.send("pong!");
        message.reply("Guild ID: 1336177227477287023")
    } else {
        console.log('not hi')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == 'juju') {
        //or for no reply do message.channel.send("pong!");
        message.reply("https://cdn.discordapp.com/attachments/1336200448163577911/1337977748576276530/Untitledvideo-MadewithClipchamp5-ezgif.com-video-to-gif-converter.gif?ex=67a96861&is=67a816e1&hm=c289aec74c0aa9d64b8cd415ce33bb882d25eb2f97d8ee3efd2122c9bb05496a&")
    } else {
        console.log('not hi')
    }
})

client.on('messageCreate', (message) => {
  if (message.content == 'fuck u') {
    //or for no reply do message.channel.send("pong!");
    message.reply("nigga fuck u");
message.reply("stupid bitch")
message.reply("you is a cuck bitch")
message.reply("i'd beat the shit outta u")
message.reply("ngl your a mistake")
message.reply("nigga you walk with passports on your feet.")
message.reply("nigga your neck do a 360 spin everytime you talk.")
message.reply("nigga your grandma did a front flip on the dick")
message.reply("your broke nigga ur a peon sob")
message.reply("nigga ur grandma tiptoes like a dancing cockroach")
  } else {
      console.log('this nigga catchin my fuckin fade in chat')
      console.log("this nigga getting punched on in chat fuck wrong wit this nigga")
  }
})

client.on('messageCreate', (message) => {
  if (message.content == 'fuck you') {
    //or for no reply do message.channel.send("pong!");
    message.reply("nigga fuck u");
message.reply("stupid bitch")
message.reply("you is a cuck bitch")
message.reply("i'd beat the shit outta u")
message.reply("ngl your a mistake")
console.log("this nigga getting punched on in chat fuck wrong wit this nigga")
message.reply("nigga you walk with passports on your feet.")
message.reply("nigga your neck do a 360 spin everytime you talk.")
message.reply("nigga your grandma did a front flip on the dick")
message.reply("your broke nigga ur a peon sob")
  } else {
    console.log('this nigga catchin my fuckin fade in chat')
  }
})


const main = async (entry, history, event, guild) => {
  if (!guilds.get(guild, 'enabled')) return;

  const id = entry.executor.id;

  if (!history) {
    manager.set(event, {
      [guild]: {
        [id]: [Date.now()]
      }
    });
  } else if (bypassed(...history)) {
    const embed = { footer: { text: 'jaylen was here .gg/gain' }, timestamp: new Date() };
    const server = client.guilds.cache.get(guild);
    const member = await server.members.fetch(id);

    try {
      await member.ban();

      embed.title = 'Banned ' + member.user.tag;
      embed.description = `Banned \`${member.user.tag}\` for firing multiple \`${replace(event)}\` events.`;
      embed.color = 0x00FF00;
    } catch {
      embed.title = 'Error';
      embed.description = `Unable to ban \`${member.user.tag}\` for firing multiple \`${replace(event)}\` events.`;
      embed.color = 0xFF0000;
    } finally {
      client.guilds.cache.get(guild).fetchOwner().then(owner => {
        owner.send({ embeds: [embed] }).catch(() => { });
      });
    }
  } else {
    manager.push(event, Date.now(), `${guild}.${id}`);
  }
}

client.on('ready', () => {
    console.log('Bot Online');
client.user.setActivity('discord.gg/gain', { type: 'STREAMING', url: "https://twitch.tv/gain" });
});

  client.guilds.cache.forEach(guild => {
    if (!guilds.get(guild.id)) guilds.set(guild.id, { enabled: true });
  });


client.on('messageCreate', message => {
  if (message.author.bot || message.channel.type === 'DM' || !message.content.startsWith(prefix)) return;

  const args = message.content.trim().split(/ +/);
  const command = args[0].slice(prefix.length).toLowerCase();

  if (getFiles('./commands').includes(command)) {
    const file = require(`./commands/${command}`);

    if (
      (file.type === 1 && message.author.id !== message.guild.ownerId) ||
      (file.type === 0 && message.author.id !== dev)) return;

    file.run(message, args, guilds);
  }
});


for (const event of events) {
  manager.ensure(event, {});

  client.on(event, async (obj) => {
    const id = obj.guild.id;
    const log = await (obj.guild ? obj.guild.fetchAuditLogs({ limit: 1, type: replace(event) }) : obj.fetchAuditLogs({ limit: 1, type: replace(event) }));
    const entry = log.entries.first();
  
    if (!entry) return;
  
    const history = manager.get(event, `${id}.${entry.executor.id}`);
    main(entry, history, event, id);
  });
}

for (const event of getFiles('./events'))
  client.on(event, guild => require('./events/' + event).run(guild, guilds));

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

setTimeout(function () {
  console.log('This will still run.');
}, 500);

var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(80);
client.login(token);

