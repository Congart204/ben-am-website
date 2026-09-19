/* ============================================
   BẾN ẤM — Kết nối Supabase (database thật)
   ============================================ */
const SUPABASE_URL = "https://danauhacglnuxhlnowfp.supabase.co";
const SUPABASE_KEY = "sb_publishable_bfXVcskMohuRQZWYQlH-og_QzvLgBgw";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
