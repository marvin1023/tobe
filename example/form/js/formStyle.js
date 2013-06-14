(function($){
	$(function(){
		var $main = $('#main');
		var $form = $main.find('form');
		var $inputText = $form.find('input[type="password"],input[type="text"]');
		// var $inputText = $form.find('input[type="text"]').add($inputPwd);
		var $inputRadio = $form.find('input[type="radio"]');
		var $inputCheckbox = $form.find('input[type="checkbox"]');
		var $inputSubmit = $form.find('input[type="submit"]');
		$form.addClass('form');
		$inputText.addClass('form-text');
		$inputRadio.addClass('form-radio');
		$inputCheckbox.addClass('form-checkbox');
		$inputSubmit.addClass('inputbtn greybtn')
	})
})(jQuery)