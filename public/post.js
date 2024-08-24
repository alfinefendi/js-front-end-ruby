document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    try {
        const res = await fetch('http://192.168.1.102:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add authorization headers if needed
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    body: body
                }
            })
        });

        const data = await res.json();

        if (res.ok) {
            console.log('Post created:', data);
            alert('Post created successfully');
        } else {
            console.error('Error creating post:', data.errors);
            alert('Failed to create post: ' + data.errors.join(', '));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while creating the post.');
    }
});