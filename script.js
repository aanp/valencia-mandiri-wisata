/**
 * Valencia Mandiri Wisata - Modular Frontend Application Script (Bilingual ID / EN)
 * Mengelola Multi-Bahasa (Indonesia & Inggris), Katalog Paket Wisata, Filter Kategori,
 * Pencarian Cepat, Modal Detail Itinerary, Lightbox Galeri, dan Integrasi Reservasi WhatsApp.
 */

const SITE_CONFIG = {
  brandName: 'PT Valencia Mandiri Wisata',
  shortName: 'Valencia Mandiri Wisata',
  whatsappNumber: '6282233835758', // Format internasional tanpa '+' (Admin: +62 822-3383-5758)
  whatsappDisplay: '+62 822-3383-5758',
  phoneDisplay: '+62 817-202-578',
  email: 'ullatifah@gmail.com',
  address: 'Mutihan, Gunungpring, Kec. Muntilan, Kabupaten Magelang, Jawa Tengah 56415'
};

/**
 * Kamus Terjemahan Statis Halaman (ID & EN)
 */
const I18N_DICTIONARY = {
  id: {
    page_title: 'Valencia Mandiri Wisata | Biro Perjalanan Wisata, Paket Tour & Sewa Bus Pariwisata Terpercaya',
    topbar_official: 'Biro Perjalanan Wisata Resmi & Terdaftar',
    topbar_hours: 'Senin – Sabtu: 08.00 – 20.00 WIB (Support WA 24 Jam)',
    brand_subtitle: 'Tour & Travel Wisata',
    nav_home: 'Beranda',
    nav_packages: 'Paket Wisata',
    nav_services: 'Layanan',
    nav_gallery: 'Galeri',
    nav_gallery_mobile: 'Galeri & Testimoni',
    nav_about: 'Tentang Kami',
    nav_contact: 'Kontak',
    nav_contact_mobile: 'Kontak & Reservasi',
    cta_free_consult: 'Konsultasi Gratis',
    cta_free_consult_wa: 'Konsultasi Gratis via WA',
    cta_book_now: 'Pesan Sekarang',

    // Hero Section
    hero_badge: 'Mitra Perjalanan Resmi • 12.500+ Wisatawan Puas',
    hero_title_prefix: 'Jelajahi Keindahan Dunia Bersama',
    hero_subtitle:
      'Nikmati pengalaman liburan bebas repot dengan harga transparan, akomodasi terkurasi, pemandu profesional, serta pilihan itinerary fleksibel untuk keluarga, pasangan, maupun instansi Anda.',
    hero_btn_explore: 'Lihat Paket Wisata',
    hero_btn_consult: 'Konsultasi Gratis',
    hero_stat_routes: 'Pilihan Paket & Rute',
    hero_stat_recommend: 'Klien Merekomendasikan',
    hero_stat_rating: 'Rating Kepuasan',
    hero_promo_badge: 'Promo Musim Liburan',
    hero_promo_title: 'Explore Bali & Labuan Bajo',
    hero_promo_price: 'Mulai Rp1.950.000 / pax • All-In Fasilitas',
    hero_promo_btn: 'Cek Promo',
    hero_card_honest_title: 'Harga Jujur',
    hero_card_honest_desc: 'Tanpa Biaya Tersembunyi',
    hero_card_custom_title: 'Custom Trip',
    hero_card_custom_desc: 'Privat, Keluarga & Grup',

    // Quick Search
    qs_title: 'Cari Cepat Paket Wisata & Armada',
    qs_subtitle: 'Pilih destinasi dan jadwal rencana keberangkatan Anda',
    qs_dest_label: 'Tujuan Wisata / Kata Kunci',
    qs_dest_placeholder: 'Misal: Bali, Bajo, Jepang, Bus...',
    qs_cat_label: 'Kategori Perjalanan',
    qs_cat_all: 'Semua Kategori',
    qs_cat_domestic: 'Wisata Domestik',
    qs_cat_international: 'Wisata Internasional',
    qs_cat_honeymoon: 'Paket Honeymoon',
    qs_cat_gathering: 'Gathering / Outing Kantor',
    qs_cat_transport: 'Sewa Mobil / Bus Pariwisata',
    qs_date_label: 'Tanggal Keberangkatan',
    qs_pax_label: 'Jumlah Peserta (Orang)',
    qs_btn_search: 'Cari Paket',

    // Catalog Section
    cat_badge: 'Katalog Paket Wisata Unggulan',
    cat_title: 'Pilihan Destinasi Terbaik dengan Harga Transparan',
    cat_subtitle:
      'Setiap paket dirancang lengkap dengan akomodasi nyaman, transportasi prima, tiket wisata, serta pemandu berpengalaman. Tersedia opsi Private Trip maupun Group Tour.',
    filter_all: 'Semua Paket',
    filter_domestic: 'Domestik',
    filter_international: 'Internasional',
    filter_honeymoon: 'Honeymoon',
    filter_gathering: 'Gathering / Outing',
    filter_transport: 'Sewa Mobil / Bus',
    catalog_search_placeholder: 'Cari destinasi, fasilitas, atau nama paket...',
    sort_label: 'Urutkan:',
    sort_popular: 'Paling Populer',
    sort_price_asc: 'Harga Termurah',
    sort_price_desc: 'Harga Tertinggi',
    sort_rating: 'Rating Tertinggi',
    empty_title: 'Paket wisata yang Anda cari belum tampil di filter ini',
    empty_subtitle: 'Silakan reset filter atau konsultasikan destinasi custom Anda langsung dengan tim kami.',
    empty_btn_reset: 'Tampilkan Semua Paket',
    empty_btn_custom: 'Request Custom Tour',
    card_facilities_heading: 'Highlight Fasilitas:',
    card_price_from: 'Harga mulai dari',
    card_btn_detail: 'Detail',
    card_btn_book: 'Booking',

    // About & Why Choose Us
    about_badge: 'Tentang Valencia Mandiri Wisata',
    about_title: 'Partner Perjalanan Terpercaya untuk Momen Berharga Anda',
    about_desc:
      'PT Valencia Mandiri Wisata hadir sebagai solusi perjalanan wisata menyeluruh yang mengutamakan kenyamanan, ketepatan waktu, dan transparansi biaya. Kami melayani perjalanan liburan keluarga, bulan madu romantis, company gathering korporat, hingga penyewaan armada bus pariwisata.',
    about_legal_title: 'Identitas & Legalitas Perusahaan Resmi',
    about_legal_desc:
      'Terdaftar resmi dengan izin usaha Biro Perjalanan Wisata (NIB & Kemenparekraf), rekening perusahaan terverifikasi, serta perlindungan asuransi perjalanan bagi seluruh peserta.',
    about_btn_contact: 'Hubungi Tim Reservasi',
    about_btn_gallery: 'Lihat Dokumentasi Klien',
    why_1_title: '1. Harga Transparan & Kompetitif',
    why_1_desc:
      'Seluruh rincian fasilitas, tiket objek wisata, hotel, dan konsumsi tercantum jelas di awal tanpa biaya tersembunyi (no hidden fee).',
    why_2_title: '2. Pemandu Wisata Profesional',
    why_2_desc:
      'Didampingi Tour Leader dan pemandu lokal bersertifikasi yang ramah, komunikatif, serta sigap membantu dokumentasi perjalanan Anda.',
    why_3_title: '3. Itinerary Fleksibel & Custom',
    why_3_desc:
      'Jadwal kunjungan, kelas hotel, menu restoran halal, hingga titik penjemputan bebas disesuaikan dengan preferensi dan anggaran Anda.',
    why_4_title: '4. Legalitas Resmi & Aman',
    why_4_desc:
      'Transaksi aman melalui rekening resmi perusahaan PT Valencia Mandiri Wisata dengan kontrak kerja / invoice resmi untuk pribadi maupun instansi.',

    // Services Section
    srv_badge: 'Layanan Terpadu Satu Pintu',
    srv_title: 'Layanan Tambahan Valencia Mandiri Wisata',
    srv_subtitle:
      'Selain paket wisata reguler, kami menyediakan layanan pendukung lengkap untuk memastikan seluruh kebutuhan mobilitas dan dokumen perjalanan Anda terpenuhi.',
    srv_1_title: 'Sewa Transportasi Pariwisata',
    srv_1_desc:
      'Penyewaan armada pariwisata tahun muda dengan kabin bersih, AC dingin, karaoke, dan pengemudi berpengalaman untuk dalam maupun luar kota.',
    srv_1_item1: 'Big Bus SHD/HDD (45 – 59 Seat) & Medium Bus (31 – 35 Seat)',
    srv_1_item2: 'Toyota Hiace Commuter & Hiace Premio Luxury',
    srv_1_item3: 'Innova Reborn / Zenix, Fortuner & Alphard VIP',
    srv_1_btn: 'Cek Tarif Sewa Armada',
    srv_2_title: 'Pengurusan Dokumen & Tiket',
    srv_2_desc:
      'Layanan cepat dan resmi untuk pemesanan tiket perjalanan serta pengurusan dokumen imigrasi tanpa perlu antre panjang.',
    srv_2_item1: 'Tiket Pesawat Domestik & Internasional (Grup / Individu)',
    srv_2_item2: 'Pendampingan Paspor Baru / Perpanjangan & Visa Turis',
    srv_2_item3: 'Voucher Hotel, Tiket Kereta Api & Asuransi Perjalanan',
    srv_2_btn: 'Konsultasi Tiket & Visa',
    srv_3_title: 'Custom Tour Korporat & Keluarga',
    srv_3_desc:
      'Rancang acara perjalanan eksklusif sesuai kebutuhan perusahaan, instansi pemerintahan, sekolah, maupun keluarga besar Anda.',
    srv_3_item1: 'Company Gathering, Outbound, Rafting & Gala Dinner',
    srv_3_item2: 'Kunjungan Kerja (Kunker), MICE & Study Tour Kampus',
    srv_3_item3: 'Private Family Trip Ramah Anak & Lansia',
    srv_3_btn: 'Request Proposal Custom',

    // Gallery & Testimonials
    gal_badge: 'Bukti Nyata Pelayanan Kami',
    gal_title: 'Galeri Perjalanan & Testimoni Klien',
    gal_subtitle:
      'Ribuan senyum kebahagiaan dari pelanggan individu, keluarga, hingga perusahaan nasional yang telah mempercayakan perjalanannya kepada Valencia Mandiri Wisata.',
    gal_filter_all: 'Semua Dokumentasi',
    gal_filter_domestic: 'Wisata Domestik',
    gal_filter_international: 'Tur Internasional',
    gal_filter_gathering: 'Gathering & Outbound',
    gal_filter_fleet: 'Armada Pariwisata',
    testi_heading: 'Apa Kata Pelanggan Kami?',
    testi_subheading: 'Ulasan asli dari klien yang telah berangkat bersama Valencia Mandiri Wisata',
    testi_1_quote:
      '"Acara Company Gathering kantor kami sebanyak 120 orang ke Bromo & Malang berjalan sangat rapi. Bus pariwisatanya baru, hotel sesuai kontrak, dan tim dokumentasi dronenya luar biasa keren!"',
    testi_1_role: 'HR Manager PT Mitra Karya – Jakarta',
    testi_2_quote:
      '"Ambil paket Honeymoon Ubud & Nusa Penida 4H3M di Valencia Mandiri Wisata benar-benar berkesan. Private pool villanya romantis, driver sangat sopan, dan tidak ada biaya tambahan dadakan sama sekali."',
    testi_2_role: 'Paket Honeymoon Bali – Bandung',
    testi_3_quote:
      '"Liburan keluarga besar 14 orang ke Labuan Bajo & sewa Hiace Premio sangat memuaskan. Anak-anak dan orang tua kami yang lansia dilayani dengan sangat sabar oleh tour leader Valencia Mandiri."',
    testi_3_role: 'Family Private Trip – Surabaya',

    // Booking & Contact Section
    book_badge: 'Reservasi Cepat & Permintaan Penawaran',
    book_title: 'Formulir Pemesanan Paket Wisata',
    book_subtitle:
      'Isi data rencana perjalanan Anda di bawah ini. Sistem kami akan merangkum rincian pesanan dan menghubungkan Anda langsung ke WhatsApp Admin resmi Valencia Mandiri Wisata.',
    form_name_label: 'Nama Lengkap / Instansi',
    form_name_placeholder: 'Contoh: Budi Santoso / PT Maju Jaya',
    form_phone_label: 'Nomor WhatsApp Aktif',
    form_phone_placeholder: 'Contoh: 081234567890',
    form_pkg_label: 'Pilihan Paket Wisata / Layanan',
    form_date_label: 'Tanggal Keberangkatan',
    form_pax_label: 'Jumlah Peserta (Orang)',
    form_city_label: 'Kota Asal / Titik Jemput',
    form_city_placeholder: 'Misal: Jakarta / Surabaya',
    form_notes_label: 'Catatan / Permintaan Khusus (Opsional)',
    form_notes_placeholder:
      'Contoh: Request hotel bintang 4 dekat pantai, makanan halal, tambahan dokumentasi drone, dll.',
    form_est_label: 'Estimasi Awal Biaya Perjalanan:',
    form_submit_btn: 'Kirim Reservasi via WhatsApp Sekarang',
    form_feedback: 'Membuka WhatsApp Admin Valencia Mandiri Wisata... Pastikan aplikasi WhatsApp Anda aktif.',
    preview_title: 'Pratinjau Pesan Otomatis WhatsApp',
    preview_badge: 'Format Rapi',
    contact_card_title: 'Kantor & Kontak Resmi',
    contact_addr_title: 'Alamat Kantor Pusat',
    contact_phone_title: 'Telepon & Hotline WhatsApp',
    contact_phone_office: 'Telepon: +62 817-202-578',
    contact_hours_title: 'Jam Operasional Layanan',
    contact_hours_detail: 'Senin – Sabtu: 08.00 – 20.00 WIB | Minggu & Hari Libur: Reservasi Online / WhatsApp 24 Jam',

    // Footer
    footer_desc:
      'Biro perjalanan wisata resmi yang berkomitmen menghadirkan pengalaman liburan berkualitas, aman, dan berkesan ke berbagai destinasi unggulan Nusantara maupun mancanegara.',
    footer_quick_links: 'Tautan Cepat',
    footer_popular_pkgs: 'Paket & Layanan Populer',
    footer_pop_1: 'Paket Wisata Bali & Nusa Penida',
    footer_pop_2: 'Sailing Komodo Labuan Bajo Phinisi',
    footer_pop_3: 'Tour Jepang & 3 Negara Asia',
    footer_pop_4: 'Paket Honeymoon Private Pool Villa',
    footer_pop_5: 'Company Gathering & Outbound',
    footer_pop_6: 'Sewa Bus Pariwisata & Hiace Premio',
    footer_contact_heading: 'Hubungi Kami',
    footer_addr_label: 'Alamat Kantor:',
    footer_phone_label: 'Telepon / WhatsApp:',
    footer_email_label: 'Email Resmi:',
    footer_hours_label: 'Jam Operasional:',
    footer_hours_val: 'Senin – Sabtu (08.00 – 20.00 WIB) • Layanan WhatsApp Aktif 24 Jam',
    footer_copyright: 'Seluruh Hak Cipta Dilindungi.',
    footer_terms: 'Syarat & Ketentuan',
    footer_privacy: 'Kebijakan Privasi',
    footer_help: 'Bantuan Pelanggan',

    // Floating WhatsApp
    wa_online_status: 'Online • Balasan Cepat',
    wa_greeting: 'Halo! 👋 Ada yang bisa kami bantu untuk rencana liburan atau sewa armada Anda hari ini?',
    wa_quick_1: '🏖️ Tanya Promo Paket Wisata',
    wa_quick_2: '🏢 Proposal Gathering / Outing Kantor',
    wa_quick_3: '🚌 Sewa Bus Pariwisata / Hiace',
    wa_pill_label: 'Chat Admin WA'
  },

  en: {
    page_title: 'Valencia Mandiri Wisata | Trusted Tour & Travel Agency, Holiday Packages & Bus Charter',
    topbar_official: 'Licensed & Registered Tour and Travel Agency',
    topbar_hours: 'Mon – Sat: 08:00 – 20:00 WIB (24/7 WhatsApp Support)',
    brand_subtitle: 'Tour & Travel Agency',
    nav_home: 'Home',
    nav_packages: 'Tour Packages',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_gallery_mobile: 'Gallery & Testimonials',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_contact_mobile: 'Contact & Booking',
    cta_free_consult: 'Free Consultation',
    cta_free_consult_wa: 'Free Consultation via WA',
    cta_book_now: 'Book Now',

    // Hero Section
    hero_badge: 'Official Travel Partner • 12,500+ Happy Travelers',
    hero_title_prefix: 'Explore the Beauty of the World with',
    hero_subtitle:
      'Enjoy a hassle-free holiday experience with transparent pricing, curated accommodations, professional tour guides, and flexible itineraries tailored for families, couples, and corporate groups.',
    hero_btn_explore: 'Explore Tour Packages',
    hero_btn_consult: 'Free Consultation',
    hero_stat_routes: 'Curated Routes & Packages',
    hero_stat_recommend: 'Client Recommendation',
    hero_stat_rating: 'Satisfaction Rating',
    hero_promo_badge: 'Holiday Season Promo',
    hero_promo_title: 'Explore Bali & Labuan Bajo',
    hero_promo_price: 'From Rp1,950,000 / pax • All-In Facilities',
    hero_promo_btn: 'View Promo',
    hero_card_honest_title: 'Transparent Price',
    hero_card_honest_desc: 'Zero Hidden Fees',
    hero_card_custom_title: 'Custom Trips',
    hero_card_custom_desc: 'Private, Family & Corporate',

    // Quick Search
    qs_title: 'Quick Search Tour Packages & Fleet',
    qs_subtitle: 'Select your preferred destination and planned departure date',
    qs_dest_label: 'Destination / Keyword',
    qs_dest_placeholder: 'E.g., Bali, Komodo, Japan, Bus...',
    qs_cat_label: 'Travel Category',
    qs_cat_all: 'All Categories',
    qs_cat_domestic: 'Domestic Tours',
    qs_cat_international: 'International Tours',
    qs_cat_honeymoon: 'Honeymoon Packages',
    qs_cat_gathering: 'Corporate Gathering / Outing',
    qs_cat_transport: 'Car / Luxury Bus Charter',
    qs_date_label: 'Departure Date',
    qs_pax_label: 'Participants (Pax)',
    qs_btn_search: 'Find Packages',

    // Catalog Section
    cat_badge: 'Featured Tour Packages Catalog',
    cat_title: 'Top Destinations with Transparent Pricing',
    cat_subtitle:
      'Every package is thoughtfully crafted with comfortable stays, prime transport, attraction tickets, and experienced guides. Available for Private Trips and Group Tours.',
    filter_all: 'All Packages',
    filter_domestic: 'Domestic',
    filter_international: 'International',
    filter_honeymoon: 'Honeymoon',
    filter_gathering: 'Gathering / Outing',
    filter_transport: 'Car / Bus Charter',
    catalog_search_placeholder: 'Search destination, facility, or package name...',
    sort_label: 'Sort by:',
    sort_popular: 'Most Popular',
    sort_price_asc: 'Lowest Price',
    sort_price_desc: 'Highest Price',
    sort_rating: 'Highest Rated',
    empty_title: 'No matching tour packages found for this filter',
    empty_subtitle: 'Please reset the filter or consult your custom destination directly with our travel specialists.',
    empty_btn_reset: 'Show All Packages',
    empty_btn_custom: 'Request Custom Tour',
    card_facilities_heading: 'Key Highlights:',
    card_price_from: 'Starting from',
    card_btn_detail: 'Details',
    card_btn_book: 'Book Now',

    // About & Why Choose Us
    about_badge: 'About Valencia Mandiri Wisata',
    about_title: 'Your Trusted Travel Partner for Unforgettable Moments',
    about_desc:
      'PT Valencia Mandiri Wisata delivers end-to-end travel solutions prioritizing comfort, punctuality, and cost transparency. We organize family vacations, romantic honeymoons, corporate gatherings, and executive bus charters.',
    about_legal_title: 'Official Corporate Identity & Legality',
    about_legal_desc:
      'Officially registered and licensed as a Tour & Travel Agency (NIB & Ministry of Tourism), with verified corporate bank accounts and travel insurance coverage for all participants.',
    about_btn_contact: 'Contact Reservation Team',
    about_btn_gallery: 'View Client Gallery',
    why_1_title: '1. Transparent & Competitive Pricing',
    why_1_desc:
      'All inclusions, attraction tickets, hotels, and meals are clearly stated upfront with zero hidden costs.',
    why_2_title: '2. Certified Professional Guides',
    why_2_desc:
      'Accompanied by friendly, certified Tour Leaders and local guides who are ready to assist and capture your best travel moments.',
    why_3_title: '3. Flexible & Customizable Itinerary',
    why_3_desc:
      'Sightseeing schedules, hotel tiers, halal dining options, and pick-up points can be tailored to your preferences and budget.',
    why_4_title: '4. Official Legality & Peace of Mind',
    why_4_desc:
      'Secure transactions via PT Valencia Mandiri Wisata official corporate accounts, complete with formal contracts and invoices.',

    // Services Section
    srv_badge: 'One-Stop Travel Solutions',
    srv_title: 'Additional Services by Valencia Mandiri Wisata',
    srv_subtitle:
      'Beyond regular tour packages, we provide comprehensive support services to fulfill all your mobility and travel documentation needs.',
    srv_1_title: 'Tourist Transport & Bus Charter',
    srv_1_desc:
      'Late-model tourist vehicles featuring spotless cabins, cold AC, karaoke entertainment, and experienced drivers for city and intercity trips.',
    srv_1_item1: 'Big Bus SHD/HDD (45 – 59 Seats) & Medium Bus (31 – 35 Seats)',
    srv_1_item2: 'Toyota Hiace Commuter & Hiace Premio Luxury',
    srv_1_item3: 'Innova Reborn / Zenix, Fortuner & VIP Alphard',
    srv_1_btn: 'Check Fleet Charter Rates',
    srv_2_title: 'Flight Tickets & Visa Assistance',
    srv_2_desc:
      'Fast and reliable assistance for domestic/international flight bookings and immigration documents without long queues.',
    srv_2_item1: 'Domestic & International Flight Tickets (Group / Individual)',
    srv_2_item2: 'New Passport / Renewal & Tourist Visa Assistance',
    srv_2_item3: 'Hotel Vouchers, Train Tickets & Travel Insurance',
    srv_2_btn: 'Consult Tickets & Visa',
    srv_3_title: 'Corporate & Family Custom Tours',
    srv_3_desc:
      'Design exclusive travel events tailored for companies, government institutions, schools, or extended family gatherings.',
    srv_3_item1: 'Company Gathering, Outbound Team Building, Rafting & Gala Dinner',
    srv_3_item2: 'Official Working Visits, MICE & Academic Study Tours',
    srv_3_item3: 'Child-Friendly & Senior-Friendly Private Family Trips',
    srv_3_btn: 'Request Custom Proposal',

    // Gallery & Testimonials
    gal_badge: 'Real Proof of Our Service',
    gal_title: 'Travel Gallery & Client Testimonials',
    gal_subtitle:
      'Thousands of happy smiles from solo travelers, families, and national corporations who have entrusted their journeys to Valencia Mandiri Wisata.',
    gal_filter_all: 'All Documentation',
    gal_filter_domestic: 'Domestic Tours',
    gal_filter_international: 'International Tours',
    gal_filter_gathering: 'Gathering & Outbound',
    gal_filter_fleet: 'Tourist Fleet',
    testi_heading: 'What Do Our Clients Say?',
    testi_subheading: 'Verified reviews from travelers who have explored with Valencia Mandiri Wisata',
    testi_1_quote:
      '"Our 120-person Company Gathering to Mt. Bromo & Malang ran flawlessly. The tourist buses were brand new, hotels matched the contract, and the drone documentation team was amazing!"',
    testi_1_role: 'HR Manager at PT Mitra Karya – Jakarta',
    testi_2_quote:
      '"Taking the 4D3N Ubud & Nusa Penida Honeymoon package with Valencia Mandiri Wisata was truly memorable. The private pool villa was romantic, the driver was polite, and there were no surprise fees."',
    testi_2_role: 'Bali Honeymoon Package – Bandung',
    testi_3_quote:
      '"Our extended family trip of 14 people to Labuan Bajo & Hiace Premio rental was super satisfying. Both our kids and elderly parents were patiently assisted by Valencia Mandiri’s tour leader."',
    testi_3_role: 'Family Private Trip – Surabaya',

    // Booking & Contact Section
    book_badge: 'Instant Reservation & Quotation Request',
    book_title: 'Tour Package Booking Form',
    book_subtitle:
      'Fill in your travel plan below. Our system will summarize your booking details and connect you directly to Valencia Mandiri Wisata’s official WhatsApp Admin.',
    form_name_label: 'Full Name / Company Name',
    form_name_placeholder: 'E.g., John Doe / PT Maju Jaya',
    form_phone_label: 'Active WhatsApp Number',
    form_phone_placeholder: 'E.g., +6281234567890',
    form_pkg_label: 'Selected Tour Package / Service',
    form_date_label: 'Departure Date',
    form_pax_label: 'Number of Participants (Pax)',
    form_city_label: 'Origin City / Pick-up Point',
    form_city_placeholder: 'E.g., Jakarta / Bali / Surabaya',
    form_notes_label: 'Additional Notes / Special Requests (Optional)',
    form_notes_placeholder:
      'E.g., Request 4-star beachfront hotel, halal meals, extra drone documentation, etc.',
    form_est_label: 'Initial Estimated Trip Cost:',
    form_submit_btn: 'Send Reservation via WhatsApp Now',
    form_feedback: 'Opening Valencia Mandiri Wisata WhatsApp Admin... Please make sure WhatsApp is active.',
    preview_title: 'Automated WhatsApp Message Preview',
    preview_badge: 'Formatted Message',
    contact_card_title: 'Official Office & Contacts',
    contact_addr_title: 'Head Office Address',
    contact_phone_title: 'Phone & WhatsApp Hotline',
    contact_phone_office: 'Phone: +62 817-202-578',
    contact_hours_title: 'Operating Hours',
    contact_hours_detail: 'Mon – Sat: 08:00 – 20:00 WIB | Sun & Holidays: 24/7 Online & WhatsApp Booking',

    // Footer
    footer_desc:
      'A licensed tour and travel agency committed to delivering safe, high-quality, and memorable holiday experiences across Indonesia and international destinations.',
    footer_quick_links: 'Quick Links',
    footer_popular_pkgs: 'Popular Packages & Services',
    footer_pop_1: 'Bali & Nusa Penida Tour Package',
    footer_pop_2: 'Labuan Bajo Phinisi Komodo Sailing',
    footer_pop_3: 'Japan & 3-Country Asia Tours',
    footer_pop_4: 'Private Pool Villa Honeymoon Package',
    footer_pop_5: 'Corporate Gathering & Outbound',
    footer_pop_6: 'Luxury Bus & Hiace Premio Charter',
    footer_contact_heading: 'Contact Us',
    footer_addr_label: 'Office Address:',
    footer_phone_label: 'Phone / WhatsApp:',
    footer_email_label: 'Official Email:',
    footer_hours_label: 'Operating Hours:',
    footer_hours_val: 'Mon – Sat (08:00 – 20:00 WIB) • 24/7 WhatsApp Support',
    footer_copyright: 'All Rights Reserved.',
    footer_terms: 'Terms & Conditions',
    footer_privacy: 'Privacy Policy',
    footer_help: 'Customer Support',

    // Floating WhatsApp
    wa_online_status: 'Online • Fast Response',
    wa_greeting: 'Hello! 👋 How can we help you plan your holiday or transport charter today?',
    wa_quick_1: '🏖️ Ask About Tour Promos',
    wa_quick_2: '🏢 Corporate Gathering Proposal',
    wa_quick_3: '🚌 Bus / Hiace Charter Rates',
    wa_pill_label: 'Chat on WhatsApp'
  }
};

