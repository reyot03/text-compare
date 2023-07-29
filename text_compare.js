window.addEventListener("DOMContentLoaded", () => {
    var text_container = document.querySelector('#text_container');
    var text_writer = document.querySelector('#text_writer');
    var text_viewer = document.querySelector('#text_viewer');

    function scroll_1(e) {text_writer.scrollTop = this.scrollTop; text_viewer.scrollTop = this.scrollTop;}
    function scroll_0(e) {text_container.scrollTop = this.scrollTop; text_viewer.scrollTop = this.scrollTop;}
    text_container.addEventListener('scroll', scroll_1, false);
    text_writer.addEventListener('scroll', scroll_0, false);

    text_writer.addEventListener('input', check_change, false);
    text_container.addEventListener('input', check_change, false);

    function check_change(e) {
        read_text = text_container.value;
        write_text = text_writer.value;
        text_viewer.innerHTML = ''
        for (let index = 0; index < write_text.length; index++) {
            if ((read_text[index] == write_text[index]) || (read_text[index] == '&nbsp;' && write_text[index] == ' ')) {
                color_class = 'correct'
            } else {
                color_class = 'mistake'
            }
            text_viewer.innerHTML = text_viewer.innerHTML + `<font class='${color_class}'>${write_text[index]}</font>`;
        }
    }

});

