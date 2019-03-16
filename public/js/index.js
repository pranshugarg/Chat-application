var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  /*socket.emit('createMessage', {
    from: 'Andrew',
    text: 'Yup, that works for me.'
  });*/
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

socket.emit('createMessage', {from: 'Frank', text: 'Hi'},
   function (data) {
  console.log('Got it', data);
});