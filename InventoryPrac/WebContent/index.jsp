<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="Views/bootstrap.min.css">
	<script src="Components/jquery-3.2.1.min.js"></script>
	<script src="Components/main.js"></script>
	
<meta charset="ISO-8859-1">
<title>Inventory Management</title>
</head>
<body>
	<div class="container">
	
		<div class="row">
			<div class="col-8">
			
				<h1 class="m-3">Inventory Details</h1>
			
				<form id="formInventory">
				
				<!-- NAME -->
				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Name :</span>
					</div>
					<input type="text" id="txtName" name="txtName">
				</div>
				
				<!-- GENDER -->
				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Type :</span>
					</div>
				
					&nbsp;&nbsp;&nbsp;&nbsp;Heavy Vehicle&nbsp;&nbsp;
				<input type="radio" id="rdoTypeHeavy" name="rdoType" value="Heavy">
					&nbsp;&nbsp;&nbsp;&nbsp;Light Vehicle&nbsp;&nbsp;
				<input type="radio" id="rdoTypeLight" name="rdoType" value="Light">
				</div>
				
				<!--Quantity -->
				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="lblName">Quantity: </span>
					</div>
					
					<select id="ddlQuantity" name="ddlQuantity">
						<option value="0">--Select No Of Items--</option>
						<option value="1">1 Item</option>
						<option value="2">2 Items</option>
						<option value="3">3 Items</option>
						<option value="4">4 Items</option>
						<option value="4">5 Items</option>
						<option value="4">6 Items</option>
						<option value="4">7 Items</option>
						<option value="4">8 Items</option>
						<option value="4">9 Items</option>
						<option value="4">10 Items</option>
					</select>
				</div>
				
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				
				<input type="button" id="btnSave" value="Save" class="btn btn-primary">
				</form>
				</div>
		</div>
	
		<br>
		
		<div class="row">
			<div class="col-12" id="colInventoty">
			
		</div>
		</div>
		
	</div>			
				

</body>
</html>