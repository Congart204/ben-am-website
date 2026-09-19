/* ============================================
   BẾN ẤM — Layout chung (header/footer), tiện ích dùng chung
   ============================================ */

const NAV_ITEMS = [
  { href: "index.html", label: "Trang chủ", key: "home" },
  { href: "cuu-ho.html", label: "Cứu hộ", key: "rescue" },
  { href: "mai-am.html", label: "Tìm mái ấm", key: "adopt" },
  { href: "phong-kham.html", label: "Phòng khám", key: "clinic" },
  { href: "noi-giu-tam.html", label: "Nơi giữ tạm", key: "foster" },
  { href: "tinh-nguyen.html", label: "Tình nguyện", key: "volunteer" },
  { href: "cong-dong.html", label: "Cộng đồng", key: "community" },
  { href: "huong-dan.html", label: "Hướng dẫn", key: "guide" },
  { href: "gioi-thieu.html", label: "Giới thiệu", key: "about" },
];

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const active = document.body.dataset.page || "";
  const links = NAV_ITEMS.map(
    (i) => `<a href="${i.href}" class="${i.key === active ? "active" : ""}">${i.label}</a>`
  ).join("");
  const mobileLinks = NAV_ITEMS.map((i) => `<a href="${i.href}">${i.label}</a>`).join("");

  mount.innerHTML = `
    <header class="site-header">
      <div class="container bar">
        <a href="index.html" class="logo"><span class="paw">🐾</span> BẾN ẤM</a>
        <nav class="nav-links">${links}</nav>
        <div class="header-actions">
          <a href="cuu-ho.html" class="btn btn-urgent btn-sm">🚨 <span class="label-full">Cứu hộ khẩn cấp</span></a>
          <a href="dang-nhap.html" class="icon-btn" title="Tài khoản">👤</a>
          <button class="menu-toggle" id="menuToggle" aria-label="Mở menu">☰</button>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-head">
        <a href="index.html" class="logo"><span class="paw">🐾</span> BẾN ẤM</a>
        <button class="menu-toggle" id="menuClose" aria-label="Đóng menu">✕</button>
      </div>
      ${mobileLinks}
      <a href="cuu-ho.html" class="btn btn-urgent btn-block">🚨 Gửi yêu cầu cứu hộ</a>
      <a href="dang-nhap.html" class="btn btn-outline btn-block">Đăng nhập / Đăng ký</a>
    </div>
  `;

  const toggle = document.getElementById("menuToggle");
  const close = document.getElementById("menuClose");
  const menu = document.getElementById("mobileMenu");
  toggle?.addEventListener("click", () => menu.classList.add("open"));
  close?.addEventListener("click", () => menu.classList.remove("open"));
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo">🐾 BẾN ẤM</div>
            <p style="opacity:.85; font-size:14px;">Nền tảng kết nối cứu hộ khẩn cấp, dịch vụ chăm sóc thú y, nơi giữ tạm và nhận nuôi thú cưng tại Việt Nam.</p>
          </div>
          <div>
            <h4>Chức năng</h4>
            <ul>
              <li><a href="cuu-ho.html">Cứu hộ khẩn cấp</a></li>
              <li><a href="mai-am.html">Tìm mái ấm</a></li>
              <li><a href="phong-kham.html">Tìm phòng khám</a></li>
              <li><a href="noi-giu-tam.html">Tìm nơi giữ tạm</a></li>
            </ul>
          </div>
          <div>
            <h4>Cộng đồng</h4>
            <ul>
              <li><a href="tinh-nguyen.html">Tình nguyện viên</a></li>
              <li><a href="cong-dong.html">Cộng đồng hỗ trợ</a></li>
              <li><a href="huong-dan.html">Hướng dẫn</a></li>
              <li><a href="gioi-thieu.html">Về BẾN ẤM</a></li>
            </ul>
          </div>
          <div>
            <h4>Liên hệ &amp; hỗ trợ</h4>
            <ul>
              <li>Hotline: 1900 0000 (mẫu)</li>
              <li>Email: hi@benam.vn (mẫu)</li>
              <li><a href="bao-cao.html">Báo cáo thông tin sai</a></li>
              <li><a href="gioi-thieu.html#lien-he">Liên hệ với BẾN ẤM</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 BẾN ẤM — Đồ án thiết kế giao diện. Dữ liệu trong trang là dữ liệu mẫu, không phải thông tin thật.</span>
          <span>Thiết kế: Be Vietnam Pro · Nunito Sans</span>
        </div>
      </div>
    </footer>
  `;
}

/* ===== Tiện ích ===== */
function statusBadge(statusKey) {
  const s = STATUS_LABEL[statusKey];
  if (!s) return "";
  return `<span class="badge ${s.cls}">${s.text}</span>`;
}
function levelBadge(levelKey) {
  const l = LEVEL_LABEL[levelKey];
  if (!l) return "";
  return `<span class="badge ${l.cls}">${l.text}</span>`;
}

function qs(param) {
  return new URLSearchParams(window.location.search).get(param);
}

function genCode(prefix) {
  return prefix + "-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

/* Lưu yêu cầu cứu hộ / nhận nuôi / tình nguyện vào Supabase (dữ liệu thật, dùng chung mọi thiết bị) */
async function saveRequest(type, data) {
  const code = genCode(type === "rescue" ? "CH" : type === "adopt" ? "NN" : "TN");
  const { data: rows, error } = await sb
    .from("requests")
    .insert({ code, type, data, status: "received" })
    .select()
    .single();
  if (error) {
    alert("Có lỗi khi gửi yêu cầu, vui lòng thử lại. (" + error.message + ")");
    throw error;
  }
  return { code: rows.code, type: rows.type, data: rows.data, createdAt: rows.created_at, status: rows.status };
}
async function getRequest(code) {
  if (!code) return null;
  const { data: row } = await sb.from("requests").select("*").eq("code", code).maybeSingle();
  if (!row) return null;
  return { code: row.code, type: row.type, data: row.data, createdAt: row.created_at, status: row.status };
}
async function getAllRequests() {
  const { data: rows } = await sb.from("requests").select("*").order("created_at", { ascending: false });
  return (rows || []).map((row) => ({ code: row.code, type: row.type, data: row.data, createdAt: row.created_at, status: row.status }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
