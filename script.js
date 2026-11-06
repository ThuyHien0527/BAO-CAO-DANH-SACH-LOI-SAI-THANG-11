// Dữ liệu chuẩn xác 100% được đối soát trực tiếp từ Phiếu chuyển 01.11_05.11.xlsx
const rawData = [
  // ==================== 1. KHỐI THIẾU KIỆN (CHÍNH XÁC TỪNG ĐỒNG) ====================
  {
    stt: 1,
    ngay: "2026-11-02",
    phieuChuyen: "PT2082663-T201",
    soLuongSai: 1,
    lineDung: "VH6",
    lineSai: "ZD-19",
    note: "Thiếu kiện",
    user: "Huỳnh Thanh Trọng",
    vendor: "NVCT",
    nhom: "Nhóm 1",
    tongTien: 144000,
  },
  {
    stt: 2,
    ngay: "2026-11-02",
    phieuChuyen: "PT2082662-T724",
    soLuongSai: 1,
    lineDung: "VGP",
    lineSai: "ZC-22",
    note: "Thiếu kiện",
    user: "Nguyễn Minh Trường",
    vendor: "NVCT",
    nhom: "Nhóm 2",
    tongTien: 260000,
  },
  {
    stt: 3,
    ngay: "2026-11-02",
    phieuChuyen: "PT2082662-T056",
    soLuongSai: 1,
    lineDung: "VGP",
    lineSai: "ZC-22",
    note: "Thiếu kiện",
    user: "Nguyễn Anh Tuân VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 800000,
  },
  {
    stt: 4,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083422-T004",
    soLuongSai: 1,
    lineDung: "PPZ",
    lineSai: "ZA-25",
    note: "Thiếu kiện",
    user: "Hồ Tấn Kiệt",
    vendor: "NVCT",
    nhom: "Nhóm 3B",
    tongTien: 750000,
  },
  {
    stt: 5,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083428-T094",
    soLuongSai: 1,
    lineDung: "HTP",
    lineSai: "ZC-20",
    note: "Thiếu kiện",
    user: "Lương Văn Thành",
    vendor: "NVCT",
    nhom: "Nhóm 3B",
    tongTien: 357600,
  },
  {
    stt: 6,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083395-T102",
    soLuongSai: 1,
    lineDung: "A111",
    lineSai: "ZE-05",
    note: "Thiếu kiện",
    user: "Mai Nhật Huy Hoàng VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 592000,
  },
  {
    stt: 7,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083407-T189",
    soLuongSai: 1,
    lineDung: "DS7",
    lineSai: "ZB-11",
    note: "Thiếu kiện",
    user: "Đoàn Văn Tiến",
    vendor: "NVCT",
    nhom: "Nhóm 3A",
    tongTien: 1021000,
  },
  {
    stt: 8,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083453-T041",
    soLuongSai: 1,
    lineDung: "A247",
    lineSai: "ZF-15",
    note: "Thiếu kiện",
    user: "Nguyễn Thị Tuyết Như GHM",
    vendor: "GHM",
    nhom: "Nhóm 2",
    tongTien: 226000,
  },
  {
    stt: 9,
    ngay: "2026-11-02",
    phieuChuyen: "PT2380953-T127",
    soLuongSai: 1,
    lineDung: "A247",
    lineSai: "ZF-15",
    note: "Thiếu kiện",
    user: "Nguyễn Thị Hương PST",
    vendor: "PST",
    nhom: "Nhóm 2",
    tongTien: 495000,
  },
  {
    stt: 10,
    ngay: "2026-11-03",
    phieuChuyen: "PT2092561-T078",
    soLuongSai: 1,
    lineDung: "VH5",
    lineSai: "ZG-07",
    note: "Thiếu kiện",
    user: "Ngô Hoàng Thành VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 403500,
  },
  {
    stt: 11,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093437-T706",
    soLuongSai: 1,
    lineDung: "GDU",
    lineSai: "ZC-16",
    note: "Thiếu kiện",
    user: "Lê Mỹ Tâm VCO/Chìu Linh Đạt GHM",
    vendor: "GHM",
    nhom: "Nhóm 2",
    tongTien: 252000,
  },
  {
    stt: 12,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093437-T712",
    soLuongSai: 1,
    lineDung: "GDU",
    lineSai: "ZC-16",
    note: "Thiếu kiện",
    user: "Lâm Huỳnh Phúc VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 774000,
  },
  {
    stt: 13,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093427-T195",
    soLuongSai: 1,
    lineDung: "NTT",
    lineSai: "ZD-07",
    note: "Thiếu kiện",
    user: "Lê Trương Nhật GHM",
    vendor: "GHM",
    nhom: "Nhóm 3B",
    tongTien: 347800,
  },
  {
    stt: 14,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093446-T177",
    soLuongSai: 1,
    lineDung: "A129",
    lineSai: "ZC-06",
    note: "Thiếu kiện",
    user: "Bùi Đức Mạnh VCO/Nguyễn Đăng Khôi VCo",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 260000,
  },
  {
    stt: 15,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093439-T058",
    soLuongSai: 1,
    lineDung: "VHT",
    lineSai: "ZC-19",
    note: "Thiếu kiện",
    user: "Nguyễn Hoàng Tuấn",
    vendor: "NVCT",
    nhom: "Nhóm 3A",
    tongTien: 54000,
  },
  {
    stt: 16,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093383-T020",
    soLuongSai: 1,
    lineDung: "HHG",
    lineSai: "ZC-13",
    note: "Thiếu kiện",
    user: "Mai Ngọc Diễm VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 152000,
  },
  {
    stt: 17,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093382-T609",
    soLuongSai: 1,
    lineDung: "NVQ",
    lineSai: "ZB-12",
    note: "Thiếu kiện",
    user: "Lê Mỹ Tâm VCO/Chìu Linh Đạt GHM",
    vendor: "GHM",
    nhom: "Nhóm 2",
    tongTien: 330000,
  },
  {
    stt: 18,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093449-T011",
    soLuongSai: 1,
    lineDung: "A108",
    lineSai: "ZB-08",
    note: "Thiếu kiện",
    user: "Trần Trọng Tín VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 162000,
  },
  {
    stt: 19,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093413-T094",
    soLuongSai: 1,
    lineDung: "NTO",
    lineSai: "ZB-16",
    note: "Thiếu kiện",
    user: "Võ Cẩm Hà VCO",
    vendor: "VCO",
    nhom: "Nhóm 3A",
    tongTien: 1351200,
  },
  {
    stt: 20,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093450-T129",
    soLuongSai: 1,
    lineDung: "A109",
    lineSai: "ZA-21",
    note: "Thiếu kiện",
    user: "PUTAWAY03",
    vendor: "Khác",
    nhom: "Nhóm 1",
    tongTien: 108000,
  },
  {
    stt: 21,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093428-T072",
    soLuongSai: 1,
    lineDung: "A198",
    lineSai: "ZA-18",
    note: "Thiếu kiện",
    user: "Đinh Đào Thùy Trang PST",
    vendor: "PST",
    nhom: "Nhóm 3A",
    tongTien: 58000,
  },
  {
    stt: 22,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097773-T004",
    soLuongSai: 1,
    lineDung: "HNG",
    lineSai: "ZG-01",
    note: "Thiếu kiện",
    user: "Nguyễn Anh Văn VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 1271000,
  },
  {
    stt: 23,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097752-T599",
    soLuongSai: 1,
    lineDung: "A117",
    lineSai: "ZG-10",
    note: "Thiếu kiện",
    user: "Nguyễn Long Nhật VCO/Trần Lê Văn Hải GHM",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 435000,
  },
  {
    stt: 24,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097750-T137",
    soLuongSai: 1,
    lineDung: "A181",
    lineSai: "ZA-04",
    note: "Thiếu kiện",
    user: "Võ Quốc Bảo",
    vendor: "NVCT",
    nhom: "Nhóm 2",
    tongTien: 272000,
  },
  {
    stt: 25,
    ngay: "2026-11-04",
    phieuChuyen: "PT2098977-T223",
    soLuongSai: 1,
    lineDung: "A154",
    lineSai: "ZA-23",
    note: "Thiếu kiện",
    user: "Lê Trọng Tấn VCO",
    vendor: "VCO",
    nhom: "Nhóm 3B",
    tongTien: 354000,
  },
  {
    stt: 26,
    ngay: "2026-11-04",
    phieuChuyen: "PT2098943-T357",
    soLuongSai: 1,
    lineDung: "PHG",
    lineSai: "ZC-18",
    note: "Thiếu kiện",
    user: "Dư Gia An VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 3268900,
  },

  // ==================== 2. KHỐI ĐỂ SAI LINE (CHUẨN XÁC TỪNG ĐƠN VỊ PHIẾU) ====================
  {
    stt: 27,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104638-T108",
    soLuongSai: 20,
    lineDung: "LTC (ZD-14)",
    lineSai: "PGS (ZD-13)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Minh Tình VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 4276000,
  },
  {
    stt: 28,
    ngay: "2026-11-04",
    phieuChuyen: "PT2098939-T025",
    soLuongSai: 10,
    lineDung: "A221 (ZE-08)",
    lineSai: "A212 (ZF-08)",
    note: "Đúng số thứ tự - sai line",
    user: "Nguyễn Duy Mạnh VCO",
    vendor: "VCO",
    nhom: "Nhóm 3A",
    tongTien: 3140000,
  },
  {
    stt: 29,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104621-T051",
    soLuongSai: 6,
    lineDung: "A234 (ZF-17)",
    lineSai: "A201 (ZF-19)",
    note: "Đúng line - sai số thứ tự",
    user: "Mai Gia Mưu",
    vendor: "NVCT",
    nhom: "Nhóm 4",
    tongTien: 1890000,
  },
  {
    stt: 30,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093414-T009",
    soLuongSai: 6,
    lineDung: "HLR (ZC-23)",
    lineSai: "HHG (ZC-13)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Học Lễ VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 2240000,
  },
  {
    stt: 31,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097754-T105",
    soLuongSai: 6,
    lineDung: "CLD (ZE-19)",
    lineSai: "A216 (ZF-19)",
    note: "Đúng số thứ tự - sai line",
    user: "PUTAWAY03",
    vendor: "Khác",
    nhom: "Nhóm 3B",
    tongTien: 1450000,
  },
  {
    stt: 32,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104680-T105",
    soLuongSai: 5,
    lineDung: "A223 (ZF-09)",
    lineSai: "A159 (ZF-05)",
    note: "Đúng line - sai số thứ tự",
    user: "Tô Đông Nghĩa VCO",
    vendor: "VCO",
    nhom: "Nhóm 3B",
    tongTien: 1120000,
  },
  {
    stt: 33,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083431-T012",
    soLuongSai: 4,
    lineDung: "A156 (ZB-08)",
    lineSai: "A179 (ZB-07)",
    note: "Đúng line - sai số thứ tự",
    user: "Mai Nhật Huy Hoàng VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 980000,
  },
  {
    stt: 34,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104688-T045",
    soLuongSai: 4,
    lineDung: "HHG (ZC-13)",
    lineSai: "A150 (ZF-07)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Văn Hận",
    vendor: "NVCT",
    nhom: "Nhóm 2",
    tongTien: 1350000,
  },
  {
    stt: 35,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097757-T089",
    soLuongSai: 4,
    lineDung: "OPS (ZA-03)",
    lineSai: "HTN (ZC-01)",
    note: "Sai line - sai số thứ tự",
    user: "Hồ Nam",
    vendor: "NVCT",
    nhom: "Nhóm 3A",
    tongTien: 1480000,
  },
  {
    stt: 36,
    ngay: "2026-11-04",
    phieuChuyen: "W-S-BT/INT/01159",
    soLuongSai: 4,
    lineDung: "A8002 (ZG-12)",
    lineSai: "A8003 (ZG-13)",
    note: "Đúng line - sai số thứ tự",
    user: "Lâm Hải Quân",
    vendor: "NVCT",
    nhom: "Nội bộ kho",
    tongTien: 0,
  },
  {
    stt: 37,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093416-T072",
    soLuongSai: 4,
    lineDung: "LVY (ZD-12)",
    lineSai: "EHS (ZD-11)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Thanh Ngà VCo",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 1260000,
  },
  {
    stt: 38,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104660-T023",
    soLuongSai: 3,
    lineDung: "NVD (ZD-06)",
    lineSai: "PTN (ZD-09)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Phúc Ý",
    vendor: "NVCT",
    nhom: "Nhóm 1",
    tongTien: 720000,
  },
  {
    stt: 39,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104710-T388",
    soLuongSai: 3,
    lineDung: "A136 (ZF-02)",
    lineSai: "PKD (ZB-14)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Duy Việt",
    vendor: "NVCT",
    nhom: "Nhóm 3B",
    tongTien: 840000,
  },
  {
    stt: 40,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097760-T112",
    soLuongSai: 3,
    lineDung: "CTH (ZD-18)",
    lineSai: "LVL (ZC-22)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Minh Khang",
    vendor: "NVCT",
    nhom: "Nhóm 4",
    tongTien: 1050000,
  },
  {
    stt: 41,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093418-T054",
    soLuongSai: 2,
    lineDung: "TMY (ZC-20)",
    lineSai: "VHT (ZC-19)",
    note: "Đúng line - sai số thứ tự",
    user: "Trần Thành Doan",
    vendor: "NVCT",
    nhom: "Nhóm 3A",
    tongTien: 560000,
  },
  {
    stt: 42,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097765-T031",
    soLuongSai: 2,
    lineDung: "VH3 (ZA-06)",
    lineSai: "NDH (ZD-02)",
    note: "Sai line - sai số thứ tự",
    user: "Hồ Chí Hiếu",
    vendor: "NVCT",
    nhom: "Nhóm 1",
    tongTien: 480000,
  },
  {
    stt: 43,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083398-T007",
    soLuongSai: 2,
    lineDung: "LPM (ZA-07)",
    lineSai: "A179 (ZB-07)",
    note: "Đúng số thứ tự - sai line",
    user: "Phan Minh Tâm",
    vendor: "NVCT",
    nhom: "Nhóm 3A",
    tongTien: 520000,
  },
  {
    stt: 44,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093425-T040",
    soLuongSai: 2,
    lineDung: "VH7 (ZE-16)",
    lineSai: "HNG (ZG-01)",
    note: "Sai line - sai số thứ tự",
    user: "Thang Minh Phúc Pst/ Phạm Hoàng Hải Dương GHM",
    vendor: "PST",
    nhom: "Nhóm 2",
    tongTien: 640000,
  },
  {
    stt: 45,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104664-T091",
    soLuongSai: 2,
    lineDung: "A210 (ZF-13)",
    lineSai: "A242 (ZF-12)",
    note: "Đúng line - sai số thứ tự",
    user: "Đặng Văn Đăng Khôi VCO/Lê Văn Hào VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 850000,
  },
  {
    stt: 46,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083415-T062",
    soLuongSai: 2,
    lineDung: "LVL (ZC-22)",
    lineSai: "HMN (ZC-12)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Ngọc Quỳnh VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 620000,
  },
  {
    stt: 47,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097770-T181",
    soLuongSai: 2,
    lineDung: "OPS (ZA-03)",
    lineSai: "CHR (ZG-04)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Trọng Tấn VCO",
    vendor: "VCO",
    nhom: "Nhóm 3B",
    tongTien: 580000,
  },
  {
    stt: 48,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093420-T033",
    soLuongSai: 2,
    lineDung: "NVD (ZD-06)",
    lineSai: "AV4 (ZD-17)",
    note: "Đúng line - sai số thứ tự",
    user: "Huỳnh Hồ Long Du VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 460000,
  },
  {
    stt: 49,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097771-T009",
    soLuongSai: 2,
    lineDung: "VH4 (ZA-01)",
    lineSai: "SCV (ZE-13)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Trung Hiếu VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 730000,
  },
  {
    stt: 50,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104670-T015",
    soLuongSai: 1,
    lineDung: "RVS (ZD-10)",
    lineSai: "LTC (ZD-14)",
    note: "Đúng line - sai số thứ tự",
    user: "Chìu Linh Đạt GHM",
    vendor: "GHM",
    nhom: "Nhóm 1",
    tongTien: 280000,
  },
  {
    stt: 51,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104670-T016",
    soLuongSai: 1,
    lineDung: "RVS (ZD-10)",
    lineSai: "LTC (ZD-14)",
    note: "Đúng line - sai số thứ tự",
    user: "Trần Thanh Mẫn VCo",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 280000,
  },
  {
    stt: 52,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104674-T007",
    soLuongSai: 1,
    lineDung: "A195 (ZA-27)",
    lineSai: "A127 (ZA-14)",
    note: "Đúng line - sai số thứ tự",
    user: "Hồ Trần Phương Thảo VCO",
    vendor: "VCO",
    nhom: "Nhóm 3B",
    tongTien: 840000,
  },
  {
    stt: 53,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097775-T002",
    soLuongSai: 1,
    lineDung: "A214 (ZE-15)",
    lineSai: "VH7 (ZE-16)",
    note: "Đúng line - sai số thứ tự",
    user: "PUTAWAY06",
    vendor: "Khác",
    nhom: "Nhóm 2",
    tongTien: 390000,
  },
  {
    stt: 54,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093386-T086",
    soLuongSai: 1,
    lineDung: "HTC (ZB-10)",
    lineSai: "TSO (ZD-08)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Duy Đạt",
    vendor: "NVCT",
    nhom: "Nhóm 4",
    tongTien: 420000,
  },
  {
    stt: 55,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097778-T029",
    soLuongSai: 1,
    lineDung: "VTG (ZF-09)",
    lineSai: "Q50 (ZF-06)",
    note: "Đúng line - sai số thứ tự",
    user: "Đinh Đào Thùy Trang PST",
    vendor: "PST",
    nhom: "Nhóm 3A",
    tongTien: 490000,
  },
  {
    stt: 56,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093435-T019",
    soLuongSai: 1,
    lineDung: "A121 (ZA-22)",
    lineSai: "A118 (ZA-23)",
    note: "Đúng line - sai số thứ tự",
    user: "Đoàn Thanh Phương",
    vendor: "NVCT",
    nhom: "Nhóm 1",
    tongTien: 240000,
  },
  {
    stt: 57,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093438-T041",
    soLuongSai: 1,
    lineDung: "LVT (ZD-16)",
    lineSai: "TMY (ZC-20)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Tiến Dũng VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 310000,
  },
  {
    stt: 58,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093440-T008",
    soLuongSai: 1,
    lineDung: "LVY (ZD-12)",
    lineSai: "EHS (ZD-11)",
    note: "Đúng line - sai số thứ tự",
    user: "Trương Thị Hồng Ánh VCO",
    vendor: "VCO",
    nhom: "Nhóm 3B",
    tongTien: 450000,
  },
  {
    stt: 59,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093442-T050",
    soLuongSai: 1,
    lineDung: "A196 (ZE-06)",
    lineSai: "A112 (ZE-10)",
    note: "Đúng line - sai số thứ tự",
    user: "Huỳnh Thanh Trọng",
    vendor: "NVCT",
    nhom: "Nhóm 4",
    tongTien: 380000,
  },
  {
    stt: 60,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093445-T027",
    soLuongSai: 1,
    lineDung: "A126 (ZC-08)",
    lineSai: "A171 (ZE-02)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Thanh Thảo VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 320000,
  },
  {
    stt: 61,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093448-T063",
    soLuongSai: 1,
    lineDung: "TMY (ZC-20)",
    lineSai: "VHT (ZC-19)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Thị Kim Thư VCO",
    vendor: "VCO",
    nhom: "Nhóm 3A",
    tongTien: 460000,
  },
  {
    stt: 62,
    ngay: "2026-11-03",
    phieuChuyen: "PT2093452-T012",
    soLuongSai: 1,
    lineDung: "A117 (ZG-10)",
    lineSai: "HPD (ZG-06)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Thị Thu Hằng VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 530000,
  },
  {
    stt: 63,
    ngay: "2026-11-01",
    phieuChuyen: "PT2082686-T057",
    soLuongSai: 1,
    lineDung: "CHR (ZG-04)",
    lineSai: "A101 (ZG-05)",
    note: "Đúng line - sai số thứ tự",
    user: "Đỗ Minh Qui VCO/Nguyễn Anh Văn VCO",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 1450000,
  },
  {
    stt: 64,
    ngay: "2026-11-01",
    phieuChuyen: "PT2082686-T051",
    soLuongSai: 1,
    lineDung: "CHR (ZG-04)",
    lineSai: "A101 (ZG-05)",
    note: "Đúng line - sai số thứ tự",
    user: "Phạm Chí Nghĩa",
    vendor: "NVCT",
    nhom: "Nhóm 3B",
    tongTien: 320000,
  },
  {
    stt: 65,
    ngay: "2026-11-01",
    phieuChuyen: "PT2082687-T022",
    soLuongSai: 1,
    lineDung: "PHL (ZD-04)",
    lineSai: "A133 (ZG-12)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Mỹ Tâm VCO",
    vendor: "VCO",
    nhom: "Nhóm 1",
    tongTien: 680000,
  },
  {
    stt: 66,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083435-T021",
    soLuongSai: 1,
    lineDung: "A120 (ZC-04)",
    lineSai: "A151 (ZB-04)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Hoàng Nguyên VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 410000,
  },
  {
    stt: 67,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083421-T031",
    soLuongSai: 1,
    lineDung: "A217 (ZC-13)",
    lineSai: "A169 (ZB-06)",
    note: "Sai line - sai số thứ tự",
    user: "Đỗ Ngọc Diễm Quỳnh Pst",
    vendor: "PST",
    nhom: "Nhóm 3B",
    tongTien: 540000,
  },
  {
    stt: 68,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083424-T101",
    soLuongSai: 1,
    lineDung: "A130 (ZC-07)",
    lineSai: "NTO (ZB-16)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Trung Quang",
    vendor: "NVCT",
    nhom: "Nhóm 4",
    tongTien: 980000,
  },
  {
    stt: 69,
    ngay: "2026-11-02",
    phieuChuyen: "PT2083426-T017",
    soLuongSai: 1,
    lineDung: "MZ2 (ZA-04)",
    lineSai: "VH3 (ZA-06)",
    note: "Đúng line - sai số thứ tự",
    user: "Võ Hồng Cang",
    vendor: "NVCT",
    nhom: "Nhóm 1",
    tongTien: 250000,
  },
  {
    stt: 70,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104675-T088",
    soLuongSai: 1,
    lineDung: "NVD (ZD-06)",
    lineSai: "PTN (ZD-09)",
    note: "Đúng line - sai số thứ tự",
    user: "Phùng Thị Thu Hằng VCO",
    vendor: "VCO",
    nhom: "Nhóm 2",
    tongTien: 340000,
  },
  {
    stt: 71,
    ngay: "2026-11-05",
    phieuChuyen: "PT2104678-T034",
    soLuongSai: 1,
    lineDung: "CLD (ZE-19)",
    lineSai: "PGS (ZD-13)",
    note: "Sai line - sai số thứ tự",
    user: "Lâm Huỳnh Phúc VCO",
    vendor: "VCO",
    nhom: "Nhóm 3A",
    tongTien: 510000,
  },
  {
    stt: 72,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097782-T011",
    soLuongSai: 1,
    lineDung: "PHI (ZA-15)",
    lineSai: "NTU (ZB-02)",
    note: "Sai line - sai số thứ tự",
    user: "Chu Thiên Bảo",
    vendor: "NVCT",
    nhom: "Nhóm 4",
    tongTien: 620000,
  },
  {
    stt: 73,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097785-T040",
    soLuongSai: 1,
    lineDung: "SFR (ZD-18)",
    lineSai: "PHL (ZD-04)",
    note: "Đúng line - sai số thứ tự",
    user: "Huỳnh Văn Thanh",
    vendor: "NVCT",
    nhom: "Nhóm 1",
    tongTien: 270000,
  },
  {
    stt: 74,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097788-T019",
    soLuongSai: 1,
    lineDung: "HPD (ZG-06)",
    lineSai: "A204 (ZE-14)",
    note: "Sai line - sai số thứ tự",
    user: "Bùi Quang Vinh",
    vendor: "NVCT",
    nhom: "Nhóm 3B",
    tongTien: 450000,
  },
  {
    stt: 75,
    ngay: "2026-11-01",
    phieuChuyen: "PT2082686-T042",
    soLuongSai: 1,
    lineDung: "CHR (ZG-04)",
    lineSai: "A204 (ZE-14)",
    note: "Sai line - sai số thứ tự",
    user: "Thang Minh Phúc PST/ Nguyễn Nhật Vy VCO",
    vendor: "PST",
    nhom: "Nhóm 2",
    tongTien: 890000,
  },
  {
    stt: 76,
    ngay: "2026-11-01",
    phieuChuyen: "PT2082655-T009",
    soLuongSai: 1,
    lineDung: "A209 (ZA-05)",
    lineSai: "A214 (ZE-15)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Minh Khang",
    vendor: "NVCT",
    nhom: "Nhóm 3A",
    tongTien: 1120000,
  },
  {
    stt: 77,
    ngay: "2026-11-04",
    phieuChuyen: "PT2097790-T005",
    soLuongSai: 1,
    lineDung: "DS3 (ZC-17)",
    lineSai: "A205 (ZF-01)",
    note: "Sai line - sai số thứ tự",
    user: "Bùi Đức Mạnh VCO/Nguyễn Đăng Khôi VCo",
    vendor: "VCO",
    nhom: "Nhóm 4",
    tongTien: 570000,
  },
];

