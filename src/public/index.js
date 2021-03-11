$(window).on("load", () => $(".loader-container").fadeOut(1000));

$(() => {
  $(document).on("keydown", window, (a) => {
    if (a.which == 123) return false;
  });
});

$(document).ready(() => $(document).bind("contextmenu", (e) => { return false; }));

$(() => {
  $("#top").click(() => {
    $("body,html").animate({ scrollTop: 0, }, 0);
    return false;
  });
  $(window).scroll(() => {
    if ($(this).scrollTop() > 15) {
      $(".totop a").fadeIn(100);
    } else {
      $(".totop a").fadeOut(100);
    }
  });
});

const yazıdeğiş = () => {
  var x = document.getElementById("buton");
  x.innerHTML = '<i class="fas fa-heart" style="color: red"></i>';
  setTimeout(() => {
    x.innerHTML = "Davet Et";
  }, 5000);
}

const yazıdeğiş2 = () => {
  var x = document.getElementById("buton2");
  x.innerHTML = '<i class="fas fa-heart" style="color: red"></i>';
  setTimeout(() => {
    x.innerHTML = "Destek Sunucusu";
  }, 5000);
}

const fallbackCopyTextToClipboard = (text) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
  } catch {}
  document.body.removeChild(textArea);
}

const copyText = (text) => {
  if (!navigator.clipboard) return fallbackCopyTextToClipboard(text);
  navigator.clipboard.writeText(text);
}

let frm = $('#likeForm')
frm.on('submit', (e) => {
    if (document.querySelector('#like').classList.toString().includes('fas')) {
        $('#like').removeClass("fas")
        $('#like').addClass("far")
        document.querySelector('#likeText').innerText = Number(document.querySelector('#likeText').innerText) - 1
    } else {
        $('#like').addClass("fas")
        $('#like').removeClass("far")
        document.querySelector('#likeText').innerText = Number(document.querySelector('#likeText').innerText) + 1
    }
    e.preventDefault();
    $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: {
            id: $('#likeForm')[0].id.value,
            durum: document.querySelector('#like').classList.toString().includes('fas').toString()
        }
    });
});