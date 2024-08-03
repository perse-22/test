function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let postsText = 'Posts:\n\n';
            posts.forEach(post => {
                postsText += `ID: ${post.id}\nTitle: ${post.title}\nBody: ${post.body}\n\n`;
            });
            document.getElementById('apiResult').textContent = postsText;
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            document.getElementById('apiResult').textContent = 'Failed to fetch posts.';
        });
}

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let usersText = 'Users:\n\n';
            users.forEach(user => {
                usersText += `ID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}\n\n`;
            });
            document.getElementById('apiResult').textContent = usersText;
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            document.getElementById('apiResult').textContent = 'Failed to fetch users.';
        });
}