/**
 * Data Paket Wisata dalam 2 Bahasa (ID & EN)
 */
const TOUR_PACKAGES = [
  {
    id: 'bali-nusa-penida-4h3m',
    category: 'Domestik',
    price: 2850000,
    originalPrice: 3350000,
    rating: 4.9,
    reviews: 184,
    badgeColor: 'bg-amber-500 text-slate-950',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Explore Bali & Nusa Penida Exclusive',
        destination: 'Bali & Nusa Penida',
        categoryLabel: 'Domestik',
        duration: '4H3M',
        unit: 'per pax (Min. 4 Pax)',
        badge: 'Terlaris',
        imageAlt: 'Pemandangan tebing Kelingking Beach Nusa Penida Bali dengan air laut biru jernih',
        highlights: [
          'Hotel Bintang 4 (Kuta/Seminyak)',
          'Fast Boat PP Nusa Penida',
          'Private Transport AC + BBM',
          'Sunset Dinner Jimbaran',
          'Tiket Wisata & Dokumentasi'
        ],
        itinerary: [
          'Hari 1: Penjemputan Bandara Ngurah Rai – Pantai Melasti – Pura Uluwatu – Sunset Seafood Dinner Jimbaran – Check-in Hotel.',
          'Hari 2: Full Day West Nusa Penida (Kelingking Beach, Broken Beach, Angel Billabong, Crystal Bay) – Kembali ke Bali.',
          'Hari 3: Kintamani View Gunung & Danau Batur – Desa Penglipuran – Tirta Empul / Alas Harum Swing.',
          'Hari 4: Belanja Oleh-Oleh Khas Bali (Krisna/Joger) – Pengantaran ke Bandara Ngurah Rai.'
        ]
      },
      en: {
        title: 'Explore Bali & Nusa Penida Exclusive',
        destination: 'Bali & Nusa Penida',
        categoryLabel: 'Domestic',
        duration: '4D3N',
        unit: 'per pax (Min. 4 Pax)',
        badge: 'Best Seller',
        imageAlt: 'Kelingking Beach cliff view in Nusa Penida Bali with turquoise ocean water',
        highlights: [
          '4-Star Hotel (Kuta/Seminyak)',
          'Return Fast Boat to Nusa Penida',
          'Private AC Transport + Fuel',
          'Jimbaran Seafood Sunset Dinner',
          'Entrance Tickets & Documentation'
        ],
        itinerary: [
          'Day 1: Ngurah Rai Airport Pick-up – Melasti Beach – Uluwatu Temple – Jimbaran Sunset Seafood Dinner – Hotel Check-in.',
          'Day 2: Full Day West Nusa Penida Tour (Kelingking Beach, Broken Beach, Angel Billabong, Crystal Bay) – Return to Bali.',
          'Day 3: Kintamani Mt. & Lake Batur View – Penglipuran Traditional Village – Tirta Empul / Alas Harum Swing.',
          'Day 4: Balinese Souvenir Shopping (Krisna/Joger) – Private Transfer to Ngurah Rai Airport.'
        ]
      }
    }
  },
  {
    id: 'labuan-bajo-sailing-3h2m',
    category: 'Domestik',
    price: 4250000,
    originalPrice: 4800000,
    rating: 5.0,
    reviews: 142,
    badgeColor: 'bg-teal-600 text-white',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Sailing Komodo Liveaboard Phinisi Luxury',
        destination: 'Labuan Bajo, NTT',
        categoryLabel: 'Domestik',
        duration: '3H2M',
        unit: 'per pax (Open / Private Trip)',
        badge: 'Favorit',
        imageAlt: 'Panorama puncak Pulau Padar Labuan Bajo saat matahari terbit dengan kapal Phinisi',
        highlights: [
          'Kapal Phinisi Kabin AC En-suite',
          'Fullboard Meals & Snack di Kapal',
          'Dokumentasi Drone, GoPro & Mirrorless',
          'Alat Snorkeling Lengkap',
          'Antar Jemput Bandara Komodo'
        ],
        itinerary: [
          'Hari 1: Penjemputan Bandara Labuan Bajo – Pulau Kelor – Manjarite Snorkeling – Sunset Pulau Kalong.',
          'Hari 2: Sunrise Trekking Pulau Padar – Pink Beach – Pulau Komodo – Manta Point – Taka Makassar.',
          'Hari 3: Pulau Kanawa Snorkeling – Kembali ke Pelabuhan Labuan Bajo – Drop Bandara Komodo.'
        ]
      },
      en: {
        title: 'Sailing Komodo Liveaboard Phinisi Luxury',
        destination: 'Labuan Bajo, Flores',
        categoryLabel: 'Domestic',
        duration: '3D2N',
        unit: 'per pax (Open / Private Trip)',
        badge: 'Top Pick',
        imageAlt: 'Padar Island sunrise viewpoint in Labuan Bajo with Phinisi yacht',
        highlights: [
          'Luxury Phinisi AC En-suite Cabin',
          'Fullboard Meals & Snacks Onboard',
          'Drone, GoPro & Mirrorless Documentation',
          'Complete Snorkeling Gear',
          'Komodo Airport Return Transfer'
        ],
        itinerary: [
          'Day 1: Komodo Airport Pick-up – Kelor Island – Manjarite Snorkeling – Kalong Island Sunset.',
          'Day 2: Padar Island Sunrise Trekking – Pink Beach – Komodo Dragon Island – Manta Point – Taka Makassar.',
          'Day 3: Kanawa Island Snorkeling – Return to Labuan Bajo Harbor – Drop off at Komodo Airport.'
        ]
      }
    }
  },
  {
    id: 'bromo-malang-batu-3h2m',
    category: 'Domestik',
    price: 1950000,
    originalPrice: 2300000,
    rating: 4.9,
    reviews: 215,
    badgeColor: 'bg-emerald-600 text-white',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Amazing Bromo Sunrise & Malang Batu',
        destination: 'Bromo & Malang, Jawa Timur',
        categoryLabel: 'Domestik',
        duration: '3H2M',
        unit: 'per pax (Min. 4 Pax)',
        badge: 'Best Value',
        imageAlt: 'Pemandangan matahari terbit Gunung Bromo dengan Jeep 4x4 di lautan pasir',
        highlights: [
          'Jeep 4x4 Hartop Bromo Privat',
          'Hotel Bintang 4 Kota Malang/Batu',
          'Tiket Jatim Park 2 / Museum Angkut',
          'Makan Sesuai Program + Snack',
          'Driver Merangkap Pemandu Ramah'
        ],
        itinerary: [
          'Hari 1: Penjemputan Surabaya/Malang – Kampung Warna-Warni Jodipan – Museum Angkut – Check-in Hotel.',
          'Hari 2: Midnight Tour Gunung Bromo (Penanjakan Sunrise, Kawah Bromo, Pasir Berbisik, Bukit Teletubbies) – Flora Wisata Santerra.',
          'Hari 3: Petik Apel Batu – Wisata Belanja Oleh-Oleh – Pengantaran Stasiun/Bandara.'
        ]
      },
      en: {
        title: 'Amazing Bromo Sunrise & Malang Batu',
        destination: 'Mt. Bromo & Malang, East Java',
        categoryLabel: 'Domestic',
        duration: '3D2N',
        unit: 'per pax (Min. 4 Pax)',
        badge: 'Best Value',
        imageAlt: 'Mount Bromo golden sunrise view with 4x4 Jeep on the sea of sand',
        highlights: [
          'Private 4x4 Bromo Hardtop Jeep',
          '4-Star Hotel in Malang / Batu City',
          'Jatim Park 2 / Museum Angkut Tickets',
          'Meals as per Itinerary + Snacks',
          'Friendly Driver cum Local Guide'
        ],
        itinerary: [
          'Day 1: Surabaya/Malang Pick-up – Jodipan Colorful Village – Museum Angkut – Hotel Check-in.',
          'Day 2: Midnight Mt. Bromo Tour (Penanjakan Sunrise, Bromo Crater, Whispering Sands, Teletubbies Hill) – Santerra Flower Park.',
          'Day 3: Batu Apple Orchard Picking – Souvenir Shopping – Transfer to Train Station/Airport.'
        ]
      }
    }
  },
  {
    id: 'japan-golden-route-7h5m',
    category: 'Internasional',
    price: 18900000,
    originalPrice: 21500000,
    rating: 4.9,
    reviews: 96,
    badgeColor: 'bg-indigo-600 text-white',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Japan Golden Route Tokyo – Fuji – Kyoto – Osaka',
        destination: 'Jepang (Tokyo, Mt. Fuji, Osaka)',
        categoryLabel: 'Internasional',
        duration: '7H5M',
        unit: 'per pax (All-In Tiket PP)',
        badge: 'Internasional',
        imageAlt: 'Pemandangan Pagoda Chureito dan Gunung Fuji Jepang saat musim bunga sakura',
        highlights: [
          'Tiket Pesawat Full Service PP',
          'Hotel Bintang 4 Dekat Stasiun',
          'Shinkansen Bullet Train Experience',
          'Tour Leader Berbahasa Indonesia',
          'Bantuan Pengurusan Visa Jepang'
        ],
        itinerary: [
          'Hari 1: Keberangkatan dari Jakarta (CGK) menuju Tokyo Bandara Narita/Haneda.',
          'Hari 2: Asakusa Kannon Temple – Nakamise Street – Tokyo Skytree Photostop – Shibuya Crossing.',
          'Hari 3: Gunung Fuji Level 5 – Oshino Hakkai Village – Gotemba Premium Outlets.',
          'Hari 4: Perjalanan ke Kyoto – Fushimi Inari Shrine – Kiyomizu Temple – Arashiyama Bamboo Grove.',
          'Hari 5: Osaka Castle – Dotonbori & Shinsaibashi Shopping Street.',
          'Hari 6: Bebas/Opsional Universal Studios Japan (USJ) – Persiapan ke Bandara Kansai.',
          'Hari 7: Tiba kembali di Jakarta dengan kenangan tak terlupakan.'
        ]
      },
      en: {
        title: 'Japan Golden Route Tokyo – Fuji – Kyoto – Osaka',
        destination: 'Japan (Tokyo, Mt. Fuji, Osaka)',
        categoryLabel: 'International',
        duration: '7D5N',
        unit: 'per pax (All-In Return Flights)',
        badge: 'International',
        imageAlt: 'Chureito Pagoda and Mount Fuji in Japan during cherry blossom season',
        highlights: [
          'Full-Service Return Flight Tickets',
          '4-Star Hotels Near Train Stations',
          'Shinkansen Bullet Train Experience',
          'Experienced Bilingual Tour Leader',
          'Japan Visa Application Assistance'
        ],
        itinerary: [
          'Day 1: Departure from Jakarta (CGK) to Tokyo Narita/Haneda International Airport.',
          'Day 2: Asakusa Kannon Temple – Nakamise Street – Tokyo Skytree Photostop – Shibuya Crossing.',
          'Day 3: Mount Fuji 5th Station – Oshino Hakkai Village – Gotemba Premium Outlets.',
          'Day 4: Transfer to Kyoto – Fushimi Inari Shrine – Kiyomizu Temple – Arashiyama Bamboo Grove.',
          'Day 5: Osaka Castle – Dotonbori & Shinsaibashi Shopping Street.',
          'Day 6: Free/Optional Universal Studios Japan (USJ) – Evening Transfer to Kansai Airport.',
          'Day 7: Arrive back in Jakarta with unforgettable memories.'
        ]
      }
    }
  },
  {
    id: 'singapore-malaysia-thailand-5h4m',
    category: 'Internasional',
    price: 6450000,
    originalPrice: 7250000,
    rating: 4.8,
    reviews: 168,
    badgeColor: 'bg-rose-600 text-white',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: '3 Negara Asia: Singapura – Malaysia – Thailand',
        destination: 'Singapura, Kuala Lumpur & Hat Yai',
        categoryLabel: 'Internasional',
        duration: '5H4M',
        unit: 'per pax (Termasuk Tiket PP)',
        badge: 'Promo Grup',
        imageAlt: 'Panorama Marina Bay Sands dan Merlion Park Singapura saat senja',
        highlights: [
          'Tiket Pesawat PP Jakarta/Surabaya',
          'Hotel Bintang 3/4 Strategis',
          'Bus Pariwisata Lintas Negara AC',
          'Makan Halal Sesuai Itinerary',
          'Kereta Gantung Genting Highlands'
        ],
        itinerary: [
          'Hari 1: Tiba di Changi Singapura – Jewel Rain Vortex – Merlion Park – Gardens by the Bay – Perjalanan ke Johor/Melaka.',
          'Hari 2: Jelajah Kota Tua Melaka – Putrajaya – Menara Kembar Petronas Kuala Lumpur.',
          'Hari 3: Batu Caves – Genting Highlands (Cable Car) – Perjalanan menuju Hat Yai Thailand.',
          'Hari 4: Pantai Samila Songkhla – Sleeping Buddha – Floating Market Hat Yai – Belanja Lokal.',
          'Hari 5: Kembali ke Kuala Lumpur/Penang untuk penerbangan pulang ke Indonesia.'
        ]
      },
      en: {
        title: '3-Country Asia Tour: Singapore – Malaysia – Thailand',
        destination: 'Singapore, Kuala Lumpur & Hat Yai',
        categoryLabel: 'International',
        duration: '5D4N',
        unit: 'per pax (Includes Return Flights)',
        badge: 'Group Promo',
        imageAlt: 'Marina Bay Sands and Merlion Park Singapore skyline at dusk',
        highlights: [
          'Return Flights from Jakarta/Surabaya',
          ' centrally Located 3/4-Star Hotels',
          'Cross-Border AC Executive Coach',
          'Halal Meals Throughout the Trip',
          'Genting Highlands Cable Car Ticket'
        ],
        itinerary: [
          'Day 1: Arrive at Singapore Changi – Jewel Rain Vortex – Merlion Park – Gardens by the Bay – Transfer to Johor/Melaka.',
          'Day 2: Historical Melaka City Tour – Putrajaya – Petronas Twin Towers Kuala Lumpur.',
          'Day 3: Batu Caves – Genting Highlands (Awana SkyWay Cable Car) – Journey to Hat Yai, Thailand.',
          'Day 4: Samila Beach Songkhla – Sleeping Buddha – Hat Yai Floating Market – Local Shopping.',
          'Day 5: Return to Kuala Lumpur/Penang for your flight back to Indonesia.'
        ]
      }
    }
  },
  {
    id: 'honeymoon-ubud-luxury-4h3m',
    category: 'Honeymoon',
    price: 6850000,
    originalPrice: 7900000,
    rating: 5.0,
    reviews: 119,
    badgeColor: 'bg-pink-600 text-white',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Romantic Honeymoon Ubud Private Pool Villa',
        destination: 'Ubud & Seminyak, Bali',
        categoryLabel: 'Honeymoon',
        duration: '4H3M',
        unit: 'per pasangan (Couple All-In)',
        badge: 'Romantis',
        imageAlt: 'Private Pool Villa romantis di Ubud Bali dengan floating breakfast',
        highlights: [
          '2 Malam Private Pool Villa Ubud',
          '1 Malam Resort Bintang 4 Seminyak',
          'Floating Breakfast & Flower Bath',
          'Candle Light Dinner Romantis',
          'Balinese Couple Spa Treatment 2 Jam'
        ],
        itinerary: [
          'Hari 1: Penjemputan Privat dengan Kalungan Bunga – Check-in Private Pool Villa Ubud – Sore Santai.',
          'Hari 2: Floating Breakfast – Tegalalang Rice Terrace & Jungle Swing – Balinese Couple Spa – Romantic Candle Light Dinner.',
          'Hari 3: Kintamani Coffee Roastery – Pura Tirta Empul – Sunset Beach Club Seminyak.',
          'Hari 4: Belanja Souvenir Premium – Pengantaran Privat ke Bandara Ngurah Rai.'
        ]
      },
      en: {
        title: 'Romantic Honeymoon Ubud Private Pool Villa',
        destination: 'Ubud & Seminyak, Bali',
        categoryLabel: 'Honeymoon',
        duration: '4D3N',
        unit: 'per couple (Couple All-In)',
        badge: 'Romantic',
        imageAlt: 'Romantic Private Pool Villa in Ubud Bali with floating breakfast',
        highlights: [
          '2 Nights Ubud Private Pool Villa',
          '1 Night 4-Star Seminyak Resort',
          'Floating Breakfast & Flower Bath',
          'Romantic Candle Light Dinner',
          '2-Hour Balinese Couple Spa Treatment'
        ],
        itinerary: [
          'Day 1: Private Airport Pick-up with Flower Garland – Check-in at Ubud Private Pool Villa – Leisure Evening.',
          'Day 2: Floating Breakfast – Tegalalang Rice Terrace & Jungle Swing – Couple Spa – Romantic Candle Light Dinner.',
          'Day 3: Kintamani Coffee Roastery – Tirta Empul Temple – Sunset Beach Club in Seminyak.',
          'Day 4: Premium Souvenir Shopping – Private Transfer to Ngurah Rai Airport.'
        ]
      }
    }
  },
  {
    id: 'honeymoon-lombok-gili-trawangan-4h3m',
    category: 'Honeymoon',
    price: 6200000,
    originalPrice: 7100000,
    rating: 4.9,
    reviews: 87,
    badgeColor: 'bg-pink-600 text-white',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Exotic Honeymoon Lombok & Gili Trawangan',
        destination: 'Lombok & Gili Trawangan, NTB',
        categoryLabel: 'Honeymoon',
        duration: '4H3M',
        unit: 'per pasangan (Couple All-In)',
        badge: 'Private Trip',
        imageAlt: 'Pantai pasir putih dan air laut biru kehijauan di Gili Trawangan Lombok',
        highlights: [
          'Resort Tepi Pantai Senggigi & Gili',
          'Private Glass Bottom Boat Snorkeling 3 Gili',
          'Romantic Beachfront Dinner',
          'Dokumentasi Underwater GoPro',
          'Transportasi Privat Innova Reborn'
        ],
        itinerary: [
          'Hari 1: Penjemputan Bandara Lombok – Desa Adat Sade – Pantai Tanjung Aan & Bukit Merese – Check-in Resort.',
          'Hari 2: Private Snorkeling Trip 3 Gili (Gili Air, Gili Meno, Gili Trawangan) – Sunset & Romantic Dinner di Tepi Pantai.',
          'Hari 3: Bukit Malimbu – Wisata Oleh-Oleh Mutiara & Tenun Lombok – Spa Relaksasi.',
          'Hari 4: Sarapan Santai – Pengantaran ke Bandara Internasional Zainuddin Abdul Madjid.'
        ]
      },
      en: {
        title: 'Exotic Honeymoon Lombok & Gili Trawangan',
        destination: 'Lombok & Gili Trawangan',
        categoryLabel: 'Honeymoon',
        duration: '4D3N',
        unit: 'per couple (Couple All-In)',
        badge: 'Private Trip',
        imageAlt: 'White sandy beach and crystal clear water in Gili Trawangan Lombok',
        highlights: [
          'Beachfront Resort in Senggigi & Gili',
          'Private Glass-Bottom Boat 3-Gili Snorkeling',
          'Romantic Beachfront Seafood Dinner',
          'GoPro Underwater Documentation',
          'Private Innova Reborn Transport'
        ],
        itinerary: [
          'Day 1: Lombok Airport Pick-up – Sade Traditional Village – Tanjung Aan Beach & Merese Hill – Resort Check-in.',
          'Day 2: Private 3-Gili Snorkeling Trip (Gili Air, Gili Meno, Gili Trawangan) – Sunset & Beachfront Romantic Dinner.',
          'Day 3: Malimbu Hill Viewpoint – Lombok Pearl & Woven Craft Shopping – Relaxation Spa.',
          'Day 4: Leisure Breakfast – Private Transfer to Lombok International Airport.'
        ]
      }
    }
  },
  {
    id: 'gathering-bandung-lembang-3h2m',
    category: 'Gathering/Outing',
    price: 1450000,
    originalPrice: 1750000,
    rating: 4.9,
    reviews: 154,
    badgeColor: 'bg-blue-600 text-white',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Corporate Gathering & Outbound Bandung Lembang',
        destination: 'Bandung & Lembang, Jawa Barat',
        categoryLabel: 'Gathering/Outing',
        duration: '3H2M',
        unit: 'per pax (Min. 30 Pax)',
        badge: 'Korporat & Instansi',
        imageAlt: 'Kegiatan team building dan corporate gathering perusahaan di kawasan sejuk Lembang Bandung',
        highlights: [
          'Bus Pariwisata Executive Terbaru',
          'Hotel Bintang 4 + Ballroom Gala Dinner',
          'Paket Fun Outbound & Team Building + Master Game',
          'Live Music Electone, Banner & Kaos Seragam',
          'Dokumentasi Foto & Video Cinematic Drone'
        ],
        itinerary: [
          'Hari 1: Keberangkatan menuju Lembang – Fun Outbound & Team Building di Grafika Cikole / Orchid Forest – Check-in Hotel – Gala Dinner & Malam Keakraban.',
          'Hari 2: Offroad Land Rover Hutan Pinus / Rafting Pangalengan – Floating Market Lembang – Wisata Kuliner Bandung.',
          'Hari 3: Pusat Oleh-Oleh Kartika Sari / Prima Rasa – Perjalanan kembali menuju kantor asal.'
        ]
      },
      en: {
        title: 'Corporate Gathering & Outbound Bandung Lembang',
        destination: 'Bandung & Lembang, West Java',
        categoryLabel: 'Gathering/Outing',
        duration: '3D2N',
        unit: 'per pax (Min. 30 Pax)',
        badge: 'Corporate Favorite',
        imageAlt: 'Corporate team building and company gathering activity in Lembang Bandung',
        highlights: [
          'Late-Model Executive Tourist Bus',
          '4-Star Hotel + Ballroom Gala Dinner',
          'Fun Outbound & Team Building + Game Master',
          'Live Music Entertainment, Banners & Team T-Shirts',
          'Photo & Cinematic Drone Video Documentation'
        ],
        itinerary: [
          'Day 1: Departure to Lembang – Fun Outbound & Team Building at Grafika Cikole / Orchid Forest – Hotel Check-in – Gala Dinner & Awarding Night.',
          'Day 2: Pine Forest Land Rover Offroad / Pangalengan Rafting – Lembang Floating Market – Bandung Culinary Tour.',
          'Day 3: Kartika Sari / Prima Rasa Souvenir Center – Return journey to your office.'
        ]
      }
    }
  },
  {
    id: 'sewa-bus-hiace-pariwisata',
    category: 'Sewa Mobil/Bus',
    price: 1650000,
    originalPrice: 1950000,
    rating: 5.0,
    reviews: 230,
    badgeColor: 'bg-slate-900 text-amber-400',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Sewa Big Bus Pariwisata & Hiace Premio Luxury',
        destination: 'Jawa, Bali, Sumatera & Lombok',
        categoryLabel: 'Sewa Mobil/Bus',
        duration: 'Harian / Multi-Hari',
        unit: 'mulai / hari (All-In Driver & BBM)',
        badge: 'Armada Tahun Muda',
        imageAlt: 'Armada Bus Pariwisata Executive dan Toyota Hiace Premio milik Valencia Mandiri Wisata',
        highlights: [
          'Tersedia Hiace Commuter/Premio (10-14 Seat)',
          'Medium Bus (31-35 Seat) & Big Bus (45-59 Seat)',
          'Full AC, Karaoke, Smart TV, USB Charger & Dispenser',
          'Driver Berpengalaman, Ramah & Hafal Rute Wisata',
          'Unit Bersih, Disinfeksi Rutin & Asuransi Penumpang'
        ],
        itinerary: [
          'Pilihan Unit 1: Toyota Innova Reborn / Zenix (6 Seat) – Cocok untuk perjalanan keluarga & tamu VIP.',
          'Pilihan Unit 2: Toyota Hiace Commuter (14 Seat) & Hiace Premio Luxury (10-12 Seat) – Nyaman untuk rombongan kecil.',
          'Pilihan Unit 3: Medium Bus Pariwisata (31-35 Seat) – Ideal untuk outing divisi atau keluarga besar.',
          'Pilihan Unit 4: Big Bus Pariwisata SHD/HDD (45-59 Seat) – Dilengkapi reclining seat lega, karaoke, coolbox, dan bantal selimut.'
        ]
      },
      en: {
        title: 'Luxury Big Bus & Hiace Premio Charter',
        destination: 'Java, Bali, Sumatra & Lombok',
        categoryLabel: 'Car / Bus Charter',
        duration: 'Daily / Multi-Day',
        unit: 'from / day (All-In Driver & Fuel)',
        badge: 'Modern Fleet',
        imageAlt: 'Executive Tourist Bus and Toyota Hiace Premio fleet by Valencia Mandiri Wisata',
        highlights: [
          'Hiace Commuter / Premio Luxury (10–14 Seats)',
          'Medium Bus (31–35 Seats) & Big Bus (45–59 Seats)',
          'Full AC, Karaoke, Smart TV, USB Chargers & Dispenser',
          'Experienced, Polite Drivers Familiar with Tourist Routes',
          'Sanitized Cabins & Passenger Insurance Included'
        ],
        itinerary: [
          'Fleet Option 1: Toyota Innova Reborn / Zenix (6 Seats) – Ideal for family trips and VIP guests.',
          'Fleet Option 2: Toyota Hiace Commuter (14 Seats) & Hiace Premio Luxury (10–12 Seats) – Comfortable for small groups.',
          'Fleet Option 3: Medium Tourist Bus (31–35 Seats) – Great for department outings or extended families.',
          'Fleet Option 4: Big Bus SHD/HDD (45–59 Seats) – Equipped with spacious reclining seats, karaoke, coolbox, pillows & blankets.'
        ]
      }
    }
  }
];

