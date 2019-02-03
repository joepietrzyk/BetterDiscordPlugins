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
    return !global.ZeresPluginLibrary ? class {
        getName() { return config.info.name;    }
        getDescription() {  return config.info.description;    }
        getVersion() {  return config.info.version;     }
        getAuthor () {  config.info.authors.map(a => a.name).join(", ");    }
        load() {  window.BdApi.alert("Library Missing", "You dun goofed");}
        start() {} 
        stop() {}
    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            return class PingBlacklist {
                 getName() { return "Ping Blacklist";    }
        getDescription() {  return "Ignores pings from users on your blacklist.";    }
        getVersion() {  return "0.0.2";     }
        getAuthor () {  return "Joseph Pietrzyk";    }
        load() {  window.BdApi.alert("It's on!","You did alright!");}
        start() {} 
        stop() {}
            };
        };
        return plugin(Plugin, Api);
    })(["yo", "lo"]);
})();