const { RichEmbed } = require("discord.js")

exports.run = async (client, message, params) => {
    client.fcs.ensure(message.author.id, {
        "X": "",
        "Y": "",
        "OR": "",
        "AS": "",
        "U": "",
        "M": "",
        "US": "",
        "UM": ""
    })

    if (params[0] === "X") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "X", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#000080")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "Y") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "Y", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#800000")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "OR") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "OR", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#FF0000")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "AS") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "AS", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#0000FF")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "S") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "S", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#FFFF00")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "M") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "M", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#800080")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "US") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "US", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#C0C0C0")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return

    } else if (params[0] === "UM") {
        let friend = params.slice(0).join(" ")

        client.fcs.setProp(message.author.id, "UM", friend)

        const embed = new RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#000000")
            .setThumbnail(message.author.avatarURL)
            .setDescription(friend)
            .setFooter("Added by " + message.author.username, message.author.avatarURL)
            .setTimestamp()
        client.channels.get("PLACE_CHANNEL_ID_HERE").send(embed)
        message.channel.send("Successfully set your TSV!")
		
        const role = message.guild.roles.find(r => r.id == "PLACE_ROLE_ID_HERE")

        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role.id)
        } else return
    }
}

exports.conf = {
    aliases: [],
    permLevel: 0,
    nsfw: false
}

exports.help = {
    name: "tsvadd",
    description: "Sets your TSV",
    usage: "+tsvadd [tsv]"
}