/**
 * Data Galeri Dokumentasi dalam 2 Bahasa (ID & EN)
 */
const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'Gathering',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Company Gathering PT Nusantara Jaya – 120 Peserta',
        location: 'Gunung Bromo & Batu Malang',
        date: 'Oktober 2026',
        categoryLabel: 'Gathering',
        alt: 'Dokumentasi grup peserta company gathering di Gunung Bromo bersama Valencia Mandiri Wisata'
      },
      en: {
        title: 'PT Nusantara Jaya Corporate Gathering – 120 Pax',
        location: 'Mt. Bromo & Batu Malang',
        date: 'October 2026',
        categoryLabel: 'Gathering',
        alt: 'Corporate gathering group photo at Mount Bromo with Valencia Mandiri Wisata'
      }
    }
  },
  {
    id: 'gal-2',
    category: 'Domestik',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Private Sailing Phinisi Komodo & Pulau Padar',
        location: 'Labuan Bajo, NTT',
        date: 'September 2026',
        categoryLabel: 'Domestik',
        alt: 'Dokumentasi wisata Sailing Komodo di puncak Pulau Padar Labuan Bajo'
      },
      en: {
        title: 'Private Phinisi Komodo & Padar Island Sailing',
        location: 'Labuan Bajo, Flores',
        date: 'September 2026',
        categoryLabel: 'Domestic',
        alt: 'Komodo sailing trip documentation at Padar Island summit in Labuan Bajo'
      }
    }
  },
  {
    id: 'gal-3',
    category: 'Internasional',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Autumn Tour Japan Golden Route Group',
        location: 'Kyoto & Gunung Fuji, Jepang',
        date: 'Agustus 2026',
        categoryLabel: 'Internasional',
        alt: 'Dokumentasi rombongan tur Jepang di depan Gunung Fuji dan Pagoda Chureito'
      },
      en: {
        title: 'Japan Golden Route Group Tour',
        location: 'Kyoto & Mt. Fuji, Japan',
        date: 'August 2026',
        categoryLabel: 'International',
        alt: 'Japan tour group documentation in front of Mount Fuji and Chureito Pagoda'
      }
    }
  },
  {
    id: 'gal-4',
    category: 'Domestik',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Romantic Honeymoon Private Villa Experience',
        location: 'Ubud & Nusa Penida, Bali',
        date: 'Oktober 2026',
        categoryLabel: 'Domestik',
        alt: 'Dokumentasi pasangan bulan madu di Kelingking Beach Nusa Penida Bali'
      },
      en: {
        title: 'Romantic Honeymoon Private Villa Experience',
        location: 'Ubud & Nusa Penida, Bali',
        date: 'October 2026',
        categoryLabel: 'Domestic',
        alt: 'Honeymoon couple documentation at Kelingking Beach Nusa Penida Bali'
      }
    }
  },
  {
    id: 'gal-5',
    category: 'Armada',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Armada Big Bus SHD & Hiace Premio Siap Berangkat',
        location: 'Garasi Utama & Titik Jemput Jakarta',
        date: 'September 2026',
        categoryLabel: 'Armada',
        alt: 'Deretan armada bus pariwisata eksekutif Valencia Mandiri Wisata'
      },
      en: {
        title: 'SHD Big Bus & Hiace Premio Fleet Ready for Departure',
        location: 'Main Depot & Jakarta Pick-up Point',
        date: 'September 2026',
        categoryLabel: 'Fleet',
        alt: 'Lineup of Valencia Mandiri Wisata executive tourist buses'
      }
    }
  },
  {
    id: 'gal-6',
    category: 'Domestik',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=80',
    i18n: {
      id: {
        title: 'Explore Raja Ampat & Wayag Lagoon',
        location: 'Raja Ampat, Papua Barat',
        date: 'Juli 2026',
        categoryLabel: 'Domestik',
        alt: 'Gugusan pulau karst Pianemo Raja Ampat dari atas bukit pandang'
      },
      en: {
        title: 'Explore Raja Ampat & Pianemo Karst Lagoon',
        location: 'Raja Ampat, West Papua',
        date: 'July 2026',
        categoryLabel: 'Domestic',
        alt: 'Pianemo Raja Ampat karst islands view from the hilltop deck'
      }
    }
  }
];

