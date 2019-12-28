http=require("http");
url=require("url");
fs=require("fs");
query=require ("querystring");
module=require("./module");

processRequest=function(req,resp)
{
	d=url.parse(req.url);
	switch(d.pathname)
	{
	case "/":
			resp.writeHead(200,{'Content-Type':'text/html'})
			fs.readFile("form1.html",function(error,data)
			{
			if(error)
			{
			resp.end("error");
			console.log("in error");
			}
			else{
				resp.end(data);
				console.log("in data");
			}
			
			});
			break;
	
	case "/fact":
			
			  data=query.parse(d.query);
			  resp.writeHead(200,{'Content-Type':'text/html'})
			switch(data.p)
			{
					case'factorial':
					{
					console.log("in factoriasl case");
					f=module.factorial(data.num);
					resp.write(f.toString());
					resp.end();
					break;
					}
					
			
					case'table':
					{
						
					t=module.table(data.num);
					resp.write(t.toString());
					resp.end();
					break;
				
					}	
					case'pattern':
					{
						console.log("in pattern");
						module.pattern(data.num);
						//resp.write(p.toString());
						resp.end();
						break;
					}
			break;
			}
	}
}

http.createServer(processRequest).listen(7000);
console.log("server is on");