// Single source of truth for site-wide contact details.
// Update once here — every page reading from this file updates automatically.

export const site = {
	name: 'El-Hage Assurances',
	tagline: 'Insurance, simplified — across Québec & Ontario.',
	phone: {
		display: '+1 (514) 577 5715',
		href: 'tel:+15145775715'
	},
	email: {
		display: 'info@elhageassurances.com',
		href: 'mailto:info@elhageassurances.com'
	},
	address: {
		line1: '4220 blvd Saint-Martin O',
		line2: 'Laval, QC H7T 1C1',
		full:  '4220 blvd Saint-Martin O, Laval, QC H7T 1C1'
	},
	// TODO: replace placeholder hrefs with real social URLs
	social: {
		facebook:  '#',
		instagram: '#',
		linkedin:  '#'
	},
	// TODO: replace with real Microsoft Bookings URL
	// (must be a full https:// URL so the static-site prerenderer skips it)
	bookings: 'https://outlook.office.com/bookwithme/elhageassurances-TODO'
};
