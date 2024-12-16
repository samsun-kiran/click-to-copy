var text = document.querySelector('.code').innerHTML;

var btn = document.createElement('Button');
btn.className = "btn bg-primary text-white";
btn.innerHTML = "Click to Copy";

btn.addEventListener('click', () => {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Copied");
});

document.querySelector('.container').appendChild(btn);
