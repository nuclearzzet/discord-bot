const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('kick')
            .setDescription('To kick a user from your server'),

    async execute(interaction){
        if(interaction.user.permissions.has(PermissionsBitField.Flags.KickMembers)){
            await interaction.channel.send("Not implemented yet, but checks for permission");
        }else{
            await interaction.channel.send("You don't have the permission to use this command");
        }
        
    }
}