<template>
    <div id="show-blog">
        <h1 >Blog Titles</h1>
        <input class="form-control" v-model="search" placeholder="Search post"/>
        <div v-bind:key="blog.id" v-for="blog in filterBlog" class="single-blog">
            <div v-bind:key="blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>

            </div>
        </div>

    </div>

</template>

<script>

    import searchMixin from'../mixins/searchMixin'

    export default {
        name: "listBlog",
        components:{

        },

        data() {
            return {
                blogs: [],
                search:'',
            }
        },

        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts')
                .then(function (data) {
                    this.blogs = data.body.slice(0,10);

                })
        },

        filters:{
            toUppercase(value){

                return value.toUpperCase();
            }

        },

        directives:{

            'rainbow':{
                bind(el) {

                    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
                }
            }
        },
        mixins:[searchMixin]

    }
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0px auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>
