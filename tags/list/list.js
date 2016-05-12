riot.tag('list', '<ul> <li each="{ items.filter(whatShow) }"> {title} </li> </ul>', function(opts) {
    this.items = opts.items;


    this.whatShow = function(item) {
        return !item.hidden;
    }.bind(this);
    
});