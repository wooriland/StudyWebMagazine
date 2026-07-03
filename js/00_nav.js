'use strict';

(function () {
    const sideNav = document.getElementById('sideNav');

    if (!sideNav) {
        return;
    }

    const currentPath = normalizePath(window.location.pathname);
    const rootPrefix = getRootPrefix(currentPath);

    const navGroups = [
        {
            title: 'DB',
            className: 'nav-group-db',
            items: [
                {
                    label: 'Oracle Database SQL Developer',
                    path: 'OracleSqlDeveloper/00_database_roadmap.html',
                    folder: 'OracleSqlDeveloper'
                }
            ]
        },
        {
            title: 'Backend',
            className: 'nav-group-backend',
            items: [
                {
                    label: 'Java Basics / 자바기초교안',
                    path: 'JavaBasics/01_jdk.html',
                    folder: 'JavaBasics'
                },
                {
                    label: 'Spring Boot',
                    path: 'SpringBoot/01_springboot_roadmap.html',
                    folder: 'SpringBoot'
                }
            ]
        },
        {
            title: 'Frontend',
            className: 'nav-group-frontend',
            items: [
                {
                    label: 'HTML5 & CSS3',
                    path: 'HTML5&CSS3/01_html.html',
                    folder: 'HTML5&CSS3'
                },
                {
                    label: 'ES6 JavaScript',
                    path: 'ES6/00_es6_roadmap.html',
                    folder: 'ES6'
                },
                {
                    label: 'React.js With Vite',
                    path: 'React/00_react_roadmap.html',
                    folder: 'React'
                }
            ]
        }
    ];

    renderNavigation();

    function renderNavigation() {
        sideNav.innerHTML = '';
        sideNav.appendChild(createLink('Home', '00_index.html', isRootPage(), {
            className: 'home-link'
        }));

        navGroups.forEach(function (group) {
            const groupIsActive = group.items.some(isCurrentCategory);
            const details = document.createElement('details');
            details.className = 'nav-group ' + group.className;
            details.open = groupIsActive;

            const summary = document.createElement('summary');
            summary.className = 'nav-group-title';
            summary.textContent = group.title;

            const list = document.createElement('ul');
            list.className = 'nav-group-items';

            group.items.forEach(function (item) {
                const listItem = document.createElement('li');
                const itemIsActive = isCurrentCategory(item);
                const itemIsCurrentPage = isCurrentPage(item.path);

                listItem.appendChild(createLink(item.label, item.path, itemIsActive, {
                    className: 'nav-sub-item',
                    disableWhenActive: itemIsCurrentPage,
                    ariaCurrent: itemIsCurrentPage ? 'page' : false
                }));
                list.appendChild(listItem);
            });

            details.appendChild(summary);
            details.appendChild(list);
            sideNav.appendChild(details);
        });
    }

    function createLink(label, path, isActive, options) {
        const settings = options || {};
        const link = document.createElement('a');
        link.textContent = label;
        link.href = isActive && settings.disableWhenActive !== false ? '#' : rootPrefix + path;

        if (settings.className) {
            link.classList.add(settings.className);
        }

        if (path === '00_index.html' && !settings.className) {
            link.classList.add('home-link');
        }

        if (isActive) {
            link.classList.add('active');

            if (settings.ariaCurrent !== false) {
                link.setAttribute('aria-current', settings.ariaCurrent || 'page');
            }

            if (settings.disableWhenActive !== false) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                });
            }
        }

        return link;
    }

    function isRootPage() {
        return currentPath.endsWith('/00_index.html') || currentPath.endsWith('/');
    }

    function isCurrentPage(relativePath) {
        return currentPath.endsWith('/' + normalizePath(relativePath));
    }

    function isCurrentCategory(item) {
        return isCurrentPage(item.path) || currentPath.includes('/' + normalizePath(item.folder) + '/');
    }

    function getRootPrefix(path) {
        if (
            path.includes('/HTML5&CSS3/') ||
            path.includes('/JavaBasics/') ||
            path.includes('/ES6/') ||
            path.includes('/SpringBoot/') ||
            path.includes('/OracleSqlDeveloper/') ||
            path.includes('/React/') ||
            path.includes('/studypages/')
        ) {
            return '../';
        }

        return './';
    }

    function normalizePath(path) {
        return decodeURIComponent(path).replace(/\\/g, '/');
    }
})();
