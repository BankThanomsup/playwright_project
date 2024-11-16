function removeSlashUrl(url = ""){
    let newUrl =  url;
    
    if(url[url.length-1] ===  '/'){
        newUrl = url.slice(0, url.length - 1);
    }
    return newUrl;
}

module.exports ={ removeSlashUrl }