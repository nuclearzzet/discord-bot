const fs  = require('fs');

module.exports = (client) => {
    const load = (dirs) => {
        commandFiles = fs.readdirSync(`./src/commands/${dirs}`).filter(file => file.endsWith('.js'));
            
        for (const file of commandFiles){
            command = require(`..commands/${dirs}/${file}`);
            client.commands.set(command.data.name, command)
        }
    }
    ['info', 'moderation', 'owner'].forEach(dir =>{
        load(dir);
    })
}