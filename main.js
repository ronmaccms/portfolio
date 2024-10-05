
// let userAge = Number(prompt("What's your age"))

const app = Vue.createApp({
    data() {
        return {
            name: "Andres Macchiavello",
            title: "Portfolio",
            projects: [
                {title: "Portfolio", language: ["HTML", "CSS", "JavaScript", "VueJS"]},
                {title: "Twitter clone", language: ["HTML", "CSS", "JavaScript", "VueJS"]},
                {title: "Blog", language: ["HTML", "CSS", "JavaScript", "VueJS"]},
                {title: "eCommerce", language: ["HTML", "CSS", "JavaScript", "VueJS"]},
            ]
        };
    },
    methods: {
        runFunction() {
            console.log("Test click function");
        },

    },
    computed: {
        dynamicEvent() {
            return {
                [this.event_name]: this.runFunction
            };
        }
    }
});

app.mount('#app');
