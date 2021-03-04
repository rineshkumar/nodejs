//EventEmitter --> binding of events and event handlers, raising events 
import * as events from 'events'
const eventEmitter = new events.EventEmitter();
//Binding events and event handler 
eventEmitter.on('dataSourceConnected', ()=>{console.log("Data source connected ")})
//Triggering event 
eventEmitter.emit('dataSourceConnected');


