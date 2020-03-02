
// Budget controllr 
var budgetController = (function() {
    
    })();
    // UI controller
var UIController = (function() {
        

    var DOMstrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn'
    }


    return {
        getInput:function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description:document.querySelector(DOMstrings.inputDescription).value,
                value:document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings:function(){
            return DOMstrings;
        }
    }
    })();

// Global App controller
var controller = (function(budgetCtrl,UICtrl) {
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function(){
         // ---1. get filed input data

         var input = UICtrl.getInput();
         console.log(input);
        // 2. -add item to thebudget controller
        // 3. add item to the UI
        // 4.calculate the budget
        // 5. Display the budget on the UI
        // console.log('It works')
    }

    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem)

    document.addEventListener('keypress',function(event){
    // console.log(event)
    if (event.keyCode === 13 || event.which === 13){
        // console.log('Enter as pressed ')
        ctrlAddItem();
    }
});

})(budgetController, UIController);

