# Verify Entry IDs for Influencer Form

## How to Extract Correct Entry IDs from Google Form

### Method 1: Browser DevTools (Recommended)
1. Open the influencer Google Form in your browser:
   https://docs.google.com/forms/d/e/1FAIpQLSdNyABPRSpA4FigcF0WHu504sz0RflfaHt_UYoRQwhnvIWthg/viewform

2. Right-click on the **Full Name** field → **Inspect**

3. In the DevTools, look for an `<input>` with `name="entry.XXXXXXX"` or `data-name="entry.XXXXXXX"`

4. The number after `entry.` is your entry ID

5. Repeat for each field:
   - Full Name
   - Email
   - College Name
   - Preferred Role
   - Knowledge Level
   - Contact Number
   - Laptop (Has Laptop)
   - Attendance Mode
   - Placement Event

### Method 2: Network Tab Interception
1. Open DevTools → **Network** tab
2. Fill out all fields in the form
3. Click **Submit**
4. Look for a POST request to `docs.google.com/forms/d/e/...`
5. In the request payload, you'll see: `entry.1234567=value`
6. Match each entry ID to its corresponding field

### Current Entry IDs (Need Verification)
```javascript
const ENTRY_INFLUENCER = {
  fullName: 'entry.1170550368',           // ✓ Already verified
  email: 'entry.307562982',               // ✓ Already verified
  collegeName: 'entry.337561321',         // ✓ Already verified
  preferredRole: 'entry.540191966',       // ✓ Already verified
  knowledgeLevel: 'entry.898410520',      // ✓ Already verified
  contactNumber: 'entry.1265405263',      // ⚠️ PLACEHOLDER - NEEDS VERIFICATION
  hasLaptop: 'entry.543261123',           // ⚠️ PLACEHOLDER - NEEDS VERIFICATION
  attendanceMode: 'entry.1122334455',     // ⚠️ PLACEHOLDER - NEEDS VERIFICATION
  placementEvent: 'entry.2010857474',     // ⚠️ PLACEHOLDER - NEEDS VERIFICATION
}
```

### After Finding Correct Entry IDs:
1. Update `app/sections/EnrollmentForm.tsx`
2. Replace the placeholder entry IDs in `ENTRY_INFLUENCER`
3. Test the form submission
4. Verify responses appear in your Google Form responses sheet

## Testing Checklist
- [ ] All fields visible in influencer form UI
- [ ] No validation errors for empty fields
- [ ] Form submits successfully
- [ ] Response appears in Google Form responses within 5 minutes
- [ ] Both general and influencer forms work independently
- [ ] No data goes to the wrong form

## Common Issues & Solutions

### Issue: Field not appearing in form response
- **Solution**: Entry ID is incorrect. Re-inspect the form field in DevTools.

### Issue: Data going to wrong form
- **Solution**: Verify you're using the correct Google Form URLs and entry IDs.

### Issue: Form submits but no response recorded
- **Solution**: Check if Google Form settings allow responses from your domain.

## Fields Comparison

| Field | General Form | Influencer Form | Notes |
|-------|-------------|-----------------|-------|
| Full Name | ✓ | ✓ | Same across both |
| Email | ✓ | ✓ | Same validation |
| College Name | ✓ | ✓ | Required field |
| Preferred Role | ✓ | ✓ | 6 role options |
| Knowledge Level | ✓ | ✓ | 1-10 slider |
| Contact Number | ✓ | ✓ | 10-digit validation |
| Laptop | ✓ | ✓ | Yes/No radio |
| Attendance Mode | ✓ | ✓ | In Office / Virtual |
| Placement Event | ✓ | ✓ | In-Person / Virtual |
