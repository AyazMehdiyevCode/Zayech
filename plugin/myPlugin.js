(function ($) {

    $.fn.createNewElement = function (sended) {
        var sendedOptions = $.extend({
            element: "p",
            text: "new text",
            fontSize: 16,
        }, sended);

        var newElement = $("<" + sendedOptions.element + ">").text(sendedOptions.text).css("font-size", sendedOptions.fontSize + "px");
        this.append(newElement);
    };


}(jQuery));