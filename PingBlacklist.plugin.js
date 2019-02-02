//META{"name":"PingBlacklist", "website": "https://github.com/joepietrzyk/BetterDiscordPlugins", "source": "https://github.com/joepietrzyk/BetterDiscordPlugins/blob/master/PingBlacklist.plugin.js"}*//

var PingBlacklist = function() {};

PingBlacklist.prototype.checkBlacklist = function () {
	var self = this;

}

PingBlacklist.prototype.getSettingsPanel = function () {
    /* var panel = $("<form>").addClass("form").css("width", "100%");
    this.generateSettings(panel);
    alert(panel[0]); */
    return "<h2>Coming soon!</h2>";
};

PingBlacklist.prototype.generateSettings = function(panel) {
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
};

PingBlacklist.prototype.onMessage = function () {
};
PingBlacklist.prototype.onSwitch = function () {};
PingBlacklist.prototype.start = function () {
    // bdPluginStorage.set("PingBlacklist", "blacklist", {"users":[]});
    this.blacklist = bdPluginStorage.get("PingBlacklist", "blacklist");
};
PingBlacklist.prototype.load = function () {};
PingBlacklist.prototype.unload = function () {};
PingBlacklist.prototype.stop = function () {};

PingBlacklist.prototype.getName = function () {
    return "Ping Blacklist";
};
PingBlacklist.prototype.getDescription = function () {
    return "Ignores pings from all users on your blacklist.";
};
PingBlacklist.prototype.getVersion = function () {
    return "0.0.1";
};
PingBlacklist.prototype.getAuthor = function () {
    return "Joseph Pietrzyk";
};