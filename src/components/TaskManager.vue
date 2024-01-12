<template>
        <h4>Tasks list for the Day:</h4>
        <div class="container_section">            
            <task-divider v-for="task in getTasksList"
                            :key="task.id"
                            :task="task"
                        />
        </div>
        <div >
            <worker-task-card v-for="data in getSelectedWorkerTask"
                            :key="data.workerId"
                            :worker="getWorkerById(data.workerId)"
                            :tasks="getTaskById(data.tasks)"
                        />  
        </div>
</template>

<script>
    import TaskDivider from './TaskDivider.vue'
    import WorkerTaskCard from './WorkerTaskCard.vue'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'TaskManager',

        components: { TaskDivider, WorkerTaskCard },

        computed: {
            ...mapGetters( [
                            'getTasksList',
                            'getSelectedWorkerTask',
                            'getWorkerById',
                            'getTaskById'
                            ] )
            },

        created () {
            this.loadWorkersList();
            this.loadTaskList();
            }, 

        methods: {
            ...mapActions( ['loadWorkersList', 'loadTaskList', ] )
           
            } 
    }
</script>

<style lang="scss" scoped>

</style>