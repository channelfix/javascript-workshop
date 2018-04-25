function getDataFromServer() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject();
                }
            }
        });

        xhr.open('GET', 'https://endpoints.uncaughtexception.wtf/dc1f54ed17194014aea6d8a1c7c19a9f');
        xhr.send();
    });
}




getDataFromServer().then(function(response) {
    console.log(response);
});
