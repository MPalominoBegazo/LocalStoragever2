const message = {
    item: {
        name: undefined,
        comment: undefined
    },
    init: function () {

        message.item.name = $('#name');
        message.item.comment = $('#message');
        message.setup();
        message.showComments();
    },

    setup: function () {
        $('#comment').click(message.addComment);
        $('#clear').click(message.clearComments);

    },
    showComments: function () {
        for (var i in localStorage) {
            var comment = localStorage[i];
            var name = localStorage.key(i);
            console.log(comment+"dsadas"+ name);
            $('#ale').append(`<div id="panelcomment" class="panel panel-primary col texto">\
                                    <div id="paneltitle" class="panel-heading colors">\ 
                                     ${name}\
                                    </div>\
                                    <div id="divComment" class="panel-body">\
                                        ${comment} \
                                    </div>\
                            </div>`);
        }
    },
    addComment: function (event) {
        $('#ale').append(`<div id="panelcomment" class="panel panel-primary col texto">\
                            <div id="paneltitle" class="panel-heading colors">\ 
                            ${message.item.name.val()}\
                            </div>\
                            <div id="divComment" class="panel-body">\
                            ${message.item.comment.val()} \
                            </div>\
                        </div>`);

        localStorage.setItem(message.item.name.val(), message.item.comment.val());
    },

    clearComments: function (event) {
        localStorage.clear();
        $('#ale').empty();
    }
};
$(document).ready(message.init);

