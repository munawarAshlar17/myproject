<template>
    <div>
        <formHelper>
            <div slot="form-header">
                <h3>this is title of the form</h3>
                <p>information about the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required/>
                <label>Your Message</label>
                <textarea></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">submit</button>
            </div>
            <div id="useful-links"></div>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </formHelper>
    </div>
</template>

<script>
    export default {
        name: "formOne"
    }
</script>

<style scoped>

</style>
