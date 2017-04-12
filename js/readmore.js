function hide(id)
{
	$('.aaa'+id).text(function(i,v)
	{
		return v === 'Read Less' ? 'Read More' : 'Read Less'
	});
$("#hidden" + id).toggle();
}