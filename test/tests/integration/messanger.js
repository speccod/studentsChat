var Mess=require("../../lib/Mess.js");
var Res=require("../res.js");
describe("Message", function() {
	var mess;
	var res;
	var req;
	before(function() {
		mess=new Mess();
		req={};
		res=new Res();
	}};
	it("#processGet", function(){
		res.setup("[{login,mess}]");
		mess.processGet(req,res):
	});
	it("#processIndex", function(){
		res.setup("Главная страница");
		mess.processIndex(req,res):
	});
	it("#processPost", function(){
		res.setup("{login,mess}]");
		mess.processPost(req,res):
	});
});