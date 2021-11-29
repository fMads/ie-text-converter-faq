const eWordTextarea = document.getElementById('word');
const eWebTextarea = document.getElementById('web');
eWordTextarea.addEventListener('change', oEvent => {
    const strInput = eWordTextarea.value;
    const strOutput = convert(strInput);

    eWebTextarea.value = strOutput;
});

function convert(strInput) {
    const arrSections = strInput.split('\n\n');

    let strText = '';
    arrSections.forEach(strSection => {
        const arrLines = strSection.replace(/<\/strong>\n/ig, '</strong>: ').split('\n');
        const strHeader = arrLines[0];
        const arrContentLines = arrLines.slice(1).map(strLine => strLine.replace(/<\/strong>:\s*/, '</strong>:<br>'));
    
        strText += `<h3><strong>${strHeader}</strong></h3><div>${arrContentLines.join('<br><br>')}</div>`;
    });

    return `<div id="accordion">${strText}</div>`;
}

document.getElementById('test').addEventListener('click', () => {
    document.body.innerHTML = eWebTextarea.value;
});