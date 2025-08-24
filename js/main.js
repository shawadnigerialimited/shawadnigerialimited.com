
// Mobile menu
const burger = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
burger?.addEventListener('click', ()=>{
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e=> e.target.classList.toggle('visible', e.isIntersecting));
}, {threshold: .12});
reveals.forEach(el => io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> mailto
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message) return false;
  const subject = encodeURIComponent('New Project Inquiry — SHAWAD NIGERIA LIMITED');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:info@shawad.ng?subject=${subject}&body=${body}`;
  document.getElementById('contactMsg').textContent = "Opening your email client…";
  return false;
}

// Training form -> mailto
function requestTraining(e){
  e.preventDefault();
  const n = document.getElementById('tName').value.trim();
  const em = document.getElementById('tEmail').value.trim();
  const topic = document.getElementById('tTopic').value;
  const org = document.getElementById('tOrg').value.trim();
  const subject = encodeURIComponent('Training Request — SHAWAD NIGERIA LIMITED');
  const body = encodeURIComponent(`Name: ${n}\nEmail: ${em}\nOrganization: ${org}\nTopic: ${topic}`);
  window.location.href = `mailto:info@shawad.ng?subject=${subject}&body=${body}`;
  document.getElementById('trainingMsg').textContent = "Opening your email client…";
  return false;
}
