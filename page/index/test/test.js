riot.tag('test', '<h3>{ message }</h3> <ul> <li each="{ techs }">{ name }</li> </ul>', 'test h3, [riot-tag="test"] h3{ color: #444 } test ul, [riot-tag="test"] ul{ color: #999 }', 'class="test"', function(opts) {
    this.message = 'Hello, Riot!'
    this.techs = [
      { name: 'HTML' },
      { name: 'JavaScript' },
      { name: 'CSS' }
    ]
  
});
