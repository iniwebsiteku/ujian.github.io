function checkAnswers() {
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
    const q6 = parseInt(document.getElementById('q6').value);
    const q7 = parseInt(document.getElementById('q7').value);
    const q8 = parseInt(document.getElementById('q8').value);
    const q9 = parseInt(document.getElementById('q9').value);
    const q10 = parseInt(document.getElementById('q10').value);


    let score = 0;

    if (q1 === 1) score++;
    if (q2 === 2) score++;
    if (q3 === 3) score++;
    if (q4 === 4) score++;
    if (q5 === 5) score++;
    if (q6 === 6) score++;
    if (q7 === 7) score++;
    if (q8 === 8) score++;
    if (q9 === 9) score++;
    if (q10 === 10) score++;

    const result = document.getElementById('result');
    result.textContent = `Skor Anda: ${score} dari 10`;
}
