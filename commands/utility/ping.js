const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName('hey').setDescription('yeah'),
    async execute(interaction){
        await interaction.reply('Yeah!')
    }
}