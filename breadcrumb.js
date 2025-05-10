
/*function generateBreadcrumbs() {
  const path = window.location.pathname.split('/').filter(Boolean);
  const breadcrumbContainer = document.createElement('div');

  // Container styling with zero top margin
  Object.assign(breadcrumbContainer.style, {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    backgroundColor: '#f0f2f5',
    borderRadius: '6px',
    margin: '0 0 0 0', // Removed top margin
    fontSize: '14px'
  });

  const breadcrumbMap = {
    // Home page
    'notes': { title: 'Notes Home', link: '/notes/notes_level.html' },

    // Notes level breadcrumbs
    'notes/notes_level/notes_alevel_examboard.html': { title: 'A-Level Notes', link: '/notes/notes_level/notes_alevel_examboard.html' },
    'notes/notes_level/notes_gcse_examboard.html': { title: 'GCSE Notes', link: '/notes/notes_level/notes_gcse_examboard.html' },
    'notes/notes_level/notes_pregcse_examboard.html': { title: 'Pre-GCSE Notes', link: '/notes/notes_level/notes_pregcse_examboard.html' },

    // AQA A-Level Notes breadcrumb
    'notes/notes_level/notes_examboard/aqa_alevel_notes/aqa_alevel_notes.html': {
      title: 'AQA A-Level Notes by Paper',
      link: '/notes/notes_level/notes_examboard/aqa_alevel_notes/aqa_alevel_notes.html'
    },

    // AQA GCSE Notes breadcrumb
    'notes/notes_level/notes_examboard/aqa_gcse_notes/aqa_gcse_notes.html': {
      title: 'AQA GCSE Notes',
      link: '/notes/notes_level/notes_examboard/aqa_gcse_notes/aqa_gcse_notes.html'
    },

    // Edexcel A-Level Notes breadcrumb
    'notes/notes_level/notes_examboard/edexcel_alevel_notes/edexcel_alevel_notes.html': {
      title: 'Edexcel A-Level Notes',
      link: '/notes/notes_level/notes_examboard/edexcel_alevel_notes/edexcel_alevel_notes.html'
    },

    // AQA A-Level Technical Principles breadcrumb
    'notes/notes_level/notes_examboard/aqa_alevel_notes/technical_principles/aqa_technical_principles_alevel_notes.html': {
      title: 'AQA A-Level Notes Paper 1',
      link: '/notes/notes_level/notes_examboard/aqa_alevel_notes/technical_principles/aqa_technical_principles_alevel_notes.html'
    },

    
  };

  // Build the breadcrumbs based on the current path
  const currentPath = path.join('/');

  // Add home breadcrumb
  const homeCrumb = breadcrumbMap['notes'];
  const homeLink = document.createElement('a');
  homeLink.href = homeCrumb.link;
  homeLink.textContent = homeCrumb.title;
  Object.assign(homeLink.style, {
    color: '#1a73e8',
    textDecoration: 'none',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'all 0.2s ease'
  });

  breadcrumbContainer.appendChild(homeLink);

  // Handle breadcrumb hierarchy
  const addBreadcrumb = (crumb) => {
    const separator = document.createElement('span');
    separator.textContent = '›';
    separator.style.color = '#666';
    breadcrumbContainer.appendChild(separator);

    const link = document.createElement('a');
    link.href = crumb.link;
    link.textContent = crumb.title;
    Object.assign(link.style, {
      color: '#1a73e8',
      textDecoration: 'none',
      padding: '4px 8px',
      borderRadius: '4px',
      transition: 'all 0.2s ease'
    });

    link.addEventListener('mouseover', () => {
      link.style.backgroundColor = '#e8f0fe';
      link.style.color = '#1557b0';
    });
    link.addEventListener('mouseout', () => {
      link.style.backgroundColor = 'transparent';
      link.style.color = '#1a73e8';
    });

    breadcrumbContainer.appendChild(link);
  };

  if (breadcrumbMap[currentPath]) {
    // If we're on AQA A-Level Notes by Paper, show the full breadcrumb
    if (currentPath === 'notes/notes_level/notes_examboard/aqa_alevel_notes/technical_principles/aqa_technical_principles_alevel_notes.html') {
      const aLevelCrumb = breadcrumbMap['notes/notes_level/notes_alevel_examboard.html'];
      addBreadcrumb(aLevelCrumb);

      const aqaCrumb = breadcrumbMap['notes/notes_level/notes_examboard/aqa_alevel_notes/aqa_alevel_notes.html'];
      addBreadcrumb(aqaCrumb);
    }

    // If we're on AQA A-Level Notes, show the full breadcrumb path
    if (currentPath === 'notes/notes_level/notes_examboard/aqa_alevel_notes/aqa_alevel_notes.html') {
      const aLevelCrumb = breadcrumbMap['notes/notes_level/notes_alevel_examboard.html'];
      addBreadcrumb(aLevelCrumb);
    }

    // If we're on AQA GCSE Notes, show the full breadcrumb path
    if (currentPath === 'notes/notes_level/notes_examboard/aqa_gcse_notes/aqa_gcse_notes.html') {
      const gcseCrumb = breadcrumbMap['notes/notes_level/notes_gcse_examboard.html'];
      addBreadcrumb(gcseCrumb);
    }

    // If we're on Edexcel A-Level Notes, show the full breadcrumb path
    if (currentPath === 'notes/notes_level/notes_examboard/edexcel_alevel_notes/edexcel_alevel_notes.html') {
      const edexcelCrumb = breadcrumbMap['notes/notes_level/notes_alevel_examboard.html'];
      addBreadcrumb(edexcelCrumb);
    }

    const crumb = breadcrumbMap[currentPath];
    addBreadcrumb(crumb);

    // Insert breadcrumb container after header
    document.querySelector('header')?.insertAdjacentElement('afterend', breadcrumbContainer);
  }
}

// Generate breadcrumbs when DOM is fully loaded
document.addEventListener('DOMContentLoaded', generateBreadcrumbs);
*/