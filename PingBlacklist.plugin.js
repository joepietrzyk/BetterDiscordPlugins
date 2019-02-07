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
                        users: [],
                        guilds: []
                    };
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
                    // TODO: check for updates
                    // load user settings
                    this.settings = PluginUtilities.loadSettings(this.getName(), this.defaultSettings);
                    this.contextMenuListener = this.onContextMenu.bind(this);
                    document.addEventListener("contextmenu", this.contextMenuListener);
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
                    // Ensure Zeres Library is loaded correctly
                    this.initialized = false;
                    if (global.ZeresPluginLibrary) this.initialize();
                    else  document.getElementById('zeresLibraryScript').addEventListener("load", () => { this.initialize(); });
                 }

                 onStop() 
                 {
                    // this is a place holder, will be removed
                    PluginUtilities.saveSettings(this.getName(), this.settings);
                    document.removeEventListener("contextmenu", this.contextMenuListener);
                 }


                /**
                 * Adds the right click functionality
                 */
                 onContextMenu()
                 {
                    // TODO: force people to use normalized classes
                    //const $menu = $(".da-contextMenu")[0];
                    const $menu = $(".da-contextMenu");
                    if ($menu.length == 0) return;
                	 
                    // See if they right clicked on a user by looking for "Add Note" 
                    
                    let $menuItems = $menu.find("div");
                    if ($menuItems.length == 0) return;
                    
                    let preItem = null;
                    
                    $menuItems.each((i, item) => {
                    	$(item).find("span").each((j, child) => {
                    		if (child.innerHTML == "Add Note") {
                    			preItem = item;
                    		}
                    	});
                    });
                    // return if not a server
                    if (preItem == null) return;
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