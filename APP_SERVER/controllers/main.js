const index = function(req,res){
      res.render('index', { title: 'Hit Movies Anytime' });
};
module.exports = {
    index
};
