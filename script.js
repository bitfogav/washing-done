const icons = {
    wash:'<rect x="21" y="15" width="58" height="70" rx="7"/><path d="M21 34h58"/><circle cx="50" cy="58" r="17"/><circle cx="31" cy="24" r="2"/><circle cx="40" cy="24" r="2"/>',
    shirt:'<path d="M35 17l-19 12 10 17 12-7v43h37V39l12 7 10-17-20-12-11 12H47z"/>',
    hanger:'<path d="M50 29a8 8 0 1 1 8-8c0 8-8 9-8 16v6L10 68q-5 4 2 4h76q7 0 2-4L50 43"/>',
    bed:'<rect x="14" y="46" width="72" height="29" rx="4"/><path d="M14 46V30h72v16M24 30v16m52-16v16M14 75v9m72-9v9"/>',
    curtain:'<path d="M18 17h64M25 17v68q14-10 25 0 11-10 25 0V17M35 17v61m30-61v61"/>',
    iron:'<path d="M13 75h76L73 39H38q-19 0-25 36zM42 39V27h27v12M15 84h74"/>',
    dress:'<path d="M40 17h20l7 21-12 9 23 38H22l23-38-12-9zM40 17l10 12 10-12M36 43h28"/>',
    towel:'<rect x="23" y="20" width="54" height="65" rx="4"/><path d="M23 43h54M23 50h54M35 20v23"/>'
};

const services = [
    ['Duvet & pillow cleaning','Keep bedding fresh and comfortable.','From £15','bed'],
    ['Dry cleaning','Specialist garment care and professional finishing.','','hanger'],
    ['Shirt service','Crisp, professionally cleaned and pressed shirts.','','shirt'],
    ['Service wash','Everyday laundry, professionally washed and finished.','£3 per kg','wash'],
    ['Towels','Freshly laundered towels for home or work.','','towel'],
    ['Curtain cleaning','Careful cleaning for curtains and soft furnishings.','','curtain'],
    ['Wedding dress cleaning','Thoughtful care for your special garments.','','dress'],
    ['Bed linen','Fresh sheets, covers and bedding.','','bed'],
    ['Ironing service','Neatly pressed clothes, ready to wear.','','iron'],
    ['Hand washing','Gentle attention for items requiring hand washing.','','wash'],
    ['Workwear & sports kits','Practical laundry care for uniforms and team kits.','','shirt'],
    ['Repairs & alterations','Garment adjustments and repairs.','','iron']
];

// Render the service cards.
document.getElementById('servicegrid').innerHTML = services.map(([name,desc,price,icon])=>`<article class="service"><div class="visual"><svg viewBox="0 0 100 100" aria-hidden="true">${icons[icon]}</svg></div><div class="body"><h3>${name}</h3><p>${desc}</p>${price?`<p class="price">${price}</p>`:''}</div></article>`).join('');
