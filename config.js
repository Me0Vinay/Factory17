// ===== Factory17Toys CONFIGURATION =====
// Edit this file to configure your store settings

const CONFIG = {
    // ===== STORE INFO =====
    storeName: 'Factory17Toys',
    storeTagline: 'Premium Wholesale Soft Toys',

    // ===== GOOGLE SHEETS CATALOG =====
    // HOW TO SET UP:
    // 1. Create a Google Sheet with columns matching your Excel (product_id, sub_product_id, product_name, etc.)
    // 2. Go to File → Share → Publish to web
    // 3. Select the sheet tab → Choose "Comma-separated values (.csv)" format
    // 4. Click "Publish" and copy the URL
    // 5. Paste the URL below and set useGoogleSheets to true
    //
    // After setup: Just edit your Google Sheet and refresh the website — products update instantly!
    useGoogleSheets: true,  // Set to true after pasting your sheet URL below
    googleSheetCSVUrl: 'https://docs.google.com/spreadsheets/d/1y1hXGO8GPXCWBTV8A0OkdnoiOwCuAd9EaVS1WLVp_H0/edit?usp=sharing',
    // ===== GOOGLE FORM (Order Submission) =====
    enableGoogleSheets: true,

    googleFormURL: 'https://docs.google.com/forms/d/e/1FAIpQLSdNHgN5y36JY200Cl1E0IJeOyu6ApeDpg5LYSSPRWOs5LKYyA/formResponse',
    formFields: {
        productDetails: 'entry.1813824320',
        customerName: 'entry.869793881',
        customerMobile: 'entry.1295404173',
        deliveryAddress: 'entry.2044747660'
    },

    // ===== WHATSAPP INTEGRATION =====
    // Your WhatsApp business number (with country code, no + or spaces)
    // Example: '919876543210' for Indian number +91 98765 43210
    whatsappNumber: '918130789654',
    whatsappMessage: 'Hi! I\'m interested in placing a wholesale order from Factory17Toys.',

    // ===== DISPLAY SETTINGS =====
    currency: '₹',
    productsPerPage: 50,  // Set to 0 for no pagination (show all)
};
