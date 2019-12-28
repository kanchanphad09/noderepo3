exports.factorial=function(n)
{
fact=1;

	
	for(i=1;i<=n;i++)
	{
				console.log("in fact function");
		fact=fact*i;
		
		
	}
	console.log("factoriual"+fact);

return fact;


}

exports.table=function(n)
{
	var t="";
	for(i=1;i<=10;i++)
	{
		 t=t+" "+n*i;
		
	}
	return t;
}
exports.pattern=function(n)
{
	for(i=1;i<n;i++)
	{
		for(j=1;j<n;j++)
		{
			console.log("*");
		}
		console.log(" ");
	}
	
}




