$(document)
	.on( "mobileinit", function () {
		$.mobile.defaultPageTransition = 'flip';
		$.mobile.loadingMessage = "Cargando...";
		$.mobile.loadingMessageTextVisible = true;
		$.mobile.loadingMessageTheme = "b";
		$.mobile.pageLoadErrorMessage = "Disculpe, su solicitud no pudo ser procesada.";
		$.mobile.pageLoadErrorMessageTheme = "b";
	})
	.on( "pagechange", function () {
		
	})
	