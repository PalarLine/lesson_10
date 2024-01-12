<template>
        <div class="container_item">
            <div> 
                <span> {{ task.title }} </span>
            </div>
            <div>   
                <select v-model="workerID" >
                    <option disabled selected value=""> Select a worker's name</option>
                    <option  v-for="worker in getWorkersList"
                            :key="worker.id"
                            :value="worker.id"
                            >
                                {{ worker.name }}
                    </option>
                </select>
            </div>
        </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'TaskDivider',

        props: {
            task: {
                type: Object,
                required: true
            },            
        },

        data() {
            return {
                workerID: null,

            }
        },

        computed: {
            ...mapGetters( ['getWorkersList' ])
        },

        watch: {
            workerID: {                
                handler(newValue) {
                    this.addTaskToWorker({
						workerId: newValue,
						task: [this.task.id]
					})                    
                }, deep: true
            }
        },
        methods: {
            ...mapActions( [ 'addTaskToWorker'] )
           
        }
    }
</script>

<style lang="scss" scoped>

</style>