// State aplikasi
let currentLang = localStorage.getItem('valencia_lang') === 'en' ? 'en' : 'id';
let currentCategory = 'Semua';
let currentSearchQuery = '';
let currentSort = 'popular';
let currentGalleryCategory = 'Semua';

/**
 * Ambil teks kamus sesuai bahasa aktif
 */
function t(key) {
  return I18N_DICTIONARY[currentLang]?.[key] || I18N_DICTIONARY.id[key] || key;
}

/**
 * Format angka ke mata uang Rupiah (IDR)
 */
function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Mengubah Bahasa Aktif (ID <-> EN) tanpa reload halaman
 */
function setLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('valencia_lang', lang);

  document.documentElement.lang = lang;
  document.title = t('page_title');

  // Perbarui seluruh elemen dengan atribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });

  // Perbarui seluruh atribut placeholder dengan data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.setAttribute('placeholder', t(key));
    }
  });

  // Perbarui tampilan tombol switcher bahasa (Desktop & Mobile)
  document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('bg-valencia-navy', 'text-white', 'shadow-sm');
      btn.classList.remove('text-slate-600', 'hover:text-slate-900');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('bg-valencia-navy', 'text-white', 'shadow-sm');
      btn.classList.add('text-slate-600', 'hover:text-slate-900');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Simpan pilihan paket saat ini sebelum re-populate dropdown
  const selectEl = document.getElementById('booking-package');
  const currentSelectedPkg = selectEl ? selectEl.value : '';

  populateBookingSelect();
  if (selectEl && currentSelectedPkg) {
    selectEl.value = currentSelectedPkg;
  }

  renderPackages();
  renderGallery();
  updateBookingCalculation();
}

