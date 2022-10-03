function a() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(b => b.json())
        .then(c => {
            console.log(c);
        });
}

a();
