const creators = [
  {
    id: 1,
    name: 'Lena Torres',
    title: 'AI Film Director',
    location: 'New York, USA',
    rating: 4.9,
    tools: ['Runway', 'Midjourney', 'Pika'],
    skills: ['Cinematic video', 'Storyboarding', 'Brand storytelling'],
    specializations: ['Commercials', 'Product Launch', 'Brand Storytelling'],
    contentTypes: ['Video', 'Animation'],
    format: ['16:9', '9:16'],
    commercialUse: ['Commercial rights', 'Global paid social'],
    verification: ['Verified tools', 'Workflow review', 'Portfolio validation'],
    workflow: 'Prompt design + shot planning + final polish in post-production',
    cover: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    portfolio: [
      { title: 'Aster Lab launch film', type: 'Cinematic trailer', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
      { title: 'Mini campaign cutdowns', type: 'Social edit', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
      { title: 'Luxury product reveal', type: 'Motion concept', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80' },
      { title: 'Brand system teaser', type: 'Animated narrative', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    id: 2,
    name: 'Ari Mendez',
    title: 'Generative Motion Designer',
    location: 'São Paulo, Brazil',
    rating: 4.8,
    tools: ['Stable Diffusion', 'After Effects', 'Runway'],
    skills: ['Motion graphics', 'Abstract visuals', 'Campaign design'],
    specializations: ['Campaign Design', 'Brand Storytelling'],
    contentTypes: ['Animation', 'Graphic Design'],
    format: ['1:1', '4:5'],
    commercialUse: ['Commercial rights', 'Social media', 'Licensed deliverables'],
    verification: ['Tool verification', 'Past project audit'],
    workflow: 'Concept boards + compositing + social cutdowns',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    portfolio: [
      { title: 'Pulse campaign', type: 'Abstract motion pack', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80' },
      { title: 'Vivid social toolkit', type: 'Design system', image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=900&q=80' },
      { title: 'Brand launch animation', type: 'Logo reveal', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
      { title: 'Event opener', type: 'Motion story', image: 'https://images.unsplash.com/photo-1511080778348-15d6c2e90d7b?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    id: 3,
    name: 'Nia Patel',
    title: 'AI Photography Artist',
    location: 'London, UK',
    rating: 4.9,
    tools: ['Midjourney', 'Photoshop', 'Leonardo'],
    skills: ['Editorial portraits', 'Product photography', 'Lifestyle shots'],
    specializations: ['Product Launch', 'Commercials'],
    contentTypes: ['Photo', 'Graphic Design'],
    format: ['4:5', '16:9'],
    commercialUse: ['Commercial rights', 'Owned channels'],
    verification: ['Verified workflows', 'Safety review'],
    workflow: 'Prompt iteration + scene styling + post-editing for commerce',
    cover: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
    portfolio: [
      { title: 'Urban hero frames', type: 'Editorial campaign', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
      { title: 'Sculptural product styling', type: 'Product stills', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
      { title: 'Lookbook concept', type: 'Visual direction', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
      { title: 'Beauty campaign moodboard', type: 'Styling board', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    id: 4,
    name: 'Theo Kim',
    title: 'AI Character Animator',
    location: 'Seoul, South Korea',
    rating: 4.7,
    tools: ['Runway', 'Synthesia', 'Kling'],
    skills: ['Character motion', 'Explainer videos', 'Performance animation'],
    specializations: ['Commercials', 'Campaign Design'],
    contentTypes: ['Video', 'Animation'],
    format: ['9:16', '16:9'],
    commercialUse: ['Commercial rights', 'Social media'],
    verification: ['Verified character work', 'Workflow checklist'],
    workflow: 'Storyboard + motion refinement + social-ready cuts',
    cover: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    portfolio: [
      { title: 'Mascot motion reveal', type: 'Character animation', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80' },
      { title: 'Explainer sequence', type: 'Short video', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80' },
      { title: 'Brand hero clip', type: 'Narrative motion', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
      { title: 'Product animation suite', type: 'Sequence set', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    id: 5,
    name: 'Sofia Nguyen',
    title: 'AI Visual Strategist',
    location: 'Singapore',
    rating: 4.8,
    tools: ['DALL·E', 'Midjourney', 'Figma'],
    skills: ['Concept direction', 'Campaign systems', 'Brand visuals'],
    specializations: ['Brand Storytelling', 'Campaign Design'],
    contentTypes: ['Graphic Design', 'Photo'],
    format: ['1:1', '4:5'],
    commercialUse: ['Commercial rights', 'Licensed deliverables'],
    verification: ['Verified portfolio', 'Commercial-use checked'],
    workflow: 'Moodboarding + visual exploration + final art package',
    cover: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    portfolio: [
      { title: 'Brand worldbuilding', type: 'Campaign stills', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
      { title: 'Launch visual kit', type: 'Graphic design', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
      { title: 'Concept poster suite', type: 'Brand system', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
      { title: 'Campaign identity mockups', type: 'Display pack', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    id: 6,
    name: 'Marco Vale',
    title: 'AI Brand Ad Producer',
    location: 'Barcelona, Spain',
    rating: 4.9,
    tools: ['Runway', 'Photoshop', 'CapCut'],
    skills: ['Ads', 'Story sequencing', 'Short-form video'],
    specializations: ['Commercials', 'Product Launch'],
    contentTypes: ['Video', 'Photo'],
    format: ['9:16', '16:9'],
    commercialUse: ['Commercial rights', 'Global paid social'],
    verification: ['Verified ad workflow', 'Commercial deliverables'],
    workflow: 'Campaign framing + cutdowns + performance optimization',
    cover: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    portfolio: [
      { title: 'Launch reel', type: 'Paid social ad', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80' },
      { title: 'Hero product scene', type: 'Campaign video', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80' },
      { title: 'Performance cutdowns', type: 'Vertical social', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
      { title: 'Commercial edit suite', type: 'Brand film', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80' }
    ]
  }
];

const filterState = {
  content: 'All',
  keyword: '',
  specializations: new Set(['Commercials', 'Product Launch', 'Brand Storytelling', 'Campaign Design'])
};

const creatorGrid = document.getElementById('creatorGrid');
const resultCount = document.getElementById('resultCount');
const keywordSearch = document.getElementById('keywordSearch');
const modal = document.getElementById('portfolioModal');
const portfolioContent = document.getElementById('portfolioContent');

function renderCreators() {
  const filtered = creators.filter((creator) => {
    const matchesKeyword = !filterState.keyword ||
      creator.name.toLowerCase().includes(filterState.keyword.toLowerCase()) ||
      creator.tools.some((tool) => tool.toLowerCase().includes(filterState.keyword.toLowerCase())) ||
      creator.skills.some((skill) => skill.toLowerCase().includes(filterState.keyword.toLowerCase())) ||
      creator.specializations.some((specialty) => specialty.toLowerCase().includes(filterState.keyword.toLowerCase()));

    const matchesContent = filterState.content === 'All' || creator.contentTypes.includes(filterState.content);

    const matchesSpecialization = creator.specializations.some((specialty) => filterState.specializations.has(specialty));

    return matchesKeyword && matchesContent && matchesSpecialization;
  });

  resultCount.textContent = filtered.length;

  if (!filtered.length) {
    creatorGrid.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No creators match your filters</h3>
          <p>Try broadening the search or removing a content filter.</p>
        </div>
      </div>
    `;
    return;
  }

  creatorGrid.innerHTML = filtered
    .map(
      (creator) => `
        <article class="creator-card">
          <div class="creator-cover" style="background-image: url('${creator.cover}')"></div>
          <div class="creator-body">
            <div class="creator-header">
              <div>
                <h4>${creator.name}</h4>
                <p>${creator.title}</p>
              </div>
              <span class="rating">★ ${creator.rating}</span>
            </div>

            <div class="creator-meta">
              <span class="meta-pill">${creator.location}</span>
              ${creator.verification.slice(0, 2).map((item) => `<span class="meta-pill">${item}</span>`).join('')}
            </div>

            <div class="creator-tags">
              ${creator.skills.slice(0, 3).map((skill) => `<span>${skill}</span>`).join('')}
            </div>

            <div class="creator-footer">
              <span class="toolset">${creator.tools.join(' • ')}</span>
              <button class="view-btn" data-id="${creator.id}">View profile</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function openPortfolio(creatorId) {
  const creator = creators.find((item) => item.id === Number(creatorId));
  if (!creator) return;

  portfolioContent.innerHTML = `
    <div class="portfolio-banner" style="background-image: url('${creator.cover}')"></div>
    <div class="portfolio-header">
      <div>
        <span class="eyebrow">Portfolio</span>
        <h3 id="portfolioTitle">${creator.name}</h3>
      </div>
      <span class="rating">★ ${creator.rating}</span>
    </div>

    <div class="verification-bar">
      ${creator.verification.map((item) => `<span>${item}</span>`).join('')}
    </div>

    <div class="modal-grid">
      <div>
        <div class="portfolio-list">
          ${creator.portfolio
            .map(
              (item) => `
                <div class="portfolio-item">
                  <img src="${item.image}" alt="${item.title}" />
                  <div>
                    <strong>${item.title}</strong>
                    <p>${item.type}</p>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </div>

      <aside class="summary-box">
        <h4>Profile summary</h4>
        <ul>
          <li><strong>Role:</strong> ${creator.title}</li>
          <li><strong>Tools:</strong> ${creator.tools.join(', ')}</li>
          <li><strong>Specialties:</strong> ${creator.specializations.join(', ')}</li>
          <li><strong>Formats:</strong> ${creator.format.join(', ')}</li>
          <li><strong>Workflow:</strong> ${creator.workflow}</li>
        </ul>
      </aside>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closePortfolio() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

keywordSearch.addEventListener('input', (event) => {
  filterState.keyword = event.target.value.trim();
  renderCreators();
});

document.querySelectorAll('.chip').forEach((button) => {
  button.addEventListener('click', () => {
    filterState.content = button.dataset.content;
    document.querySelectorAll('.chip').forEach((chip) => chip.classList.toggle('active', chip === button));
    renderCreators();
  });
});

document.querySelectorAll('#specialtyFilterGroup input').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const value = checkbox.value;
    if (checkbox.checked) {
      filterState.specializations.add(value);
    } else {
      filterState.specializations.delete(value);
    }
    renderCreators();
  });
});

document.getElementById('clearFilters').addEventListener('click', () => {
  filterState.keyword = '';
  keywordSearch.value = '';
  filterState.content = 'All';
  document.querySelectorAll('.chip').forEach((chip) => chip.classList.toggle('active', chip.dataset.content === 'All'));

  document.querySelectorAll('#specialtyFilterGroup input').forEach((checkbox) => {
    checkbox.checked = true;
  });
  filterState.specializations = new Set(['Commercials', 'Product Launch', 'Brand Storytelling', 'Campaign Design']);
  renderCreators();
});

creatorGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.view-btn');
  if (!button) return;
  openPortfolio(button.dataset.id);
});

modal.addEventListener('click', (event) => {
  const closeTarget = event.target.closest('[data-close="true"]');
  if (closeTarget || event.target === modal) {
    closePortfolio();
  }
});

document.querySelector('.modal-close').addEventListener('click', closePortfolio);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closePortfolio();
  }
});

const briefInputs = {
  campaignName: document.getElementById('briefCampaignName'),
  objective: document.getElementById('briefObjective'),
  contentType: document.getElementById('briefContentType'),
  style: document.getElementById('briefStyle'),
  format: document.getElementById('briefFormat'),
  aspectRatio: document.getElementById('briefAspectRatio'),
  commercialUse: document.getElementById('briefCommercialUse'),
  requirements: document.getElementById('briefRequirements')
};

document.getElementById('suggestBriefBtn').addEventListener('click', () => {
  briefInputs.campaignName.value = 'Elevate Launch Campaign';
  briefInputs.objective.value = 'Design a premium product film that balances innovation, emotion, and direct conversion messaging for a global launch.';
  briefInputs.contentType.value = 'Video';
  briefInputs.style.value = 'Luxury cinematic';
  briefInputs.format.value = 'Horizontal';
  briefInputs.aspectRatio.value = '16:9';
  briefInputs.commercialUse.value = 'Global paid social + paid media';
  briefInputs.requirements.value = '- Premium cinematic visuals\n- Versioned cuts for web and paid media\n- Include product emotion + closeups\n- 2 alternate concepts with a luxury look and feel';
});

document.getElementById('publishBriefBtn').addEventListener('click', () => {
  const summary = `Brief published: ${briefInputs.campaignName.value} — ${briefInputs.contentType.value}, ${briefInputs.style.value.toLowerCase()} style, ${briefInputs.aspectRatio.value} format.`;
  alert(summary);
});

document.getElementById('saveAsDraftBtn').addEventListener('click', () => {
  alert('Draft saved successfully.');
});

document.getElementById('ctaDiscover').addEventListener('click', () => {
  document.getElementById('discover').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('ctaBrief').addEventListener('click', () => {
  document.getElementById('briefs').scrollIntoView({ behavior: 'smooth' });
});

renderCreators();
