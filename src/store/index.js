import { createStore } from "vuex";
import  workers from './data/workers.json'
import  duties from './data/duties.json'

export default createStore({
  state: {
    workersList: [],
    tasksList: [],
    selectedWorkerTask: [],
  },
  getters: {
    getWorkersList: ({ workersList }) => workersList,

    getTasksList: ({ tasksList }) => tasksList,

    getSelectedWorkerTask: ({selectedWorkerTask }) => selectedWorkerTask,
    
		getWorkerById: (state)=>(workerId)=>state.workersList.find(worker => worker.id ==workerId),

		getTaskById: (state)=>(tasks)=>state.tasksList.filter(task => tasks.includes(task.id))

  },  
  mutations: {
    workersList (state, workers) {
      state.workersList = workers
    },
    tasksList (state, tasks) {
      state.tasksList = tasks
    },
    selectedWorkerTask (state, {workerId, task}) {
      const selectedWorker = state.selectedWorkerTask
            .find(worker => worker.workerId == workerId)
        
			      if (selectedWorker) {
				        selectedWorker.tasks.push(...task)
			      } else {
				        state.selectedWorkerTask.push({
					              workerId:workerId,
					              tasks: task
				              })
			      }
      
    },
    deleteTask (state, {workerId, task}) {

      const workerSelectedItem = state.selectedWorkerTask.find(
                                  (worker) => worker.workerId == workerId
                                  )
      
      workerSelectedItem.tasks = workerSelectedItem.tasks.filter(
                                  (id) => id !== task
                                  )
      
      if (workerSelectedItem.tasks.length === 0) {
        state.selectedWorkerTask = state.selectedWorkerTask.filter(
                                  (worker) => worker.workerId != workerId
                                 )
      }

    }

  },

  actions: {
    loadWorkersList ({ commit }) {
      commit('workersList', workers)
      
    },
    loadTaskList ({ commit }) {
      commit('tasksList', duties)
      
    },
    addTaskToWorker ({ commit }, {workerId, task}) {
      commit('selectedWorkerTask', {workerId, task})
    },
    deleteTask ({ commit }, {workerId, task}) {
      console.log({workerId, task})
      commit('deleteTask', {workerId, task})
      
    }
  },
  modules: {},
});
