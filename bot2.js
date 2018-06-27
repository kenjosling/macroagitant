var fs = require('fs');

class About {
    constructor(botName, iconUrl, companyName, botVersion, userGuideUrl) {
        this.BotName = botName,
        this.IconUrl = iconUrl,
        this.CompanyName = companyName,
        this.BotVersion = botVersion,
        this.UserGuideUrl = userGuideUrl
    }    
    toCard() {
        var schema = fs.readFileSync(__dirname + '/cards/about.json', 'utf8');
        var attributes = Object.keys(this);
        for (var i = 0; i < attributes.length; i++) {
            schema = schema.replace('%'+attributes[i]+'%', Object.values(this)[i]);
        }
        var card = {'contentType': 'application/vnd.microsoft.card.adaptive'}
        card.content = JSON.parse(schema)
        return card;
    }
};
module.exports = About;