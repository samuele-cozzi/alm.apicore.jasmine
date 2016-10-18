var ValueData = function() {
    
    this.inizialize_test_data = function(){
        var data = {};
        data.new_value = this.new_value;
        data.update_value = this.update_value;
        return data;
    };

    this.makeid = function()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    this.new_value = {
        "name": this.makeid()
    }

    this.update_value = {
        "name": this.makeid()
    }

    
};

module.exports = ValueData;