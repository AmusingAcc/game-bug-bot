const client = new Discord.Client();
let prefix = ';';

client.on('message', async msg => {

  if(msg.content === `${prefix}resources`) {
  
      msg.delete();
      const dmEmbed = new MessageEmbed()
        
        .setColor(0xf5dd42)
        .setTitle('Best Resources for Sending Proof')
        .setDescription('If you don`t know how to convert images or videos to links, keep reading. This message will tell you some of the best websites/apps for screenshoting/recording proof')
        .addField('Website(s)', '[imgur](https://imgur.com/) - Imgur lets you convert images, videos,and gifs to links')
        .addField('Application(s)', '[ShareX](https://getsharex.com/) - ShareX is a great application for recording videos and/or taking screenshots, once you set it up, it can also convert the videos/screenshots to links and copy the links to your clipboard\n\n[Gyazo](https://gyazo.com/) - Gyazo is great for taking screenshots and/or videos, it can instantly convert them to links which you can use to embed, or use for proof')
        
      msg.author.send(dmEmbed);
    };
});
