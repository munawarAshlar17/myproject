<template>
    <div id="app">
        <div class="container">

          <!--<add-blog></add-blog>-->

        <!--<Header></Header>-->
        <!--<Users  v-bind:ninjsa="ninjsa" v-bind:title="title" ></Users>-->
        <!--<Test v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Test>-->
        <!--<formOne></formOne>-->
        <!--<formTwo></formTwo>-->

        <button class="btn btn-primary " v-on:click="component='add-blog'">Add New Post</button>&nbsp;
        <button class="btn btn-success" v-on:click="component='show-blog'">All blog Posts</button>
        <keep-alive>
        <component v-bind:is="component"></component>
        </keep-alive>
            <list-blog></list-blog>
        </div>
    </div>
</template>
<script>

    // import Users from "./components/Users";
    // import Test from "./components/Test";
    // import Header from "./components/Header";
    // import formHelper from "./components/formHelper";
    // import formOne from "./components/formOne";
    // import formTwo from "./components/formTwo";
    import addBlog from "./components/addBlog"
    import showBlog from "./components/showBlog"
    import listBlog from "./components/listBlog";

    export default {
        name: 'App',
        components: {
            listBlog,
            'add-blog' :addBlog,
            'show-blog' :showBlog,

        },
        // components:{
        //     'form-one':formOne,
        //     'form-two':formTwo,
        // },


        data() {
            return {
                // title:"i am dynamic slot title",
                // component: formTwo,
                // ninjsa: [
                //     {name: 'yasir lateef', company: 'ashlar'},
                //     {name: 'waqas', company: 'ashlar'},
                //     {name: 'junaid', company: 'ashlar'},
                //     {name: 'usman', company: 'ashlar'},
                //
                // ],
                // title:'khan',
                component : showBlog,

            }
        },
        methods: {
            //   updateTitle($updatedTitle)
            //   {
            //       this.title=$updatedTitle;
            //   }
            // },
            // beforeCreate(){
            //   alert('beforecreate');
            // },
            // created(){
            //   alert('created');
            // },
            // beforeMount(){
            //   alert('beforeMount');
            // },
            // mounted(){
            //   alert('Mounted');
            // },
            // beforeupdate(){
            //   alert('beforeUpdate');
            // },
            // updated(){
            //   alert('Updated');
            // }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
