document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "Women Power",
            date: "October 16, 2023",
            content: "The Everygirl covers a wide range of women's niches on their popular blog.They cover topics like career and finance, fashion, beauty, wellness, relationship, culture, and so on.The site is very well designed with a custom theme. The imagery and graphics are colorful, attention-grabbing, and on-brand. The layout of the site is very tidy and navigation makes sense and is easy to use. All important things for their target audience."
        },
        {
            title: "Modern Kitchen",
            date: "October 17, 2023",
            content: "Over the last decade or so, “statement” ranges have become a fixture of high-end kitchens. They’re archaic-looking enough to evoke a sort of nostalgia, and their scale is overwhelmingly large enough to play into people’s fantasies that they have time and energy to cook elaborate, multicourse meals, the kind where you’d actually need to use more than four burners at once."
        }
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>Published on: ${post.date}</p>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(article);
    });

    var createBlogButton = document.getElementById("create-blog-button");

// Add a click event listener to the button
createBlogButton.addEventListener("click", function () {
    // Function to create a new blog post
    createBlogPost();
});

// Function to create a new blog post
function createBlogPost() {

    var newBlogPost = document.createElement("article");
    newBlogPost.innerHTML = "<h2>New Blog Post</h2><p>This is the content of the new blog post.</p>";

    var blogPosts = document.getElementById("blog-posts");
    blogPosts.appendChild(newBlogPost);
}
 
    function createBlogPost() {
        var form = document.createElement("form");

        var titleInput = document.createElement("textarea");
        titleInput.placeholder = "Enter the title";
        titleInput.name = "title";
    
        var contentTextarea = document.createElement("textarea");
        contentTextarea.placeholder = "Enter the blog content";
        contentTextarea.name = "content";

        var submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Create Post";
    
        form.appendChild(titleInput);
        form.appendChild(contentTextarea);
        form.appendChild(submitButton);
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var title = titleInput.value;
            var content = contentTextarea.value;
    
            var newBlogPost = document.createElement("article");
            newBlogPost.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";

            var blogPosts = document.getElementById("blog-posts");
            blogPosts.appendChild(newBlogPost);
    
            titleInput.value = "";
            contentTextarea.value = "";
        });

        var blogPosts = document.getElementById("blog-posts");
        blogPosts.appendChild(form);
    }

});