/**
 * Render daftar kartu Paket Wisata berdasarkan filter, pencarian & bahasa aktif
 */
function renderPackages() {
  const grid = document.getElementById('package-grid');
  const countBadge = document.getElementById('package-count-info');
  const emptyState = document.getElementById('package-empty-state');

  if (!grid) return;

  let filtered = TOUR_PACKAGES.filter((pkg) => {
    const loc = pkg.i18n[currentLang];
    const matchCategory =
      currentCategory === 'Semua' || pkg.category.toLowerCase() === currentCategory.toLowerCase();

    const query = currentSearchQuery.trim().toLowerCase();
    const matchQuery =
      !query ||
      loc.title.toLowerCase().includes(query) ||
      loc.destination.toLowerCase().includes(query) ||
      loc.categoryLabel.toLowerCase().includes(query) ||
      loc.highlights.some((h) => h.toLowerCase().includes(query));

    return matchCategory && matchQuery;
  });

  // Pengurutan (Sorting)
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  }

  if (countBadge) {
    countBadge.textContent =
      currentLang === 'en'
        ? `Showing ${filtered.length} of ${TOUR_PACKAGES.length} curated packages`
        : `Menampilkan ${filtered.length} dari ${TOUR_PACKAGES.length} paket pilihan`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered
    .map((pkg) => {
      const loc = pkg.i18n[currentLang];
      const facilitiesHtml = loc.highlights
        .slice(0, 4)
        .map(
          (item) => `
          <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
            <svg class="w-4 h-4 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${item}</span>
          </li>`
        )
        .join('');

      return `
      <article class="package-card bg-white rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col shadow-sm">
        <div class="card-image-wrapper">
          <img
            src="${pkg.image}"
            alt="${loc.imageAlt}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80';"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent"></div>

          <!-- Top Badges -->
          <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm ${pkg.badgeColor}">
              ${loc.badge}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/85 text-white backdrop-blur-sm flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              ${loc.duration}
            </span>
          </div>

          <!-- Bottom Location & Rating on Image -->
          <div class="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
            <div class="flex items-center gap-1.5 text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
              <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              <span class="truncate max-w-[180px]">${loc.destination}</span>
            </div>
            <div class="flex items-center gap-1 text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
              <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>${pkg.rating}</span>
              <span class="text-slate-300">(${pkg.reviews})</span>
            </div>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/60">
                ${loc.categoryLabel}
              </span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-teal-700 transition-colors">
              ${loc.title}
            </h3>

            <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">${t('card_facilities_heading')}</p>
            <ul class="space-y-1.5 mb-5">
              ${facilitiesHtml}
            </ul>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <div class="flex items-baseline justify-between mb-4">
              <div>
                <span class="text-xs text-slate-400 block">${t('card_price_from')}</span>
                <span class="text-xs text-slate-400 line-through">${formatRupiah(pkg.originalPrice)}</span>
                <div class="text-xl font-extrabold text-slate-900">${formatRupiah(pkg.price)}</div>
              </div>
              <span class="text-[11px] text-slate-500 font-medium text-right">${loc.unit}</span>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onclick="openPackageModal('${pkg.id}')"
                class="px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                ${t('card_btn_detail')}
              </button>
              <button
                type="button"
                onclick="selectPackageForBooking('${pkg.id}')"
                class="px-3.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5"
              >
                <span>${t('card_btn_book')}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

/**
 * Mengubah kategori aktif pada katalog paket wisata
 */
function setPackageCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.pkg-filter-btn').forEach((btn) => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
  renderPackages();
}

/**
 * Reset seluruh filter pencarian paket
 */
function resetPackageFilters() {
  currentCategory = 'Semua';
  currentSearchQuery = '';
  currentSort = 'popular';

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'popular';

  setPackageCategory('Semua');
}

/**
 * Buka Modal Detail Paket & Itinerary Lengkap (Mengikuti Bahasa Aktif)
 */
function openPackageModal(packageId) {
  const pkg = TOUR_PACKAGES.find((item) => item.id === packageId);
  if (!pkg) return;

  const loc = pkg.i18n[currentLang];
  const modal = document.getElementById('package-detail-modal');
  const content = document.getElementById('package-modal-body');
  if (!modal || !content) return;

  const highlightsHtml = loc.highlights
    .map(
      (h) => `
      <li class="flex items-center gap-2.5 text-sm text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/70">
        <svg class="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${h}</span>
      </li>`
    )
    .join('');

  const stepLabel = currentLang === 'en' ? 'Stage' : 'Tahap';
  const itineraryHtml = loc.itinerary
    .map(
      (dayText, idx) => `
      <div class="relative pl-7 pb-4 last:pb-0 border-l-2 border-teal-500/40">
        <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal-600 ring-4 ring-teal-50"></span>
        <p class="text-xs font-bold uppercase tracking-wider text-teal-700 mb-0.5">${stepLabel} ${idx + 1}</p>
        <p class="text-sm text-slate-700 leading-relaxed">${dayText}</p>
      </div>`
    )
    .join('');

  const reviewsLabel =
    currentLang === 'en'
      ? `${pkg.reviews} verified reviews`
      : `${pkg.reviews} ulasan terverifikasi`;
  const specialOfferLabel =
    currentLang === 'en'
      ? 'Valencia Mandiri Wisata Special Offer'
      : 'Penawaran Spesial Valencia Mandiri Wisata';
  const selectBookBtnLabel =
    currentLang === 'en' ? 'Select & Book This Package' : 'Pilih & Booking Paket Ini';
  const facilitiesHeading =
    currentLang === 'en' ? 'Key Facilities & Inclusions' : 'Fasilitas & Highlight Utama';
  const itineraryHeading =
    currentLang === 'en'
      ? 'Itinerary & Service Details'
      : 'Rencana Perjalanan (Itinerary) & Layanan';
  const flexNote =
    currentLang === 'en'
      ? '<strong>Flexibility Note:</strong> Itineraries, hotel selections, and pick-up points can be customized to match your group schedule and preferences.'
      : '<strong>Catatan Fleksibilitas:</strong> Itinerary, pilihan hotel, dan titik penjemputan dapat disesuaikan (<em>custom</em>) mengikuti jadwal serta kebutuhan rombongan Anda.';

  content.innerHTML = `
    <div class="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
      <img src="${pkg.image}" alt="${loc.imageAlt}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
      <button
        type="button"
        onclick="closePackageModal()"
        aria-label="Close modal"
        class="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="absolute bottom-4 left-6 right-6 text-white">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold ${pkg.badgeColor}">${loc.badge}</span>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">${loc.categoryLabel}</span>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">${loc.duration}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold">${loc.title}</h3>
        <p class="text-sm text-slate-200 mt-0.5">${loc.destination} • ★ ${pkg.rating} (${reviewsLabel})</p>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 text-white">
        <div>
          <span class="text-xs text-slate-300 block">${specialOfferLabel}</span>
          <div class="flex items-baseline gap-2.5 mt-0.5">
            <span class="text-2xl font-extrabold text-amber-400">${formatRupiah(pkg.price)}</span>
            <span class="text-xs text-slate-400 line-through">${formatRupiah(pkg.originalPrice)}</span>
          </div>
          <span class="text-xs text-slate-300">${loc.unit}</span>
        </div>
        <button
          type="button"
          onclick="closePackageModal(); selectPackageForBooking('${pkg.id}');"
          class="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md"
        >
          ${selectBookBtnLabel}
        </button>
      </div>

      <div>
        <h4 class="text-base font-bold text-slate-900 mb-3">${facilitiesHeading}</h4>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${highlightsHtml}
        </ul>
      </div>

      <div>
        <h4 class="text-base font-bold text-slate-900 mb-4">${itineraryHeading}</h4>
        <div class="space-y-3 pl-2">
          ${itineraryHtml}
        </div>
      </div>

      <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-900">
        ${flexNote}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closePackageModal() {
  const modal = document.getElementById('package-detail-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

/**
 * Pilih paket dari kartu katalog dan arahkan otomatis ke Formulir Reservasi
 */
function selectPackageForBooking(packageId) {
  const pkg = TOUR_PACKAGES.find((item) => item.id === packageId);
  const selectEl = document.getElementById('booking-package');

  if (pkg && selectEl) {
    selectEl.value = pkg.id;
    updateBookingCalculation();
  }

  const bookingSection = document.getElementById('kontak');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }

  const nameInput = document.getElementById('booking-name');
  if (nameInput) {
    setTimeout(() => nameInput.focus(), 600);
  }
}

/**
 * Pilih layanan tambahan dan arahkan ke Formulir Reservasi
 */
function selectServiceForBooking(serviceValue) {
  const selectEl = document.getElementById('booking-package');
  const noteEl = document.getElementById('booking-notes');

  if (selectEl) {
    selectEl.value = serviceValue;
  }

  const defaultNotes = {
    'rental-transport': {
      id: 'Saya ingin menanyakan ketersediaan & harga sewa armada transportasi pariwisata (Bus/Hiace/MPV).',
      en: 'I would like to inquire about availability and charter rates for tourist transport (Bus/Hiace/MPV).'
    },
    'ticket-visa': {
      id: 'Saya ingin berkonsultasi mengenai pemesanan tiket pesawat / pengurusan dokumen paspor & visa.',
      en: 'I would like to consult regarding flight ticket booking / passport & tourist visa assistance.'
    },
    'custom-corporate': {
      id: 'Saya ingin meminta proposal & penawaran Custom Tour / Gathering untuk rombongan kami.',
      en: 'I would like to request a custom tour / corporate gathering proposal and quotation for our group.'
    }
  };

  if (noteEl && defaultNotes[serviceValue]) {
    noteEl.value = defaultNotes[serviceValue][currentLang];
  }

  updateBookingCalculation();

  const bookingSection = document.getElementById('kontak');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Render Galeri Dokumentasi Perjalanan (Bilingual)
 */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const filtered =
    currentGalleryCategory === 'Semua'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === currentGalleryCategory);

  grid.innerHTML = filtered
    .map((item) => {
      const loc = item.i18n[currentLang];
      return `
      <div
        class="gallery-item rounded-2xl overflow-hidden group shadow-sm border border-slate-200/70"
        onclick="openGalleryLightbox('${item.id}')"
        role="button"
        tabindex="0"
        aria-label="${loc.title}"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openGalleryLightbox('${item.id}');}"
      >
        <img
          src="${item.image}"
          alt="${loc.alt}"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
        <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-900 shadow-sm">
          ${loc.categoryLabel}
        </span>
        <div class="absolute bottom-3.5 left-4 right-4 text-white">
          <p class="text-xs text-amber-300 font-semibold">${loc.location} • ${loc.date}</p>
          <h4 class="text-sm sm:text-base font-bold leading-snug mt-0.5">${loc.title}</h4>
        </div>
      </div>`;
    })
    .join('');
}

function setGalleryCategory(category) {
  currentGalleryCategory = category;
  document.querySelectorAll('.gallery-filter-btn').forEach((btn) => {
    if (btn.dataset.galleryCategory === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderGallery();
}

function openGalleryLightbox(galleryId) {
  const item = GALLERY_ITEMS.find((g) => g.id === galleryId);
  if (!item) return;

  const loc = item.i18n[currentLang];
  const modal = document.getElementById('gallery-lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const meta = document.getElementById('lightbox-meta');

  if (!modal || !img || !title || !meta) return;

  img.src = item.image;
  img.alt = loc.alt;
  title.textContent = loc.title;
  meta.textContent = `${loc.location} • ${loc.date} (${loc.categoryLabel})`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closeGalleryLightbox() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

/**
 * Mengisi opsi dropdown paket pada Formulir Reservasi (Mengikuti Bahasa Aktif)
 */
function populateBookingSelect() {
  const selectEl = document.getElementById('booking-package');
  if (!selectEl) return;

  const packageOptions = TOUR_PACKAGES.map((pkg) => {
    const loc = pkg.i18n[currentLang];
    return `<option value="${pkg.id}">${loc.title} (${loc.duration} - ${formatRupiah(pkg.price)})</option>`;
  }).join('');

  if (currentLang === 'en') {
    selectEl.innerHTML = `
      <option value="">-- Select Tour Package / Service --</option>
      <optgroup label="Featured Tour Packages">
        ${packageOptions}
      </optgroup>
      <optgroup label="Special & Custom Services">
        <option value="custom-corporate">Corporate Custom Tour / Company Gathering / Outbound</option>
        <option value="custom-family">Private Family Custom Tour / Honeymoon</option>
        <option value="rental-transport">Luxury Bus / Hiace / Car Charter + Driver</option>
        <option value="ticket-visa">Flight Tickets / Passport / Visa Assistance</option>
      </optgroup>
    `;
  } else {
    selectEl.innerHTML = `
      <option value="">-- Pilih Paket Wisata / Layanan --</option>
      <optgroup label="Paket Wisata Unggulan">
        ${packageOptions}
      </optgroup>
      <optgroup label="Layanan Khusus & Custom">
        <option value="custom-corporate">Custom Tour Korporat / Company Gathering / Outbound</option>
        <option value="custom-family">Custom Private Tour Keluarga / Honeymoon</option>
        <option value="rental-transport">Sewa Bus Pariwisata / Hiace / Mobil + Driver</option>
        <option value="ticket-visa">Pengurusan Tiket Pesawat / Paspor / Visa</option>
      </optgroup>
    `;
  }
}

/**
 * Menghitung estimasi biaya & memperbarui pratinjau pesan WhatsApp secara real-time (ID / EN)
 */
function updateBookingCalculation() {
  const name = (document.getElementById('booking-name')?.value || '').trim();
  const phone = (document.getElementById('booking-phone')?.value || '').trim();
  const packageId = document.getElementById('booking-package')?.value || '';
  const date = document.getElementById('booking-date')?.value || '';
  const paxRaw = parseInt(document.getElementById('booking-pax')?.value || '2', 10);
  const pax = Number.isNaN(paxRaw) || paxRaw < 1 ? 1 : paxRaw;
  const city = (document.getElementById('booking-city')?.value || '').trim();
  const notes = (document.getElementById('booking-notes')?.value || '').trim();

  const estimateEl = document.getElementById('booking-price-estimate');
  const estimateNoteEl = document.getElementById('booking-price-note');
  const previewEl = document.getElementById('wa-message-preview');

  const selectedPkg = TOUR_PACKAGES.find((item) => item.id === packageId);
  const isEn = currentLang === 'en';

  let packageLabel = isEn ? 'Not selected yet (General Consultation)' : 'Belum dipilih (Konsultasi Umum)';
  let estimateText = isEn ? 'Contact Admin (Custom)' : 'Hubungi Admin (Custom)';
  let estimateSubtext = isEn
    ? 'Pricing adjusts to your custom itinerary & service specifications'
    : 'Harga menyesuaikan itinerary & spesifikasi layanan';

  if (selectedPkg) {
    const loc = selectedPkg.i18n[currentLang];
    packageLabel = `${loc.title} (${loc.duration})`;
    const isCouplePackage = selectedPkg.category === 'Honeymoon';
    const isVehicleRental = selectedPkg.category === 'Sewa Mobil/Bus';

    if (isCouplePackage) {
      const coupleCount = Math.max(1, Math.ceil(pax / 2));
      const total = selectedPkg.price * coupleCount;
      estimateText = formatRupiah(total);
      estimateSubtext = isEn
        ? `Estimated for ${coupleCount} couple package(s) (${formatRupiah(selectedPkg.price)} / couple)`
        : `Estimasi ${coupleCount} paket pasangan (${formatRupiah(selectedPkg.price)} / pasangan)`;
    } else if (isVehicleRental) {
      estimateText = isEn
        ? `${formatRupiah(selectedPkg.price)} / day`
        : `${formatRupiah(selectedPkg.price)} / hari`;
      estimateSubtext = isEn
        ? `For ${pax} passengers (Hiace, Medium Bus & Big Bus available)`
        : `Untuk ${pax} penumpang (Tersedia Hiace, Medium Bus & Big Bus)`;
    } else {
      const total = selectedPkg.price * pax;
      estimateText = formatRupiah(total);
      estimateSubtext = isEn
        ? `Estimated for ${pax} pax × ${formatRupiah(selectedPkg.price)}`
        : `Estimasi ${pax} peserta × ${formatRupiah(selectedPkg.price)}`;
    }
  } else if (packageId === 'custom-corporate') {
    packageLabel = isEn
      ? 'Corporate Custom Tour / Company Gathering'
      : 'Custom Tour Korporat / Company Gathering';
    estimateText = isEn ? 'Special Corporate Quotation' : 'Penawaran Korporat Khusus';
    estimateSubtext = isEn
      ? `Group discount available for ${pax} participants`
      : `Diskon grup tersedia untuk ${pax} peserta`;
  } else if (packageId === 'custom-family') {
    packageLabel = isEn
      ? 'Private Family Custom Tour / Honeymoon'
      : 'Custom Private Tour Keluarga / Honeymoon';
  } else if (packageId === 'rental-transport') {
    packageLabel = isEn
      ? 'Tourist Transport Charter (Bus / Hiace / MPV)'
      : 'Sewa Transportasi Pariwisata (Bus / Hiace / MPV)';
  } else if (packageId === 'ticket-visa') {
    packageLabel = isEn
      ? 'Flight Tickets / Passport / Visa Assistance'
      : 'Pengurusan Tiket Pesawat / Paspor / Visa';
  }

  if (estimateEl) estimateEl.textContent = estimateText;
  if (estimateNoteEl) estimateNoteEl.textContent = estimateSubtext;

  const formattedDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : isEn
    ? 'To be determined (Flexible)'
    : 'Belum ditentukan (Fleksibel)';

  const waMessage = isEn
    ? [
        `Hello *${SITE_CONFIG.shortName}* Admin, I would like to make a tour reservation / inquiry:`,
        ``,
        `• *Full Name:* ${name || '(Your Name)'}`,
        `• *WhatsApp No.:* ${phone || '(Your Phone)'}`,
        `• *Package / Service:* ${packageLabel}`,
        `• *Departure Date:* ${formattedDate}`,
        `• *Participants:* ${pax} Pax`,
        `• *Origin / Pick-up City:* ${city || '-'}`,
        `• *Initial Estimate:* ${estimateText}`,
        `• *Special Notes:* ${notes || '-'}`,
        ``,
        `Please share seat availability and the complete quotation. Thank you!`
      ].join('\n')
    : [
        `Halo Admin *${SITE_CONFIG.shortName}*, saya ingin melakukan reservasi / konsultasi perjalanan wisata:`,
        ``,
        `• *Nama Lengkap:* ${name || '(Nama Anda)'}`,
        `• *No. WhatsApp:* ${phone || '(Nomor WA)'}`,
        `• *Pilihan Paket/Layanan:* ${packageLabel}`,
        `• *Tanggal Keberangkatan:* ${formattedDate}`,
        `• *Jumlah Peserta:* ${pax} Orang`,
        `• *Kota Asal / Jemput:* ${city || '-'}`,
        `• *Estimasi Awal:* ${estimateText}`,
        `• *Catatan Tambahan:* ${notes || '-'}`,
        ``,
        `Mohon informasi ketersediaan kuota dan penawaran lengkapnya. Terima kasih!`
      ].join('\n');

  if (previewEl) {
    previewEl.textContent = waMessage;
  }

  return waMessage;
}

/**
 * Handler pengiriman Formulir Reservasi ke WhatsApp
 */
function handleBookingFormSubmit(event) {
  event.preventDefault();

  const waMessage = updateBookingCalculation();
  const feedbackEl = document.getElementById('booking-feedback');

  if (feedbackEl) {
    feedbackEl.classList.remove('hidden');
  }

  const encodedMessage = encodeURIComponent(waMessage);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Handler Quick Search Bar di Hero Section
 */
function handleHeroQuickSearch(event) {
  event.preventDefault();

  const destinationValue = document.getElementById('hero-destination')?.value || '';
  const categoryValue = document.getElementById('hero-category')?.value || 'Semua';
  const dateValue = document.getElementById('hero-date')?.value || '';
  const paxValue = document.getElementById('hero-pax')?.value || '';

  if (dateValue) {
    const bookingDate = document.getElementById('booking-date');
    if (bookingDate) bookingDate.value = dateValue;
  }
  if (paxValue) {
    const bookingPax = document.getElementById('booking-pax');
    if (bookingPax) bookingPax.value = paxValue;
  }

  currentSearchQuery = destinationValue;
  const catalogSearchInput = document.getElementById('catalog-search-input');
  if (catalogSearchInput) {
    catalogSearchInput.value = destinationValue;
  }

  setPackageCategory(categoryValue || 'Semua');
  updateBookingCalculation();

  const catalogSection = document.getElementById('paket-wisata');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Toggle Floating WhatsApp Quick Chat Widget
 */
function toggleFloatingWaPopup() {
  const popup = document.getElementById('floating-wa-popup');
  if (!popup) return;
  popup.classList.toggle('hidden');
}

function sendFloatingWaQuickMessage(topicKey) {
  const topics = {
    consult: {
      id: 'Konsultasi Gratis Rencana Wisata',
      en: 'Free Travel Plan Consultation'
    },
    promo: {
      id: 'Tanya Katalog & Promo Paket Wisata',
      en: 'Tour Packages Catalog & Promotions'
    },
    gathering: {
      id: 'Request Proposal Company Gathering / Outing',
      en: 'Corporate Gathering / Outing Proposal'
    },
    fleet: {
      id: 'Cek Harga Sewa Bus Pariwisata / Hiace',
      en: 'Tourist Bus / Hiace Charter Rates'
    }
  };

  const resolvedTopic = topics[topicKey]?.[currentLang] || topicKey;
  const text =
    currentLang === 'en'
      ? `Hello *${SITE_CONFIG.shortName}* Admin, I would like to consult regarding *${resolvedTopic}*. Please share the details and quotation.`
      : `Halo Admin *${SITE_CONFIG.shortName}*, saya tertarik berkonsultasi mengenai *${resolvedTopic}*. Mohon info katalog & penawarannya.`;

  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Inisialisasi Aplikasi saat DOM selesai dimuat
 */
document.addEventListener('DOMContentLoaded', () => {
  // Set tanggal default minimal ke hari ini pada input tanggal
  const todayIso = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach((input) => {
    input.min = todayIso;
  });

  // Terapkan bahasa awal (ID atau EN dari localStorage)
  setLanguage(currentLang);

  // Event listener pencarian & sorting katalog paket
  const catalogSearchInput = document.getElementById('catalog-search-input');
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderPackages();
    });
  }

  const catalogSortSelect = document.getElementById('catalog-sort-select');
  if (catalogSortSelect) {
    catalogSortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderPackages();
    });
  }

  // Event listener perubahan input pada form reservasi
  const bookingForm = document.getElementById('whatsapp-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('input', updateBookingCalculation);
    bookingForm.addEventListener('change', updateBookingCalculation);
    bookingForm.addEventListener('submit', handleBookingFormSubmit);
  }

  // Event listener Hero Quick Search
  const heroSearchForm = document.getElementById('hero-quick-search-form');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', handleHeroQuickSearch);
  }

  // Sticky Navbar state
  const navbar = document.getElementById('main-navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 24) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenuDrawer.classList.toggle('hidden');
    });

    mobileMenuDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Tutup modal saat tekan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePackageModal();
      closeGalleryLightbox();
    }
  });

  // Reveal-on-scroll IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});
