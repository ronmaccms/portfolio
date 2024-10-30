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
            const projectTitle = project.title;
            console.log(`Adding like to ${projectTitle}`);

            // Retrieve likes from localStorage and ensure it's an integer
            let storedLikes = parseInt(localStorage.getItem(projectTitle), 10);
            if (isNaN(storedLikes)) {
                storedLikes = 0;
            }

            project.likes = storedLikes + 1;
            console.log(`Likes for ${projectTitle} after adding: ${project.likes}`);

            localStorage.setItem(projectTitle, project.likes);
        },
        removeLike(project) {
            const projectTitle = project.title;
            console.log(`Removing like from ${projectTitle}`);

            let storedLikes = parseInt(localStorage.getItem(projectTitle), 10);
            if (isNaN(storedLikes) || storedLikes <= 0) {
                storedLikes = 0; // Prevent negative likes
            } else {
                project.likes = storedLikes - 1;
                console.log(`Likes for ${projectTitle} after removing: ${project.likes}`);
                localStorage.setItem(projectTitle, project.likes);
            }
        }
    },
    mounted() {
        // On page load, load the like counts from localStorage if they exist
        this.projects.forEach(project => {
            let storedLikes = parseInt(localStorage.getItem(project.title), 10);
            console.log(`Loading likes for ${project.title}: ${storedLikes}`);

            if (!isNaN(storedLikes)) {
                project.likes = storedLikes;
            } else {
                project.likes = 0; // Default likes to 0 if nothing is in localStorage
            }

            console.log(`${project.title} initialized with likes: ${project.likes}`);
        });
    }
});

app.mount('#app');
