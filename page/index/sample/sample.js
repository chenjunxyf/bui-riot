riot.tag('sample', '<h3>{ message }</h3> <ul> <li each="{ techs }">{ name }</li> </ul>', 'sample, [riot-tag="sample"]{ font-size: 2rem } sample h3, [riot-tag="sample"] h3{ color: #444 } sample ul, [riot-tag="sample"] ul{ color: #999 }', 'class="sample"', function(opts) {
    this.message = 'Hello, Riot!'
    this.techs = [
      { name: 'HTML' },
      { name: 'JavaScript' },
      { name: 'CSS' }
    ]
  
});
