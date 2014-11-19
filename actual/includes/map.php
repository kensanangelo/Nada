<?php 
//Passes the result arrays from php to javascript
//and combines them for one big dataset
?>
<script type="text/javascript">
	var rivers=<?php echo json_encode($rivers); ?>;
	var lakes=<?php echo json_encode($lakes); ?>;
	//rivers=JSON.parse(rivers);
	//lakes=JSON.parse(lakes);
</script>