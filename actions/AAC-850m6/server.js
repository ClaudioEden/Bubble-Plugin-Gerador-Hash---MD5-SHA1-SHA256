function(properties, context) {
	var md5 = require('md5');
    var md5_data = md5(properties.string_to_hash);

    return{
        string_encrypted: md5_data
    }
}