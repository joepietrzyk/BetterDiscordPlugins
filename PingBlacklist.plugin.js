//META{"name":"PingBlacklist", "website": "https://github.com/joepietrzyk/BetterDiscordPlugins", "source": "https://github.com/joepietrzyk/BetterDiscordPlugins/blob/master/PingBlacklist.plugin.js"}*//

var PingBlacklist = (() => {
    const config = {"info" :{
        "name": "PingBlacklist",
        "authors": [
        {"name": "Joseph Pietrzyk"}], 
        "version": "0.0.3", 
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
                /**
                 * Initializes values used by the plugin.  Note: move all functional
                 * initialization code to the initialize method
                 */
                 constructor()
                 {
                    super();
                    // this is the settings that will be loaded the first time the app starts up
                    this.defaultSettings = {
                        users: []
                    };

                 
                // uses random letters to not conflict with other plugins
                    this.defaultClasses = {
                        label: "label",
                        guild: "guild",
                        guildSelected: "guildSelected",
                        chat: "chat",
                        searchBar: "search-bar",
                        search: "search",
                        channels: "channels",
                        channelName: "name",
                        channelNameUnreadText: "nameUnreadText",
                        contextMenu: "contextMenu",
                        item: "item",
                        itemToggle: "itemToggle"
                    };


                    // TODO: add support for normalized classes
                    /*
                    this.normalizedClasses = {
                        label: "label",
                        guild: "guild",
                        guildSelected: "guildSelected",
                        chat: "chat",
                        searchBar: "search-bar",
                        search: "search",
                        channels: "channels",
                        channelName: "name",
                        channelNameUnreadText: "nameUnreadText",
                        contextMenu: "contextMenu",
                        item: "item",
                        itemToggle: "itemToggle"
                    };
                    */
                    this.classes = this.defaultClasses;
                }

                 /**
                  * This is called after Zeres library loads.
                  * Use this method to perform any initialization that relies on
                  * Zeres' library.
                  */
                 initialize()
                 {
                    if (this.intialized) return;
                    this.initialized = true;
                    // check for updates
                    PluginUtilities.checkForUpdate(this.getName(), this.getVersion(), config.github_raw);
                    // load user settings
                    this.settings = PluginUtilities.loadSettings(this.getName(), this.defaultSettings);

                 }

                 /**
                  * Saves your settings after you've added or removed an entry
                  */
                 saveSettings()
                 {
                    PluginUtilities.saveSettings(this.getName(), this.settings);
                 }

                 /**
                  * Executes when the plugin is started up
                  */
                 onStart()
                 {
                    // Ensure the library loaded successfully
                    // (https://github.com/planetarian/BetterDiscordPlugins/issues/2)
                    // modified from https://github.com/rauenzi/BetterDiscordAddons/blob/master/Plugins/BlurNSFW/BlurNSFW.plugin.js
                    this.initialized = false;
                    if (global.ZeresPluginLibrary) this.initialize();
                    //else  libraryScript.addEventListener("load", () => { this.initialize(); });
                    //window.setTimeout(this.initialize.bind(this), 5000);
                    
                 }

                 onStop() 
                 {
                    // this is a place holder, will be removed
                    PluginUtilities.saveSettings(this.getName(), this.settings);
                 }


                /**
                 * Adds the right click functionality
                 */
                 observer()
                 {
                    // TODO

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