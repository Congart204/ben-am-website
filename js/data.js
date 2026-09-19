/* ============================================
   BẾN ẤM — Dữ liệu: thú cưng, ca cứu hộ, phòng khám, nơi giữ tạm
   lấy từ Supabase (database thật, dùng chung cho mọi người xem).
   ============================================ */

let PETS = [];
let RESCUE_CASES = [];
let CLINICS = [];
let FOSTERS = [];

function timeAgo(iso) {
  if (!iso) return "";
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return mins + " phút trước";
  const hours = Math.floor(mins / 60);
  if (hours < 24) return hours + " giờ trước";
  const days = Math.floor(hours / 24);
  return days + " ngày trước";
}

async function loadCoreData() {
  const [petsRes, casesRes, clinicsRes, fostersRes] = await Promise.all([
    sb.from("pets").select("*").order("updated_at", { ascending: false }),
    sb.from("rescue_cases").select("*").order("updated_at", { ascending: false }),
    sb.from("clinics").select("*"),
    sb.from("fosters").select("*"),
  ]);

  PETS = (petsRes.data || []).map((p) => ({
    ...p,
    updated: (p.updated_at || "").slice(0, 10),
  }));

  RESCUE_CASES = (casesRes.data || []).map((c) => ({
    ...c,
    desc: c.description,
    updated: timeAgo(c.updated_at),
  }));

  CLINICS = (clinicsRes.data || []).map((c) => ({
    ...c,
    updated: (c.updated_at || "").slice(0, 10),
  }));
  FOSTERS = (fostersRes.data || []).map((f) => ({
    ...f,
    updated: (f.updated_at || "").slice(0, 10),
  }));
}

/* Câu chuyện thành công và tác vụ tình nguyện: nội dung minh họa tĩnh, chưa cần database */
const STORIES = [
  { id: "s1", pet: "Vàng", area: "Đà Nẵng", text: "Sau 3 tháng chờ đợi, Vàng đã tìm được gia đình mới ở Ngũ Hành Sơn. Bé giờ đã quen với việc canh nhà và rất được cưng chiều.", img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=700&h=525&q=70" },
  { id: "s2", pet: "Tôm", area: "TP.HCM", text: "Tôm được cứu khi còn là mèo con yếu ớt, nay đã khỏe mạnh và sống cùng một gia đình có 2 bé nhỏ.", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&h=525&q=70" },
  { id: "s3", pet: "Bi", area: "Hà Nội", text: "Bi từng bị bỏ rơi ở công viên, sau thời gian điều trị đã được một bạn sinh viên nhận nuôi.", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&h=525&q=70" },
];

const VOLUNTEER_TASKS = [
  { id: "v1", type: "Vận chuyển", area: "TP.HCM", desc: "Cần người chở Mít đến phòng khám Happy Pet Clinic Q7 vào cuối tuần.", time: "Thứ Bảy, 21/09/2026" },
  { id: "v2", type: "Chăm sóc tạm thời", area: "Hà Nội", desc: "Cần người hỗ trợ chăm 2 mèo con trong lúc tìm nhà giữ tạm dài hạn.", time: "Trong tuần này" },
  { id: "v3", type: "Chụp ảnh & truyền thông", area: "Đà Nẵng", desc: "Cần tình nguyện viên chụp ảnh hồ sơ cho 5 bé chó mới cứu hộ.", time: "Linh hoạt" },
  { id: "v4", type: "Gây quỹ cộng đồng", area: "Toàn quốc", desc: "Hỗ trợ kêu gọi quyên góp thức ăn và vật phẩm y tế.", time: "Dài hạn" },
];

const STATUS_LABEL = {
  received: { text: "Đã tiếp nhận", cls: "badge-received" },
  seeking: { text: "Đang tìm hỗ trợ", cls: "badge-seeking" },
  treating: { text: "Đang điều trị", cls: "badge-treating" },
  fostering: { text: "Đang chăm sóc tạm", cls: "badge-fostering" },
  ready: { text: "Sẵn sàng nhận nuôi", cls: "badge-ready" },
  adopted: { text: "Đã tìm được mái ấm", cls: "badge-adopted" },
  available: { text: "Còn nhận", cls: "badge-ready" },
  full: { text: "Đã đầy", cls: "badge-outline" },
};

const LEVEL_LABEL = {
  urgent: { text: "Khẩn cấp", cls: "badge-lv3" },
  warning: { text: "Cần hỗ trợ sớm", cls: "badge-lv2" },
  normal: { text: "Bình thường", cls: "badge-lv1" },
};
