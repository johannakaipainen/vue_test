/* Vue.component('popover', {
    data: function () {
      return {
        
      }
    },
    template: 
    ' <div>
        <h4> title </h4>
        <p> content </p>
    </div>
    
    '
  }); */

 

var app = new Vue({
    el: '#app',

    data: {
        optionId: 0, options: [],
        imageOptionId: 0, imageOptions: [],
        rightId: 0, right: [],
        wrongId: 0, wrong: [],
        preRequisitesId: 0, preRequisites: []

    },

    methods: {
        addOption: function () {
            return this.options.push({
                option: null,
                id: this.optionId++
            })
        },

        addImageOptions: function () {
            return this.imageOptions.push({
                imageOption: null,
                id: this.imageOptionId++
            })
        },

        addActionRight: function () {
            return this.right.push({
                action: null,
                target: null,
                id: this.rightId++
            })
        },

        addActionWrong: function () {
            return this.wrong.push({
                action: null,
                target: null,
                id: this.wrongId++
            })
        },

        addPreRequisite: function () {
            return this.preRequisites.push({
                preRequisite: null,
                id: this.preRequisitesId++
            })
        },

        removeOption: function (index) {
            this.options.splice(index, 1);
        },

        removeImageOption: function (index) {
            this.imageOptions.splice(index, 1);
        },

        removeActionRight: function (index) {
            this.right.splice(index, 1);
        },

        removeActionWrong: function (index) {
            this.wrong.splice(index, 1);
        },

        removePreRequisite: function (index) {
            this.preRequisites.splice(index, 1);
        },

        save: function () {
            e.preventDefault()
        }
    }

});

