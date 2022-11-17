export const apiCall = () => {
    
    // CALL 1
    const URL = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(URL)
        .then(response => response.json())
        .then(json => console.log(json))
    
    // CALL 2
    var myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    var raw = "{\"title\": \"foo\",\"body\": \"bar\",\"userId\": 1}";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}