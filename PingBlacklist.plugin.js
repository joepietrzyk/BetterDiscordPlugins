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
            return class PingBlacklist extends Plugin {
                 constructor()
                 {
                    super();
                    // TODO:
                 }

                 /* Executes when the plugin is started up
                  *
                  */
                 onStart()
                 {
                    // this.settings = PluginUtilities.loadSettings();
                 }

                 onStop() {}

                 getSettingsPanel()
                 {
                    var html = `
                        <h2>PingBlacklist</h2>
                        <p>Coming soon!</p>
                    `;
                    return html;
                 }
            };
        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();