//META{"name":"PingBlacklist", "website": "https://github.com/joepietrzyk/BetterDiscordPlugins", "source": "https://github.com/joepietrzyk/BetterDiscordPlugins/blob/master/PingBlacklist.plugin.js"}*//

var PingBlacklist = (() => {
    const config = {"info" :{
        "name": "PingBlacklist",
        "authors": [
        {"name": "Joseph Pietrzyk"}], 
        "version": "0.0.2", 
        "description": "Ignores pings from users on your blacklist.", 
        "github":"https://github.com/joepietrzyk/BetterDiscordPlugins", 
        "github_raw": "https://github.com/joepietrzyk/BetterDiscordPlugins/blob/master/PingBlacklist.plugin.js"}};
    // Ensure they have the correct dependcies
    return !global.ZeresPluginLibrary ?
    // send them a dummy plugin if they don't that directs them to install
    class {
        getName() { return config.info.name;    }
        getDescription() {  return config.info.description;    }
        getVersion() {  return config.info.version;     }
        getAuthor() {  config.info.authors.map(a => a.name).join(", ");    }
        load() {  window.BdApi.alert("Library Missing",`The library plugin needed for ${config.info.name} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);}
        start() {} 
        stop() {}
    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            const {Patcher, WebpackModules, DiscordModules, PluginUtilities} = Api;
            return class PingBlacklist extends Plugin {
                 constructor()
                 {
                    super();
                    // this is the settings that will be loaded the first time the app starts up
                    this.defaultSettings = {
                        users: []
                    };
                    // TODO:
                 }

                 /**
                  * Executes when the plugin is started up
                  */
                 onStart()
                 {
                    // load the settings
                    this.settings = PluginUtilities.loadSettings(this.getName(), this.defaultSettings);
                 }

                 onStop() 
                 {
                    // this is a place holder, will be removed
                    PluginUtilities.saveSettings(this.getName(), this.settings);
                 }

                 getSettingsPanel()
                 {
                    var html = $("<h2>");
                    html.html(this.getName());
                    $("<p>").html("Blacklisted users:").appendTo(html);
                    if (this.settings.users.length != 0) {
                        this.settings.users.forEach((user) => {
                            $("<p>").html(`${user}`).appendTo(html);
                        });
                    }
                    return html[0];
                 }
            };
        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();