angular.module('starter.services', [])

.factory('Chats', function() {
  var unilagGate = [{
    id: 0,
    destination: 'Senate house',
    direction: '01. Move to the faculty of education on your right 02. Turn left and head to the cab park 03. Take a cab to campus and alight at the last drop point 03. Go straight opposite Mariere hall and head straight to the faculty of engineering 04. Turn left and head straight to the senate house',
    image: 'img/ben.png'
  }, {
    id: 1,
    destination: 'Faculty of engineering',
    direction: '01. Move to the faculty of education on your right 02. Turn left and head to the cab park 03. Take a cab to campus and alight at the last drop point 03. Go straight opposite Mariere hall and head straight to the faculty of engineering',
    image: 'img/max.png'
  }, {
    id: 2,
    destination: 'Faculty of Law',
    direction: '01. Move to the faculty of education on your right 02. Turn left and head to the cab park 03. Take a cab to campus and alight at the last drop point  03. Go straight opposite Mariere hall and head straight to the faculty of engineering 04. Turn left and head straight to the senate house 05. head straight a bit and take the first turning onthe left 06. Head straight to the faculty of law',
    image: 'img/adam.jpg'
  }, {
    id: 3,
    destination: 'Department of Architecture',
    direction: '01. Move to the faculty of education on your right 02. Turn left and head to the cab park 03. Take a cab to campus and alight at the last drop point 03. Go straight opposite Mariere hall and head straight past the faculty of engineering to the department of architecture',
    image: 'img/perry.png'
  }, {
    id: 4,
    destination: 'Lagoon Front',
    direction: '01. Move to the faculty of education on your right 02. Turn left and head to the cab park 03. Take a cab to campus and alight at the last drop point 03. Go straight opposite Mariere hall and head straight past the faculty of engineering to the department of architecture 05. follow the curve and turn left to the lagoon front',
    image: 'img/mike.png'
  }, {
    id: 5, 
    destination: 'Faculty of science',
    direction: '01. Move to the faculty of education on your right 02. Turn left and head to the cab park 03. Take a cab to campus and alight at the last drop point 04. Go straight along the Gtbank to king jaja hall 05. head straight to the faculty of science'
    image: ''
  }, {
    id: 6, 
    destination: 'Faculty of Education',
    direction: '01. Move straight on your right to the faculty of education',
    image: ''
  }, {
    id: 7, 
    destination: 'Faculty of Environmental Sciences',
    direction: '01. Move straight on your left to the faculty of environmental sciences',
    image: ''
  }, {
    id: 8, 
    destination: 'Sports center',
    direction: '01. Move straight on your right past the faculty of education 02. head straight past the multipurpose hall  to the sports center',
    image: ''
  }, {
    id: 9,
    destination: 'Multipurpose hall', 
    direction: '01. Move straight on your right past the faculty of education 02. head straight along your right until you arrive at the multipurpose hall',
    image: ''
  }, {
    id: 10,
    destination: 'Church',
    direction: '01. Move straight on your left to the faculty of environmental sciences 02. move past the faculty if environmental sciences to the church',
    image: ''
  }, {
    id: '11',
    destination: 'Mosque', 
    direction: '01. Move straight on your left to the faculty of environmental sciences 02. move past the faculty if environmental sciences to the church 05. move a little bit further to the mosque',
    image: ''
  },{
    id: 12,
    destination: 'Sodinde hall',
    direction: '01. Move straight on your right to the faculty of education 02. turn left and head to the cab park 03. take a cab to campus and alight at New hall 04. cross over to your left enter the pathway and turn left 05. Head straight to Sodiende hall on your left',
    image: ''
  }, {
    id: 13,
    destination: 'Eni-Njoku hall',
    direction: '01. Move straight on your right to the faculty of education 02. turn left and head to the cab park 03. take a cab to campus and alight at New hall 04. cross over to your left enter the pathway and turn left 05. Head straight to Eni-Njoku hall on your left',
    image: ''
  }, {
    id: 14,
    destination: 'Makama hall',
    direction: '01. Move straight on your right to the faculty of education 02. turn left and head to the cab park 03. take a cab to campus and alight at New hall 04. cross over to your left enter the pathway and turn left 05. Head straight to Eni-Njoku hall on your left',
    image: ''
  }
  }];

  return {
    all: function() {
      return unilagGate;
    },
    remove: function(chat) {
      unilagGate.splice(unilagGate.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < unilagGate.length; i++) {
        if (unilagGate[i].id === parseInt(chatId)) {
          return unilagGate[i];
        }
      }
      return null;
    }
  };
});
