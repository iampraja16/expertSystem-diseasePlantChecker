const rules = 
[
  { antecedents: ['fact1', 'fact2', 'fact3'], consequent: 'Hawar Daun Jagung' },
  { antecedents: ['fact4', 'fact5', 'fact6'], consequent: 'Hawar Daun Jagung Utara' },
  { antecedents: ['fact7', 'fact8', 'fact9'], consequent: 'Karat Umum' },
  { antecedents: ['fact10', 'fact11'], consequent: 'Busuk Batang' },
  { antecedents: ['fact12', 'fact13'], consequent: 'Layangan Daun Jagung' },
  { antecedents: ['fact14', 'fact15'], consequent: 'Busuk Akar' },
  { antecedents: ['fact16', 'fact17'], consequent: 'Bercak Daun' },
  { antecedents: ['fact18', 'fact19'], consequent: 'Virus Kerdil Jagung' },
  { antecedents: ['fact12', 'fact20'], consequent: 'Hawar Akar' },
  { antecedents: ['fact1', 'fact2'], consequent: [ 'Hawar Akar', 'Virus Kerdil Jagung'] },
  { antecedents: ['fact3', 'fact6', 'fact7'], consequent: [ 'Busuk Akar', 'Karat Umum'] },
  { antecedents: ['fact8', 'fact9', 'fact10'], consequent: 'Penyakit Kombinasi 3' },
  { antecedents: ['fact4', 'fact5', 'fact6'], consequent: [ 'Hawar Daun Jagung Utara', 'Karat Umum'] },
  { antecedents: ['fact7', 'fact8'], consequent: [ 'Karat Umum', 'Busuk Batang'] },
  { antecedents: ['fact11', 'fact12'], consequent: [ 'Busuk Batang', 'Hawar Akar'] }
];

document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
});

document.getElementById('checkButton').addEventListener('click', runExpertSystem);

function runExpertSystem() 
{
  const facts = new Set();
  if (document.getElementById('fact1').checked) facts.add('fact1');
  if (document.getElementById('fact2').checked) facts.add('fact2');
  if (document.getElementById('fact3').checked) facts.add('fact3');
  if (document.getElementById('fact4').checked) facts.add('fact4');
  if (document.getElementById('fact5').checked) facts.add('fact5');
  if (document.getElementById('fact6').checked) facts.add('fact6');
  if (document.getElementById('fact7').checked) facts.add('fact7');
  if (document.getElementById('fact8').checked) facts.add('fact8');
  if (document.getElementById('fact9').checked) facts.add('fact9');
  if (document.getElementById('fact10').checked) facts.add('fact10');
  if (document.getElementById('fact11').checked) facts.add('fact11');
  if (document.getElementById('fact12').checked) facts.add('fact12');
  if (document.getElementById('fact13').checked) facts.add('fact13');
  if (document.getElementById('fact14').checked) facts.add('fact14');
  if (document.getElementById('fact15').checked) facts.add('fact15');
  if (document.getElementById('fact16').checked) facts.add('fact16');
  if (document.getElementById('fact17').checked) facts.add('fact17');

  const inferredFacts = new Set();
  let changed;

  do
  {
    changed = false;
    rules.forEach(rule =>
      {
        if (rule.antecedents.every(fact => facts.has(fact)) && !inferredFacts.has(rule.consequent)) 
          {
            inferredFacts.add(rule.consequent);
            facts.add(rule.consequent);
            changed = true;
          }
      });
  } while (changed);
  displayResult(inferredFacts);
}

function displayResult(inferredFacts) 
{
  const resultDiv = document.getElementById('result');
  if (inferredFacts.size > 0) 
    {
      resultDiv.innerHTML = "<strong>Penyakit:</strong> " + Array.from(inferredFacts).join(', ');
    }
    else 
    {
      resultDiv.innerHTML = "<strong>tidak terdeteksi penyakit</strong> based on the symptoms provided.";
    }
}
