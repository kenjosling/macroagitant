bot.dialog('Show.Help', [
    function (session) {
        if (session.message && session.message.value) {
            session.endDialog(); 
            switch (session.message.value.choice) {
                case 'Submit.Feedback':
                    builder.Prompts.text(session, 'TODO: Write code to submit feedback');
                    break;                
              }            
            return;
        }
        else
        {
            var msg = new builder.Message(session);
            var about = new About(process.env.BotName, process.env.IconUrl, process.env.CompanyName, process.env.BotVersion, process.env.UserGuideUrl);
            msg.addAttachment(about.toCard());
            session.send(msg);
        }
    }
]).triggerAction({
    matches: 'Show.Help',
}).cancelAction('cancel', "Fair enough.", {
    matches: /^(cancel|goodbye|quit|exit)/i
})