import { content } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('lang') || 'en';

    const render = (lang) => {
        const data = content[lang];
        
        // Update Hero
        document.getElementById('hero-headline').textContent = data.headline;
        document.getElementById('user-summary').textContent = data.summary;

        // Update Section Titles
        document.getElementById('title-experience').textContent = data.sections.experience;
        document.getElementById('title-skills').textContent = data.sections.skills;
        document.getElementById('title-education').textContent = data.sections.education;
        document.getElementById('title-certifications').textContent = data.sections.certifications;
        document.getElementById('title-courses').textContent = data.sections.courses;
        document.getElementById('title-languages').textContent = data.sections.languages;

        // Inject Experience
        const expGrid = document.getElementById('experience-grid');
        expGrid.innerHTML = '';
        data.experience.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'exp-card reveal active';
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
        skillsList.innerHTML = '';
        data.skills.forEach(skill => {
            const item = document.createElement('div');
            item.className = 'skill-item reveal active';
            item.textContent = skill;
            skillsList.appendChild(item);
        });

        // Inject Education
        const eduList = document.getElementById('education-list');
        eduList.innerHTML = '';
        data.education.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'reveal active';
            item.style.marginBottom = '2rem';
            item.innerHTML = `
                <h3 style="font-size: 2rem;">${edu.degree}</h3>
                <p style="font-family: var(--font-mono); color: var(--accent);">${edu.institution} | ${edu.year}</p>
            `;
            eduList.appendChild(item);
        });

        // Inject Certifications
        const certList = document.getElementById('certifications-list');
        certList.innerHTML = '';
        data.certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'exp-card reveal active';
            card.innerHTML = `
                <div class="period">${cert.year}</div>
                <h3>${cert.name}</h3>
                <div class="company">${cert.issuer}</div>
            `;
            certList.appendChild(card);
        });

        // Inject Courses
        const coursesList = document.getElementById('courses-list');
        coursesList.innerHTML = '';
        data.courses.forEach(course => {
            const item = document.createElement('div');
            item.className = 'skill-item reveal active';
            item.textContent = course;
            coursesList.appendChild(item);
        });

        // Inject Languages
        const langList = document.getElementById('languages-list');
        langList.innerHTML = '';
        data.languages.forEach(lang => {
            const item = document.createElement('div');
            item.className = 'skill-item reveal active';
            item.innerHTML = `<strong>${lang.name}</strong>: ${lang.level}`;
            langList.appendChild(item);
        });

        // Update Button States
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`btn-${lang}`).classList.add('active');
    };

    // Initial Render
    render(currentLang);

    // Language Switchers
    document.getElementById('btn-en').addEventListener('click', () => {
        currentLang = 'en';
        localStorage.setItem('lang', currentLang);
        render(currentLang);
    });

    document.getElementById('btn-pt').addEventListener('click', () => {
        currentLang = 'pt';
        localStorage.setItem('lang', currentLang);
        render(currentLang);
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

