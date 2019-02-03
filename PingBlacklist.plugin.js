//META{"name":"PingBlacklist", "website": "https://github.com/joepietrzyk/BetterDiscordPlugins", "source": "https://github.com/joepietrzyk/BetterDiscordPlugins/blob/master/PingBlacklist.plugin.js"}*//

class PingBlacklist {
    getName() { return "Ping Blacklist";    }
    getDescription() {  return "Ignores pings from all users on your blacklist.";    }
    getVersion() {  return "0.0.2";     }
    getAuthor () {  return "Joseph Pietrzyk";    }
    
    start () 
    {
        // bdPluginStorage.set("PingBlacklist", "blacklist", {"users":[]});
        this.blacklist = bdPluginStorage.get("PingBlacklist", "blacklist");
    }

    checkBlacklist()
    {
        // TODO
    }

    getSettingsPanel() 
    {
        /* var panel = $("<form>").addClass("form").css("width", "100%");
        this.generateSettings(panel);
        alert(panel[0]); */
        return "<h2>Coming soon!</h2>";
    }

    generateSettings(panel) 
    {
        new PluginSettings.ControlGroup("Settings", () => {
            this.saveSettings();
        }, {
            shown: true
        }).appendTo(panel).append(
        new PluginSettings.Checkbox("Test", "This is a test.",
         true, (checked) => {
                if (checked) {
                    alert("checked");
                }
           }));
    }

    onMessage() {}
    onSwitch() {}
    load() {}
    unload() {}
    stop() {}
}