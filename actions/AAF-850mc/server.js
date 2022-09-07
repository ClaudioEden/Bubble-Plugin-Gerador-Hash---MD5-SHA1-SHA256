function(properties, context) {

	var crypto = require('crypto');
    var strToSha1 = properties.string_to_hash;
    var salt = properties.salt;
    var strFinal;
    
    if(!salt) {
        strFinal = strToSha1;
	} else {
        strFinal = strToSha1+salt;
    }
    
    const shasum = crypto.createHash('sha1').update(strFinal).digest('hex');
	
    return{
        string_encrypted: shasum
    }

}