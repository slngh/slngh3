const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'سلام عليكم') {
    message.channel.send('وعليكم السلام!');
  }

}); 
 client.on('message', message => {
  if (message.content === 'كيف الحال') {
    message.channel.send('والله ابشرك بخير!');
  }

}); 
client.on('message', message => {
  if (message.content === 'والله ابشرك بخير!') {
    message.channel.send('انت كيفك');
  }

}); 

client.on('message', message => {
  if (message.content === 'احبك') {
    message.channel.send('انا اكثر ي عمري');
  }

}); 
client.on('message', message => {
  if (message.content === 'وش شغلتك ؟') {
    message.channel.send('اشتغل في روم المعلم سلنقح');
  }

}); 
client.on('message', message => {
  if (message.content === 'خليك محترم!') {
    message.channel.send('ابشر طال عمرك');
  }

}); 
client.on('message', message => {
  if (message.content === 'كل تبن') {
    message.channel.send('خليك محترم');
  }

}); 
client.on('message', message => {
  if (message.content === 'كل زق') {
    message.channel.send('عيب');
  }

}); 
client.on('message', message => {
  if (message.content === 'يا هطف') {
    message.channel.send('عن الغلط');
  }

}); 

client.login('NTE1NzExMjA4MTU4OTIwNzA2.DtpFSw.Ds16bGkhLIemCrnccnyOBco0mko');
