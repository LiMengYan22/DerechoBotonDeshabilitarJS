  # Para agregar a un html
<script type="text/javascript">
//<![CDATA[
function right(e) 
{
if (navigator.appName == 'Netscape' && e.which == 3) 
{
alert('No Disponible..');
return false;
}
  else
if (navigator.appName == 'Microsoft Internet Explorer'
&& event.button==2) 
{
alert('No Disponible..');  
  return false;
}
  return true;
}
document.onmousedown = right;
//]]>
</script>
