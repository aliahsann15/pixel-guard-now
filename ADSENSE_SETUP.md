# Google AdSense Setup Guide for PixelGuard

## Overview
Your website is now fully configured for Google AdSense monetization with strategic ad placements across all pages.

## Setup Instructions

### 1. Create a Google AdSense Account
1. Go to [Google AdSense](https://www.google.com/adsense)
2. Sign up with your Google account
3. Fill in your website details: `https://pixelgaurd.site`
4. Verify your identity and payment information

### 2. Add Your Site to AdSense
1. In AdSense dashboard, go to **Sites**
2. Click **Add site** and enter: `pixelgaurd.site`
3. Follow the verification steps

### 3. Get Your Publisher ID
1. In AdSense dashboard, click on **Account** → **Account Information**
2. Find your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. Copy this ID

### 4. Update Your Website Code

#### Replace Publisher ID in 2 Files:

**File 1: `index.html` (Line 27)**
```html
<!-- Current (placeholder) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"

<!-- Replace with your actual Publisher ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
```

**File 2: `src/components/AdSense.tsx` (Line 38)**
```tsx
// Current (placeholder)
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"

// Replace with your actual Publisher ID
data-ad-client="ca-pub-1234567890123456"
```

### 5. Create Ad Units in AdSense
Once your site is approved, create ad units:

1. Go to **Ads** → **By ad unit** → **Display ads**
2. Create ad units for each slot used in the code:

#### Ad Slot IDs to Create:
- **Slot 1234567890**: Homepage - After Hero Section (Horizontal)
- **Slot 1234567891**: Homepage - After Tool Section (Auto)
- **Slot 1234567892**: Homepage - Between Features (Rectangle)
- **Slot 1234567893**: Homepage - Before Footer (Horizontal)
- **Slot 1234567894**: Privacy Policy - Top (Horizontal)
- **Slot 1234567895**: Privacy Policy - Bottom (Rectangle)
- **Slot 1234567896**: Terms of Service - Top (Horizontal)
- **Slot 1234567897**: Terms of Service - Bottom (Rectangle)
- **Slot 1234567898**: Contact Us - After Header (Horizontal)
- **Slot 1234567899**: Contact Us - Bottom (Rectangle)

3. For each ad unit:
   - Choose **Display ads**
   - Select size: **Responsive** (recommended) or specific sizes
   - Copy the **Ad slot ID** (numbers only, e.g., `1234567890`)
   - Replace the placeholder IDs in your code

### 6. Update Ad Slot IDs
Open `src/pages/Index.tsx`, `src/pages/PrivacyPolicy.tsx`, `src/pages/TermsOfService.tsx`, and `src/pages/ContactUs.tsx`.

Replace placeholder `adSlot` values with your actual ad unit IDs from AdSense.

Example:
```tsx
// Before
<AdSense adSlot="1234567890" />

// After (with your real ad unit ID)
<AdSense adSlot="9876543210" />
```

## Ad Placement Strategy

### Homepage (`src/pages/Index.tsx`)
- ✅ After Hero section - catches initial visitor attention
- ✅ After Tool section - after main interaction
- ✅ Between Features and How It Works - content break
- ✅ Before Footer - final impression

### Legal Pages (`PrivacyPolicy.tsx`, `TermsOfService.tsx`)
- ✅ Top of content - immediate visibility
- ✅ Bottom of content - after reading

### Contact Page (`ContactUs.tsx`)
- ✅ After header - early placement
- ✅ Bottom - after viewing contact info

## Ad Formats Used

1. **Horizontal** (`horizontal`) - Wide banners for page sections
2. **Auto** (`auto`) - Responsive, adapts to screen size
3. **Rectangle** (`rectangle`) - Medium rectangle (300x250 typical)

All ads are set to `fullWidthResponsive={true}` for mobile optimization.

## Testing

### Before Going Live:
1. Test with AdSense in **Test Mode** first
2. Check all pages load correctly
3. Ensure ads don't block content
4. Test on mobile and desktop

### After Going Live:
1. Use AdSense Chrome extension to verify ads
2. Monitor performance in AdSense dashboard
3. Check for policy violations

## AdSense Policies to Follow

✅ **Already Compliant:**
- Privacy policy mentions Google AdSense
- Terms of Service mentions third-party advertisements
- Contact information is available

⚠️ **Important Rules:**
- Never click your own ads
- Don't encourage users to click ads
- Maintain good content quality
- Ensure fast page loading

## Monetization Tips

1. **Content Quality**: Keep adding valuable content
2. **Traffic**: Focus on SEO and user acquisition
3. **User Experience**: Don't overwhelm with too many ads
4. **Analytics**: Monitor which placements perform best
5. **A/B Testing**: Try different ad formats and positions

## Troubleshooting

### Ads Not Showing?
- Wait 24-48 hours after setup
- Check browser console for errors
- Verify Publisher ID is correct
- Ensure site is approved in AdSense
- Check for ad blockers

### Blank Ad Spaces?
- Normal during testing phase
- May show after site gets traffic
- Can take time for Google to serve relevant ads

### Policy Issues?
- Review AdSense policies
- Check email for notifications
- Address issues promptly in AdSense dashboard

## Support

- **AdSense Help**: https://support.google.com/adsense
- **Email**: aliahsann15@gmail.com

## Notes

- All ad components are in `src/components/AdSense.tsx`
- Ads won't show in development mode
- Revenue typically visible after $100 threshold
- Payment setup required in AdSense dashboard

---

**Remember**: Replace ALL placeholder IDs before deploying to production!
