const app = new Vue({
    el: '#app',
    data: {
        projects: [],
        perPage: 20,
        page: 1
    },
    mounted() {
        // API call
        axios.get(`https://api.github.com/users/fbhood/repos?per_page=${this.perPage}&page=${this.page}`)
        .then(response => {
            console.log(response);
            this.projects = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    }
});
