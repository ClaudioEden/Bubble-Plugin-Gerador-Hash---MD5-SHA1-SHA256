function(properties, context) {
    
	var crypto = require('crypto');
    var strToSha256 = properties.string_to_hash;
    var salt = properties.salt;
    var strFinal;
    
    if(!salt) {
        strFinal = strToSha256;
	} else {
        strFinal = strToSha256+salt;
    }
    
    const shasum = crypto.createHash('sha256').update(strFinal).digest('hex');
	
    return{
        string_encrypted: shasum
    }

}