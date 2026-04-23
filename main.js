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
        document.getElementById('title-languages').textContent = data.sections.languages;

        // Update Resume Link
        const resumeLink = document.getElementById('resume-link');
        const resumeText = document.getElementById('resume-text');
        resumeText.textContent = data.sections.resume;
        resumeLink.href = currentLang === 'pt' ? 'curriculo.html' : 'resume.html';

        // Update Profile Image
        const profileImg = document.getElementById('profile-img');
        if (profileImg) {
            profileImg.src = 'paulo.jpg';
        }

        // Inject Experience
        const expGrid = document.getElementById('experience-grid');
        expGrid.innerHTML = '';
        data.experience.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'card reveal active';
            card.innerHTML = `
                <span class="period">${exp.period}</span>
                <h3>${exp.role}</h3>
                <span class="company">${exp.company}</span>
                <p>${exp.description}</p>
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
            item.className = 'card reveal active';
            item.innerHTML = `
                <span class="period">${edu.year}</span>
                <h3>${edu.degree}</h3>
                <span class="company">${edu.institution}</span>
            `;
            eduList.appendChild(item);
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

    // --- Theme Management ---
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');
    
    const setTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
        } else {
            document.body.classList.remove('light-mode');
            darkIcon.style.display = 'block';
            lightIcon.style.display = 'none';
        }
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const isLight = document.body.classList.contains('light-mode');
        setTheme(isLight ? 'dark' : 'light');
    };

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(savedTheme);

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);

    // Keyboard Shortcut (Alt + T)
    window.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 't') {
            e.preventDefault();
            toggleTheme();
        }
    });
});

