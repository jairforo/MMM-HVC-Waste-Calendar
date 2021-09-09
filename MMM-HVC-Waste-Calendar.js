Module.register("MMM-HVC-Waste-Calendar", {
	defaults: {
		address_id: "0479200000044173",
		locale: "en"
	},
	requiresVersion: "2.2.1",

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.address_id;
		return wrapper;
	},

	loaded: function(callback) {
		Log.log(this.name + ' is loaded!');
	},

	start: function() {
		Log.log(this.name + ' is started!');
	},

	getTranslations: function() {
		return {
			en: "assets/translations/en.json",
			de: "assets/translations/nl.json"
		}
	}
})
