/*  이벤트 핸들링
    이벤트 루프는 이벤트를 대기하는 함수들이 이벤트를 대기하고 있다가
    특정 이벤트가 동작하면 이벤트를 처리하는 함수가 실행되는 방식이다
*/

const events = require('events');

const eventEmitter = new events.EventEmitter();

const shoutingHandler = () => {
    console.log('hey 딜러!');
    eventEmitter.emit('echo');
};

eventEmitter.on('shouting', shoutingHandler);
eventEmitter.on('echo', () => console.log('무사고 차!'))

eventEmitter.emit('shouting');