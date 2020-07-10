class EventSourcer {
  constructor() {
    this.value = 0;
  }
  
function Item (perform, data) {
	this.perform = perform;
	this.data = data;
}

function Stack(self) {
	this.stack = [];
	this.current = -1;
	this.self = self;
}

  add(num) {
    Stack.prototype.push = function (perform, data) {
	  this.current++;
    this.stack.splice(this.current);
	  this.stack.push(new Item(perform, data));
  }
  subtract(num) {
    Stack.prototype.pop = function (perform, data) {
	  this.current--;
    this.stack.splice(this.current);
	  this.stack.pop(new Item(perform, data));
  
  }
 
  Stack.prototype.undo = undo(){
	var item;

	if (this.current >= 0) {
		item = this.stack[this.current];
		item.perform.call(this.self, false, item.data);
		this.current--;
	  } 
    else 
    {
		throw new Error("Already at oldest change");
	  }
  };
  
  
  Stack.prototype.redo = redo() {
	var item;

	item = this.stack[this.current + 1];
	if (item) {
		item.perform.call(this.self, true, item.data);
		this.current++;
	  } else 
    {
		throw new Error("Already at newest change");
	  }
  };
  
  bulk_undo(num) {
    for(i=0; i<num; i++ )
    {
      Stack.prototype.undo = undo(); 
    }
   }
  bulk_redo(num) {
    for(i=0; i<num; i++ )
     {
        Stack.prototype.redo = redo(); 
      }
   }

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
