// Very simple heuristic "AI" helper
const suggestCategoryAndDuration = (title, description = '') => {
  const text = (title + ' ' + description).toLowerCase();

  const categories = [
    { k: ['ac','air conditioner','ac repair'], cat: 'AC Repair', dur: '2-3 hours' },
    { k: ['electric','wiring','short circuit','fan','switch'], cat: 'Electrical', dur: '1-4 hours' },
    { k: ['plumb','leak','tap','drain'], cat: 'Plumbing', dur: '1-2 hours' },
    { k: ['tv','lcd','led','screen'], cat: 'Electronics', dur: '1-3 hours' },
    { k: ['washing','machine','washer'], cat: 'Appliance Repair', dur: '1-3 hours' }
  ];

  for (const c of categories) {
    if (c.k.some(kw => text.includes(kw))) {
      return { category: c.cat, estimatedDuration: c.dur };
    }
  }

  // default fallback
  return { category: 'General Repair', estimatedDuration: '1-3 hours' };
};

module.exports = { suggestCategoryAndDuration };
