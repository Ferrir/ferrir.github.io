import { content } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Summary
    document.getElementById('user-summary').textContent = content.summary;

    // Inject Experience
    const expGrid = document.getElementById('experience-grid');
    content.experience.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'exp-card reveal';
        card.innerHTML = `
            <div class="period">${exp.period}</div>
            <h3>${exp.role}</h3>
            <div class="company">${exp.company}</div>
            <p>${exp.description}</p>
            <div class="tags">
                ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        expGrid.appendChild(card);
    });

    // Inject Skills
    const skillsList = document.getElementById('skills-list');
    content.skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item reveal';
        item.textContent = skill;
        skillsList.appendChild(item);
    });

    // Inject Education
    const eduList = document.getElementById('education-list');
    content.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'reveal';
        item.style.marginBottom = '2rem';
        item.innerHTML = `
            <h3 style="font-size: 2rem;">${edu.degree}</h3>
            <p style="font-family: var(--font-mono); color: var(--accent);">${edu.institution} | ${edu.year}</p>
        `;
        eduList.appendChild(item);
    });

    // Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
