<template>         
            <div> Handled by:{{ worker.name }}</div>
            <div class="container_section"   >
                <div v-for="task in tasks"
                    :key="task.id"
                    class="container_item" >
                    <div>
                        {{ task.title }}
                    </div>
                    <div>
                        <button @click="onDeleteTask(task.id)"> Delete </button>
                    </div>
                </div>  
            </div>    
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'WorkerTaskCard',

        props: {
            tasks: {
                type:Array,
                required: true,
            },
            worker: {
                type:Object,
                required: true,
            }
        },

        methods: {
            ...mapActions( ['deleteTask']),

            onDeleteTask(taskId) {
                this.deleteTask({
                    task: taskId,
                    workerId: this.worker.id

                })
                
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>