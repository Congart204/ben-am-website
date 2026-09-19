/* ============================================
   BẾN ẤM — Dữ liệu mẫu (mock data), phục vụ demo giao diện.
   Không phải dữ liệu thật của tổ chức nào.
   ============================================ */

/* Ảnh mẫu từ Unsplash (free-to-use), gắn theo chủ đề chó/mèo/phòng khám/nhà giữ tạm */
const IMG = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&h=525&q=70`;
const DOG_IMGS = ["1552053831-71594a27632d", "1517849845537-4d257902861a", "1543466835-00a7907e9de1", "1601758228041-f3b2795255f1", "1583511655857-d19b40a7a54e"];
const CAT_IMGS = ["1495360010541-f48722b34f7d", "1533738363-b7f9aef128ce", "1518791841217-8f162f1e1131", "1526336024174-e58f5cdd8e13", "1495103033382-fe343886b671"];
const VET_IMGS = ["1628009368231-7bb7cfcb0def", "1583337130417-3346a1be7dee"];
const HOME_IMGS = ["1450778869180-41d0601e046e", "1548199973-03cce0bbc87b"];

const PETS = [
  { id: "p1", name: "Mít", species: "Chó", breed: "Chó ta", age: "~1 tuổi", gender: "Đực", size: "Vừa", area: "Quận 7, TP.HCM", status: "ready", health: "Đã tiêm phòng, đã triệt sản", personality: "Hiền lành, quấn người, thân thiện với trẻ nhỏ", org: "Trạm cứu hộ Bến Ấm", updated: "2026-09-12", img: IMG(DOG_IMGS[0]) },
  { id: "p2", name: "Bún", species: "Mèo", breed: "Mèo ta lông ngắn", age: "~8 tháng", gender: "Cái", size: "Nhỏ", area: "Cầu Giấy, Hà Nội", status: "ready", health: "Đã tiêm phòng, chưa triệt sản", personality: "Nhút nhát lúc đầu, dạn dần, thích được vuốt ve", org: "Hanoi Pet Rescue (mẫu)", updated: "2026-09-15", img: IMG(CAT_IMGS[0]) },
  { id: "p3", name: "Lu", species: "Chó", breed: "Poodle lai", age: "~3 tuổi", gender: "Đực", size: "Nhỏ", area: "Hải Châu, Đà Nẵng", status: "fostering", health: "Đang hồi phục sau phẫu thuật chân", personality: "Năng động, thích chơi bóng", org: "Paws for Compassion (mẫu)", updated: "2026-09-10", img: IMG(DOG_IMGS[1]) },
  { id: "p4", name: "Kem", species: "Mèo", breed: "Mèo ta", age: "~2 năm", gender: "Cái", size: "Vừa", area: "Bình Thạnh, TP.HCM", status: "ready", health: "Đã triệt sản, khỏe mạnh", personality: "Độc lập, điềm tĩnh, hợp căn hộ nhỏ", org: "ARC Saigon (mẫu)", updated: "2026-09-14", img: IMG(CAT_IMGS[1]) },
  { id: "p5", name: "Đốm", species: "Chó", breed: "Chó ta lai", age: "~5 tháng", gender: "Đực", size: "Nhỏ", area: "Long Biên, Hà Nội", status: "treating", health: "Đang điều trị ghẻ, cần thêm 2 tuần", personality: "Chưa rõ do còn nhỏ, có vẻ hiếu động", org: "Hanoi Pet Adoption (mẫu)", updated: "2026-09-16", img: IMG(DOG_IMGS[2]) },
  { id: "p6", name: "Su", species: "Mèo", breed: "Mèo mướp", age: "~1.5 năm", gender: "Đực", size: "Vừa", area: "Thủ Đức, TP.HCM", status: "ready", health: "Đã tiêm phòng, đã triệt sản", personality: "Ngoan, thích nằm cạnh người", org: "Vietnam Cat Welfare (mẫu)", updated: "2026-09-11", img: IMG(CAT_IMGS[2]) },
  { id: "p7", name: "Vàng", species: "Chó", breed: "Chó ta", age: "~4 tuổi", gender: "Cái", size: "Lớn", area: "Ngũ Hành Sơn, Đà Nẵng", status: "adopted", health: "Khỏe mạnh", personality: "Trung thành, thích canh nhà", org: "Da Nang Animal Rescue (mẫu)", updated: "2026-08-30", img: IMG(DOG_IMGS[3]) },
  { id: "p8", name: "Bông", species: "Mèo", breed: "Mèo ta lông dài", age: "~6 tháng", gender: "Cái", size: "Nhỏ", area: "Quận 7, TP.HCM", status: "ready", health: "Đã tiêm mũi 1, cần tiêm nhắc lại", personality: "Tò mò, hay chơi đùa", org: "Trạm cứu hộ Bến Ấm", updated: "2026-09-17", img: IMG(CAT_IMGS[3]) },
];

const RESCUE_CASES = [
  { id: "r1", level: "urgent", species: "Chó", area: "Gò Vấp, TP.HCM", desc: "Chó bị thương ở chân sau do tai nạn giao thông, đang nằm ven đường.", updated: "2 giờ trước", need: "Cần đưa đi cấp cứu gấp", status: "seeking", img: IMG(DOG_IMGS[4]) },
  { id: "r2", level: "warning", species: "Mèo", area: "Đống Đa, Hà Nội", desc: "Mèo con khoảng 4 tuần tuổi bị bỏ rơi trong thùng carton, chưa mở mắt hoàn toàn.", updated: "5 giờ trước", need: "Cần người giữ tạm và sữa cho mèo con", status: "seeking", img: IMG(CAT_IMGS[4]) },
  { id: "r3", level: "normal", species: "Chó", area: "Sơn Trà, Đà Nẵng", desc: "Đàn chó 3 con lang thang gần khu chợ, có dấu hiệu suy dinh dưỡng.", updated: "1 ngày trước", need: "Cần hỗ trợ thức ăn và theo dõi", status: "received", img: IMG(DOG_IMGS[0]) },
  { id: "r4", level: "urgent", species: "Mèo", area: "Ninh Kiều, Cần Thơ", desc: "Mèo bị mắc kẹt trên mái tôn cao, không tự xuống được, đã 2 ngày.", updated: "30 phút trước", need: "Cần người hỗ trợ tại chỗ", status: "seeking", img: IMG(CAT_IMGS[0]) },
  { id: "r5", level: "warning", species: "Chó", area: "Thanh Khê, Đà Nẵng", desc: "Chó già yếu, đi lại khó khăn, nghi bị bỏ rơi gần công viên.", updated: "3 giờ trước", need: "Cần khám thú y và nơi giữ tạm", status: "treating", img: IMG(DOG_IMGS[1]) },
  { id: "r6", level: "normal", species: "Mèo", area: "Hải Châu, Đà Nẵng", desc: "Mèo mẹ và 4 mèo con dưới gầm nhà bỏ hoang, đã ổn định tạm thời.", updated: "2 ngày trước", need: "Cần hỗ trợ triệt sản mèo mẹ", status: "fostering", img: IMG(CAT_IMGS[1]) },
];

const CLINICS = [
  { id: "c1", name: "Happy Pet Clinic Q7", area: "Quận 7, TP.HCM", services: ["Tiêm phòng", "Phẫu thuật", "Cấp cứu 24/7"], hotline: "0909 000 111", hours: "07:00 – 21:00, cấp cứu 24/7", address: "12 Đường Nguyễn Lương Bằng, Q7, TP.HCM", emergency: true, updated: "2026-09-01", img: IMG(VET_IMGS[0]) },
  { id: "c2", name: "Phòng khám thú y An Nhiên", area: "Cầu Giấy, Hà Nội", services: ["Tiêm phòng", "Microchip", "Grooming"], hotline: "0912 345 678", hours: "08:00 – 20:00", address: "45 Trần Duy Hưng, Cầu Giấy, Hà Nội", emergency: false, updated: "2026-08-20", img: IMG(VET_IMGS[1]) },
  { id: "c3", name: "Saigon Pet Hospital", area: "Bình Thạnh, TP.HCM", services: ["Phẫu thuật", "Nội trú", "Xét nghiệm"], hotline: "0908 222 333", hours: "24/7", address: "88 Điện Biên Phủ, Bình Thạnh, TP.HCM", emergency: true, updated: "2026-09-05", img: IMG(VET_IMGS[0]) },
  { id: "c4", name: "Đà Nẵng Pet Care", area: "Hải Châu, Đà Nẵng", services: ["Tiêm phòng", "Grooming", "Lưu trú"], hotline: "0905 111 222", hours: "07:30 – 19:00", address: "20 Bạch Đằng, Hải Châu, Đà Nẵng", emergency: false, updated: "2026-09-08", img: IMG(VET_IMGS[1]) },
];

const FOSTERS = [
  { id: "f1", name: "Nhà giữ tạm Cô Lan", area: "Quận 7, TP.HCM", accepts: ["Chó nhỏ", "Mèo"], capacity: "Còn 2 chỗ", duration: "1–4 tuần", cost: "Miễn phí (cần hỗ trợ thức ăn)", condition: "Ưu tiên thú đã khám sức khỏe ban đầu", status: "available", updated: "2026-09-14", img: IMG(HOME_IMGS[0]) },
  { id: "f2", name: "Trạm giữ tạm Bình An", area: "Long Biên, Hà Nội", accepts: ["Chó lớn"], capacity: "Đã đầy", duration: "Không giới hạn", cost: "Có hỗ trợ chi phí thức ăn", condition: "Chỉ nhận thú đã tiêm phòng", status: "full", updated: "2026-09-09", img: IMG(HOME_IMGS[1]) },
  { id: "f3", name: "Foster nhà chị Hạnh", area: "Hải Châu, Đà Nẵng", accepts: ["Mèo con", "Mèo mẹ"], capacity: "Còn 1 chỗ", duration: "2–6 tuần", cost: "Miễn phí", condition: "Cần cách ly với thú nuôi sẵn có", status: "available", updated: "2026-09-16", img: IMG(HOME_IMGS[0]) },
];

const VOLUNTEER_TASKS = [
  { id: "v1", type: "Vận chuyển", area: "TP.HCM", desc: "Cần người chở Mít đến phòng khám Happy Pet Clinic Q7 vào cuối tuần.", time: "Thứ Bảy, 21/09/2026" },
  { id: "v2", type: "Chăm sóc tạm thời", area: "Hà Nội", desc: "Cần người hỗ trợ chăm 2 mèo con trong lúc tìm nhà giữ tạm dài hạn.", time: "Trong tuần này" },
  { id: "v3", type: "Chụp ảnh & truyền thông", area: "Đà Nẵng", desc: "Cần tình nguyện viên chụp ảnh hồ sơ cho 5 bé chó mới cứu hộ.", time: "Linh hoạt" },
  { id: "v4", type: "Gây quỹ cộng đồng", area: "Toàn quốc", desc: "Hỗ trợ kêu gọi quyên góp thức ăn và vật phẩm y tế.", time: "Dài hạn" },
];

const STORIES = [
  { id: "s1", pet: "Vàng", area: "Đà Nẵng", text: "Sau 3 tháng chờ đợi, Vàng đã tìm được gia đình mới ở Ngũ Hành Sơn. Bé giờ đã quen với việc canh nhà và rất được cưng chiều.", img: IMG(DOG_IMGS[3]) },
  { id: "s2", pet: "Tôm", area: "TP.HCM", text: "Tôm được cứu khi còn là mèo con yếu ớt, nay đã khỏe mạnh và sống cùng một gia đình có 2 bé nhỏ.", img: IMG(CAT_IMGS[2]) },
  { id: "s3", pet: "Bi", area: "Hà Nội", text: "Bi từng bị bỏ rơi ở công viên, sau thời gian điều trị đã được một bạn sinh viên nhận nuôi.", img: IMG(DOG_IMGS[2]) },
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
