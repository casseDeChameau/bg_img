function callAjax(q) {
    //! Promise:
    let endpoint = 'https://api.unsplash.com/photos/random/?client_id=-ddmur1oUKXkKq7EKqXk1BMuWXB0DzIhcxa4jpdhQNo';
    if (q != undefined) {
        endpoint += q;
    }
    $.ajax({
            url: endpoint,
            dataType: 'json',
            method: 'GET',
        })
        .done(function(result) {
            console.log('youpi' + result.urls.regular);
            $('.desert-area').css({
                'background-image': 'url(' + result.urls.regular + ')'
            });
            $('.origami-area img').attr('src', result.urls.small)
        })
        .fail(function(result, statut, error) {
            console.log('ho non' + result, statut, error);
        })
        .always(function() {
            console.log('travail terminé');
        });
}

$(function() {
    $('.user-query').keydown((e) => {
        if (e.keyCode == 13) {
            let q = '&query=' + e.target.value;
            console.log('rechercher ce terme : ', e.target.value);
            callAjax(q);
        }
    });
});

$(function() {
    let container = $('.desert-area'),
        element = $('.btn');

    let cursor = $('<div />').addClass('cursor').html('<svg id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="32" x2="32" y1="63.447" y2="1.232"><stop offset="0" stop-color="#9f2fff"/><stop offset="1" stop-color="#0bb1d3"/></linearGradient><path d="m12.531 33h2.969c-4.922 4.749-10.5 10.132-10.5 16 0 8.265 3.807 10 7 10 1.328 0 3.32-.754 5.451-2.073l.489 1.957-1.835 3.669 1.789.895 2.165-4.331-.847-3.39c1.704-1.269 3.406-2.857 4.853-4.68.654 1.729 1.457 3.196 2.399 4.374 1.311 1.639 3.327 2.579 5.542 2.579 2.203 0 4.219-.94 5.53-2.579.941-1.177 1.742-2.647 2.396-4.377 1.447 1.824 3.15 3.413 4.856 4.683l-.847 3.39 2.165 4.331 1.789-.895-1.835-3.669.489-1.957c2.131 1.319 4.123 2.073 5.451 2.073 3.193 0 7-1.735 7-10 0-5.868-5.578-11.251-10.5-16h2.969l5-6h6.531v-2h-7.469l-5 6h-4.087c-2.858-2.828-5.2-5.469-5.418-7.67l.505-1.094c.303-.658.464-1.387.467-2.111l6.933-2.388 1.022-10.23 5.687-4.738-1.281-1.536-6.313 5.262-.978 9.77-5.461 1.881c-.201-.482-.489-.913-.82-1.307.712-.308 1.213-1.016 1.213-1.839 0-2.757-2.243-5-5-5h-1c-.047 0-.091.011-.138.014-.138-.541-.387-1.032-.72-1.46l.828-3.311-1.94-.486-.628 2.51c-.437-.165-.907-.267-1.402-.267s-.965.102-1.403.267l-.628-2.51-1.939.486.828 3.311c-.334.428-.582.919-.72 1.46-.047-.003-.091-.014-.138-.014h-1c-2.757 0-5 2.243-5 5 0 .823.501 1.531 1.213 1.838-.331.394-.619.825-.82 1.307l-5.461-1.881-.978-9.77-6.313-5.262-1.282 1.536 5.687 4.738 1.022 10.23 6.933 2.388c.004.724.164 1.452.467 2.111l.505 1.094c-.218 2.2-2.56 4.841-5.418 7.67h-4.087l-5-6h-7.468v2h6.531zm19.463 23c-1.568 0-3.052-.684-3.968-1.828-.285-.357-.555-.75-.813-1.172h9.573c-.257.422-.528.815-.814 1.171-.914 1.145-2.398 1.829-3.978 1.829zm5.788-5h-11.565c-.261-.619-.504-1.276-.721-1.984.406-.652.775-1.324 1.097-2.016h10.815c.321.691.69 1.363 1.095 2.013-.218.709-.46 1.368-.721 1.987zm-10.682-34v-.01c1.272-.043 2.336-.878 2.729-2.03v.04h4.344v-.04c.392 1.151 1.456 1.987 2.729 2.03v.01c1.709 0 3.1 1.391 3.1 3.1 0 .445-.099.894-.285 1.299l-4.366 9.459c-.602 1.301-1.917 2.142-3.351 2.142s-2.749-.841-3.349-2.143l-4.366-9.458c-.186-.405-.285-.855-.285-1.299 0-1.709 1.391-3.1 3.1-3.1zm.393 15.758c1.063 1.385 2.719 2.242 4.507 2.242s3.444-.857 4.507-2.242c-.211 1.379-.424 3.055-.487 6.242h-8.039c-.063-3.187-.276-4.863-.488-6.242zm.507 8.242h8c0 1.372.233 2.71.635 4h-9.27c.402-1.29.635-2.628.635-4zm19.108-6.563c4.637 4.473 9.892 9.543 9.892 14.563 0 7.171-2.854 8-5 8-3.328 0-14-7.38-14-16 0-4.876.3-6.776.563-8.453.074-.468.145-.93.209-1.433.833 2.32 2.223 4.504 3.59 6.64 1.848 2.889 3.593 5.617 3.638 8.263.022 1.318-.432 2.854-1.313 4.442l1.748.971c1.052-1.894 1.593-3.777 1.564-5.447-.055-3.212-1.948-6.173-3.953-9.307-.147-.23-.294-.462-.441-.694.388.44.779.878 1.169 1.315 3.203 3.584 6.516 7.29 6.516 10.749 0 2.732-1.562 4.992-1.576 5.012l1.633 1.156c.079-.112 1.943-2.783 1.943-6.168 0-4.222-3.571-8.218-7.024-12.082-2.872-3.213-5.83-6.526-6.27-9.572 1.4 2.532 4.115 5.152 7.112 8.045zm-10.108-22.437c1.654 0 3 1.346 3.001 3h-3.001c-.552 0-1-.449-1-1v-1-1zm-3-1v1 1h-4v-1-1c0-1.103.897-2 2-2s2 .897 2 2zm-7 1h1v1 1c0 .551-.448 1-1 1h-3c0-1.654 1.346-3 3-3zm-2.996 14.392c-.44 3.046-3.397 6.359-6.27 9.572-3.453 3.864-7.024 7.859-7.024 12.082 0 3.385 1.864 6.056 1.943 6.168l1.634-1.154c-.016-.022-1.577-2.282-1.577-5.014 0-3.458 3.313-7.165 6.516-10.749.39-.436.781-.875 1.169-1.315-.147.232-.294.464-.441.694-2.005 3.134-3.898 6.094-3.953 9.307-.028 1.669.513 3.553 1.564 5.447l1.748-.971c-.881-1.587-1.335-3.124-1.312-4.442.045-2.646 1.79-5.375 3.638-8.263 1.366-2.136 2.756-4.32 3.59-6.64.064.503.135.966.209 1.433.262 1.677.562 3.577.562 8.453 0 8.62-10.672 16-14 16-2.146 0-5-.829-5-8 0-5.02 5.255-10.09 9.892-14.563 2.997-2.893 5.712-5.513 7.112-8.045z" fill="url(#SVGID_1_)"/></svg>').appendTo(container)

    // ! il masque le cursor de base
    container.css('cursor', 'none');
    // ! lorsque la souris est sur la fenetre
    $(document).on('mousemove', e => {
        cursor.toggle($(e.target).is(container));
        cursor.css({
            '--x': e.pageX + 'px',
            '--y': e.pageY + 'px',
            // ! calcule le degré de rotation avec la function créée
            '--r': calculateRotate(cursor, element) + 0 + 'deg'
        });
    });
    container.on('mouseleave', e => {
        cursor.hide();
    });

    function calculateRotate(elem, to) {
        // ! cible l'élément (souris) et la cible (bouton)
        let offset = elem.offset(),
            toOffset = to.offset(),
            // ! cible le centre de l'élément souris
            center = {
                x: offset.left + elem.outerWidth() / 2,
                y: offset.top + elem.outerHeight() / 2
            },
            // ! cible le centre de l'élément bouton
            toCenter = {
                x: toOffset.left + to.outerWidth() / 2,
                y: toOffset.top + to.outerHeight() / 2
            },
            // ! calcule l'arc tangente
            radians = Math.atan2(toCenter.x - center.x, toCenter.y - center.y),
            //  ! détermine le degré avec 
            degree = (radians * (180 / Math.PI) * -1) + 180;
        return degree;
    }
    element.click((e) => {
        console.log('il y a pas eu un clic là ?');
        //! Promise:
        callAjax();
    })
});