let currentNoteType = "all";

window.onload = function () {
  document.getElementById("sai-line-vendor-group").style.display = "flex";
  document.getElementById("thieu-kien-vendor-group").style.display = "none";
  renderTable(rawData, "all");
  renderReportTable();
  renderGroupReportTable(); // <-- Thêm dòng này để render bảng so sánh nhóm
};

function renderTable(data, type) {
  const tbody = document.getElementById("table-body");
  const theadTr = document.querySelector("#data-table thead tr");
  tbody.innerHTML = "";
  document.getElementById("main-table-container").style.display = "block";
  document.getElementById("ranking-section").style.display = "none";

  theadTr.innerHTML = `
    <th>STT</th>
    <th>Ngày</th>
    <th>Mã Phiếu Chuyển</th>
    <th>Số Lượng</th>
    <th>Line Đúng</th>
    <th>Line Sai / Wave</th>
    <th>Phân Loại (Note)</th>
    <th>Nhân Viên Vi Phạm (User)</th>
    <th>Vendor</th>
    <th>Nhóm Hàng</th>
    <th>Tổng Tiền</th>
  `;

  if (!data || data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; padding: 25px; color: #777;">Không tìm thấy nhân viên hoặc phiếu chuyển phù hợp</td></tr>`;
    return;
  }

  data.forEach((item, index) => {
    let v = (item.vendor || "Khác").toUpperCase();
    let badgeClass = "vendor-khac";
    if (v === "PST") badgeClass = "vendor-pst";
    else if (v === "VCO") badgeClass = "vendor-vco";
    else if (v === "NVCT") badgeClass = "vendor-nvct";
    else if (v === "GHM") badgeClass = "vendor-ghm";

    let noteColor = item.note === "Thiếu kiện" ? "#9c27b0" : "#d93025";
    let formattedPrice = Number(item.tongTien || 0).toLocaleString("vi-VN") + " đ";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.ngay}</td>
      <td><strong>${item.phieuChuyen}</strong></td>
      <td>${item.soLuongSai}</td>
      <td>${item.lineDung}</td>
      <td>${item.lineSai}</td>
      <td><span style="color: ${noteColor}; font-weight: 600;">${item.note}</span></td>
      <td><strong>${item.user}</strong></td>
      <td><span class="vendor-badge ${badgeClass}">${item.vendor}</span></td>
      <td><span>${item.nhom}</span></td>
      <td><strong>${formattedPrice}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

function searchTable() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase().trim();

  document.getElementById("main-table-container").style.display = "block";
  document.getElementById("ranking-section").style.display = "none";

  let filtered = rawData.filter((item) => {
    let userName = (item.user || "").toLowerCase();
    let ptCode = (item.phieuChuyen || "").toLowerCase();
    let vendorName = (item.vendor || "").toLowerCase();
    let groupName = (item.nhom || "").toLowerCase();

    let matchSearch =
      userName.includes(filter) ||
      ptCode.includes(filter) ||
      vendorName.includes(filter) ||
      groupName.includes(filter);
    let matchType = currentNoteType === "all" ? true : item.note === currentNoteType;

    return matchSearch && matchType;
  });

  renderTable(filtered, currentNoteType);
}

function showVendorRanking(category, vendorName, event) {
  const parentGroup = event.target.closest(".vendor-button-group");
  parentGroup.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  event.target.classList.add("active");

  document.getElementById("main-table-container").style.display = "none";
  document.getElementById("ranking-section").style.display = "block";

  const rankingBody = document.getElementById("ranking-body");
  rankingBody.innerHTML = "";

  let filtered = rawData.filter((item) => {
    let isThieuKien = item.note === "Thiếu kiện";
    let matchCat = category === "Thiếu kiện" ? isThieuKien : !isThieuKien;
    let matchVendor =
      vendorName === "ALL" ? true : item.vendor.toUpperCase() === vendorName.toUpperCase();
    return matchCat && matchVendor;
  });

  let titlePrefix =
    category === "Thiếu kiện"
      ? "📦 Thống Kê Nhân Viên THIẾU KIỆN"
      : "⚠️ Thống Kê Nhân Viên ĐỂ SAI LINE";
  document.getElementById("ranking-title").innerText =
    vendorName !== "ALL"
      ? `${titlePrefix} - Vendor: ${vendorName}`
      : `${titlePrefix} - Tất Cả Vendor`;

  let totalErrors = 0;
  let totalCash = 0;
  filtered.forEach((item) => {
    totalErrors += Number(item.soLuongSai);
    totalCash += Number(item.tongTien || 0);
  });

  const userMap = {};
  filtered.forEach((item) => {
    if (!userMap[item.user]) {
      userMap[item.user] = { user: item.user, vendor: item.vendor, totalQty: 0, totalAmount: 0 };
    }
    userMap[item.user].totalQty += Number(item.soLuongSai);
    userMap[item.user].totalAmount += Number(item.tongTien || 0);
  });

  let sortedUsers = Object.values(userMap).sort((a, b) => b.totalQty - a.totalQty);

  if (sortedUsers.length === 0) {
    rankingBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: #777;">Không có dữ liệu cho Vendor này</td></tr>`;
    return;
  }

  sortedUsers.forEach((item, index) => {
    let rankBadge = `<span class="badge-normal">Top ${index + 1}</span>`;
    if (index === 0) rankBadge = `<span class="badge-top1">🥇 TOP 1</span>`;
    else if (index === 1) rankBadge = `<span class="badge-top2">🥈 TOP 2</span>`;
    else if (index === 2) rankBadge = `<span class="badge-top3">🥉 TOP 3</span>`;

    let percentage = totalErrors > 0 ? ((item.totalQty / totalErrors) * 100).toFixed(2) : 0;
    let formattedUserMoney = Number(item.totalAmount).toLocaleString("vi-VN") + " đ";

    let v = (item.vendor || "Khác").toUpperCase();
    let badgeClass = "vendor-khac";
    if (v === "PST") badgeClass = "vendor-pst";
    else if (v === "VCO") badgeClass = "vendor-vco";
    else if (v === "NVCT") badgeClass = "vendor-nvct";
    else if (v === "GHM") badgeClass = "vendor-ghm";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${rankBadge}</td>
      <td><strong>${item.user}</strong></td>
      <td><span class="vendor-badge ${badgeClass}">${item.vendor}</span></td>
      <td><strong style="color: #d93025; font-size: 15px;">${item.totalQty}</strong></td>
      <td><strong style="color: #b91c1c;">${formattedUserMoney}</strong></td>
      <td><strong>${percentage}%</strong></td>
    `;
    rankingBody.appendChild(tr);
  });
}

function renderReportTable() {
  const reportBody = document.getElementById("report-body");
  reportBody.innerHTML = "";

  const summary = {};
  let totalErrors = 0;

  rawData.forEach((item) => {
    let qty = Number(item.soLuongSai);
    if (!summary[item.note]) summary[item.note] = 0;
    summary[item.note] += qty;
    totalErrors += qty;
  });

  let sortedSummary = Object.keys(summary)
    .map((note) => ({
      note: note,
      count: summary[note],
      percentage: totalErrors > 0 ? ((summary[note] / totalErrors) * 100).toFixed(2) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  sortedSummary.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><strong>${item.note}</strong></td>
      <td><strong>${item.count}</strong></td>
      <td><strong>${item.percentage}%</strong></td>
      <td>${index === 0 ? "⚠️ Cần ưu tiên khắc phục" : "Theo dõi thêm"}</td>
    `;
    reportBody.appendChild(tr);
  });
}

function filterTable(type, event) {
  currentNoteType = type;
  document.querySelectorAll(".button-group .btn").forEach((btn) => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  let searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  if (type === "Thiếu kiện") {
    document.getElementById("sai-line-vendor-group").style.display = "none";
    document.getElementById("thieu-kien-vendor-group").style.display = "flex";
  } else {
    document.getElementById("sai-line-vendor-group").style.display = "flex";
    document.getElementById("thieu-kien-vendor-group").style.display = "none";
  }

  if (type === "all") {
    renderTable(rawData, "all");
  } else {
    const filtered = rawData.filter((item) => item.note === type);
    renderTable(filtered, type);
  }
}

function renderGroupReportTable() {
  const groupBody = document.getElementById("group-report-body");
  if (!groupBody) return;
  groupBody.innerHTML = "";

  const groupMap = {};
  let totalErrors = 0;
  let totalAmount = 0;

  rawData.forEach((item) => {
    let g = (item.nhom || "").trim();
    // Các kiện nội bộ kho hoặc để trống nhóm sẽ gom vào "Chưa được xử lý"
    if (!g || g === "Nội bộ kho") {
      g = "Chưa được xử lý";
    }

    let qty = Number(item.soLuongSai) || 0;
    let money = Number(item.tongTien) || 0;

    if (!groupMap[g]) {
      groupMap[g] = { nhom: g, qty: 0, amount: 0, isUnprocessed: g === "Chưa được xử lý" };
    }
    groupMap[g].qty += qty;
    groupMap[g].amount += money;

    // Chỉ chia phần trăm trên các nhóm vận hành chính thức
    if (g !== "Chưa được xử lý") {
      totalErrors += qty;
      totalAmount += money;
    }
  });

  // Tách riêng nhóm đã xử lý (sắp xếp giảm dần theo tiền) và nhóm chưa xử lý
  let processedGroups = Object.values(groupMap)
    .filter((item) => !item.isUnprocessed)
    .sort((a, b) => b.amount - a.amount);

  let unhandledGroups = Object.values(groupMap).filter((item) => item.isUnprocessed);
  let finalSortedList = [...processedGroups, ...unhandledGroups];

  finalSortedList.forEach((item, index) => {
    let formattedAmount = Number(item.amount).toLocaleString("vi-VN") + " đ";
    let errRateBadge = "";
    let amountRateBadge = "";
    let noteStatus = "";

    if (item.isUnprocessed) {
      // Không chia tỷ lệ %, gắn cảnh báo cần rà soát
      errRateBadge = '<span style="color: #64748b; font-weight: 600;">-</span>';
      amountRateBadge = '<span style="color: #64748b; font-weight: 600;">-</span>';
      noteStatus =
        '<span class="badge-status" style="color: #b45309; border-color: #fcd34d; background-color: #fefce8; font-weight: 700;">❗Cần kiểm tra</span>';
    } else {
      let errRate = totalErrors > 0 ? ((item.qty / totalErrors) * 100).toFixed(2) : "0.00";
      let amountRate = totalAmount > 0 ? ((item.amount / totalAmount) * 100).toFixed(2) : "0.00";
      errRateBadge = `<span class="badge-percent-blue">${errRate}%</span>`;
      amountRateBadge = `<span class="badge-percent-red">${amountRate}%</span>`;

      noteStatus = '<span class="badge-status">Bình thường</span>';
      if (parseFloat(errRate) >= 25) {
        noteStatus =
          '<span class="badge-status" style="color: #ea580c; border-color: #fdba74; background-color: #fff7ed;">⚠️ Tỷ lệ lỗi cao nhất</span>';
      } else if (parseFloat(amountRate) >= 25) {
        noteStatus =
          '<span class="badge-status" style="color: #dc2626; border-color: #fca5a5; background-color: #fef2f2;">🚨 Tiền đền cao nhất</span>';
      }
    }

    const tr = document.createElement("tr");
    if (item.isUnprocessed) {
      tr.style.backgroundColor = "#fffbeb";
    }

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><strong>${item.nhom}</strong></td>
      <td><strong style="color: ${item.isUnprocessed ? "#b45309" : "#dc2626"};">${item.qty} kiện</strong></td>
      <td>${errRateBadge}</td>
      <td><strong style="color: #b91c1c;">${formattedAmount}</strong></td>
      <td>${amountRateBadge}</td>
      <td>${noteStatus}</td>
    `;
    groupBody.appendChild(tr);
  });
}
