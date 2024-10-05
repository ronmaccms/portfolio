const app = Vue.createApp({
    data() {
        return {
            name: "Andres Macchiavello",
            title: "Portfolio",
            projects: [
                { title: "Portfolio", likes: 0 },
                { title: "Twitter Clone", likes: 0 },
                { title: "Blog", likes: 0 },
                { title: "eCommerce", likes: 0 }
            ],
        };
    },
    methods: {
        addLike(project) {
            project.likes++; // This will now increment without checking localStorage
            console.log(project, "like");
        },
        removeLike(project) {
            if (project.likes > 0) {
                project.likes--;
            }
            console.log(project, "dislike");
        }
    }
});

app.mount('#app');
