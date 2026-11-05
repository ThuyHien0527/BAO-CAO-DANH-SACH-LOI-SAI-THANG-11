const rawData = [
  {
    stt: 1,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "VH6",
    lineSai: "ZD-19",
    note: "Thiếu kiện",
    user: "Huỳnh Thanh Trọng",
    vendor: "NVCT",
  },
  {
    stt: 2,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "VGP",
    lineSai: "ZC-22",
    note: "Thiếu kiện",
    user: "Nguyễn Minh Trường",
    vendor: "NVCT",
  },
  {
    stt: 3,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "VGP",
    lineSai: "ZC-22",
    note: "Thiếu kiện",
    user: "Nguyễn Anh Tuân VCO",
    vendor: "VCO",
  },
  {
    stt: 4,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "PPZ",
    lineSai: "ZA-25",
    note: "Thiếu kiện",
    user: "Hồ Tấn Kiệt",
    vendor: "NVCT",
  },
  {
    stt: 5,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "HTP",
    lineSai: "ZC-20",
    note: "Thiếu kiện",
    user: "Lương Văn Thánh",
    vendor: "NVCT",
  },
  {
    stt: 6,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "A111",
    lineSai: "ZE-05",
    note: "Thiếu kiện",
    user: "Mai Nhật Huy Hoàng VCO",
    vendor: "VCO",
  },
  {
    stt: 7,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "DS7",
    lineSai: "ZB-11",
    note: "Thiếu kiện",
    user: "Đoàn Văn Tiến",
    vendor: "NVCT",
  },
  {
    stt: 8,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "A247",
    lineSai: "ZF-15",
    note: "Thiếu kiện",
    user: "Nguyễn Thị Tuyết Như GHM",
    vendor: "GHM",
  },
  {
    stt: 9,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "A247",
    lineSai: "ZF-15",
    note: "Thiếu kiện",
    user: "Nguyễn Thị Hương PST",
    vendor: "PST",
  },
  {
    stt: 10,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "VH5",
    lineSai: "ZG-07",
    note: "Thiếu kiện",
    user: "Ngô Hoàng Thành VCO",
    vendor: "VCO",
  },
  {
    stt: 11,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "GDU",
    lineSai: "ZC-16",
    note: "Thiếu kiện",
    user: "Lê Mỹ Tâm VCO/Chìu Linh Đạt GHM",
    vendor: "GHM",
  },
  {
    stt: 12,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "GDU",
    lineSai: "ZC-16",
    note: "Thiếu kiện",
    user: "Lâm Huỳnh Phúc VCO",
    vendor: "VCO",
  },
  {
    stt: 13,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "NTT",
    lineSai: "ZD-07",
    note: "Thiếu kiện",
    user: "Lê Trương Nhật GHM",
    vendor: "GHM",
  },
  {
    stt: 14,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A129",
    lineSai: "ZC-06",
    note: "Thiếu kiện",
    user: "Bùi Đức Mạnh VCO/Nguyễn Đăng Khôi VCo",
    vendor: "VCO",
  },
  {
    stt: 15,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "VHT",
    lineSai: "ZC-19",
    note: "Thiếu kiện",
    user: "Nguyễn Hoàng Tuấn",
    vendor: "NVCT",
  },
  {
    stt: 16,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "HHG",
    lineSai: "ZC-13",
    note: "Thiếu kiện",
    user: "Mai Ngọc Diễm VCO",
    vendor: "VCO",
  },
  {
    stt: 17,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "NVQ",
    lineSai: "ZB-12",
    note: "Thiếu kiện",
    user: "Lê Mỹ Tâm VCO/Chìu Linh Đạt GHM",
    vendor: "GHM",
  },
  {
    stt: 18,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A108",
    lineSai: "ZB-08",
    note: "Thiếu kiện",
    user: "Trần Trọng Tín VCO",
    vendor: "VCO",
  },
  {
    stt: 19,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "NTO",
    lineSai: "ZB-16",
    note: "Thiếu kiện",
    user: "Võ Cẩm Hà VCO",
    vendor: "VCO",
  },
  {
    stt: 20,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A109",
    lineSai: "ZA-21",
    note: "Thiếu kiện",
    user: "PUTAWAY03",
    vendor: "Khác",
  },
  {
    stt: 21,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A198",
    lineSai: "ZA-18",
    note: "Thiếu kiện",
    user: "Đinh Đào Thùy Trang PST",
    vendor: "PST",
  },
  {
    stt: 22,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "HNG",
    lineSai: "ZG-01",
    note: "Thiếu kiện",
    user: "Nguyễn Anh Văn VCO",
    vendor: "VCO",
  },
  {
    stt: 23,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "A117",
    lineSai: "ZG-10",
    note: "Thiếu kiện",
    user: "Nguyễn Long Nhật VCO/Trần Lê Văn Hải GHM",
    vendor: "VCO",
  },
  {
    stt: 24,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "A181",
    lineSai: "ZA-04",
    note: "Thiếu kiện",
    user: "Võ Quốc Bảo",
    vendor: "NVCT",
  },
  {
    stt: 25,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "A154",
    lineSai: "ZA-23",
    note: "Thiếu kiện",
    user: "Lê Trọng Tấn VCO",
    vendor: "VCO",
  },
  {
    stt: 26,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "PHG",
    lineSai: "ZC-18",
    note: "Thiếu kiện",
    user: "Dư Gia An VCO",
    vendor: "VCO",
  },
  {
    stt: 1,
    ngay: "2026-11-05",
    soLuongSai: 20,
    lineDung: "LTC (ZD-14)",
    lineSai: "PGS (ZD-13)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Minh Tình VCO",
    vendor: "VCO",
  },
  {
    stt: 2,
    ngay: "2026-11-04",
    soLuongSai: 10,
    lineDung: "A221 (ZE-08)",
    lineSai: "A212 (ZF-08)",
    note: "Đúng số thứ tự - sai line",
    user: "Nguyễn Duy Mạnh VCO",
    vendor: "VCO",
  },
  {
    stt: 3,
    ngay: "2026-11-05",
    soLuongSai: 6,
    lineDung: "A234 (ZF-17)",
    lineSai: "A201 (ZF-19)",
    note: "Đúng line - sai số thứ tự",
    user: "Mai Gia Mưu",
    vendor: "NVCT",
  },
  {
    stt: 4,
    ngay: "2026-11-03",
    soLuongSai: 6,
    lineDung: "HLR (ZC-23)",
    lineSai: "HHG (ZC-13)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Học Lễ VCO",
    vendor: "VCO",
  },
  {
    stt: 5,
    ngay: "2026-11-04",
    soLuongSai: 6,
    lineDung: "CLD (ZE-19)",
    lineSai: "A216 (ZF-19)",
    note: "Đúng số thứ tự - sai line",
    user: "PUTAWAY03",
    vendor: "Khác",
  },
  {
    stt: 6,
    ngay: "2026-11-05",
    soLuongSai: 5,
    lineDung: "A223 (ZF-09)",
    lineSai: "A159 (ZF-05)",
    note: "Đúng line - sai số thứ tự",
    user: "Tô Đông Nghĩa VCO",
    vendor: "VCO",
  },
  {
    stt: 7,
    ngay: "2026-11-02",
    soLuongSai: 4,
    lineDung: "A156 (ZB-08)",
    lineSai: "A179 (ZB-07)",
    note: "Đúng line - sai số thứ tự",
    user: "Mai Nhật Huy Hoàng VCO",
    vendor: "VCO",
  },
  {
    stt: 8,
    ngay: "2026-11-05",
    soLuongSai: 4,
    lineDung: "HHG (ZC-13)",
    lineSai: "A150 (ZF-07)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Văn Hận",
    vendor: "NVCT",
  },
  {
    stt: 9,
    ngay: "2026-11-04",
    soLuongSai: 4,
    lineDung: "OPS (ZA-03)",
    lineSai: "HTN (ZC-01)",
    note: "Sai line - sai số thứ tự",
    user: "Hồ Nam",
    vendor: "NVCT",
  },
  {
    stt: 10,
    ngay: "2026-11-04",
    soLuongSai: 4,
    lineDung: "A8002 (ZG-12)",
    lineSai: "A8003 (ZG-13)",
    note: "Đúng line - sai số thứ tự",
    user: "Lâm Hải Quân",
    vendor: "NVCT",
  },
  {
    stt: 11,
    ngay: "2026-11-03",
    soLuongSai: 4,
    lineDung: "LVY (ZD-12)",
    lineSai: "EHS (ZD-11)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Thanh Ngà VCo",
    vendor: "VCO",
  },
  {
    stt: 12,
    ngay: "2026-11-05",
    soLuongSai: 3,
    lineDung: "NVD (ZD-06)",
    lineSai: "PTN (ZD-09)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Phúc Ý",
    vendor: "NVCT",
  },
  {
    stt: 13,
    ngay: "2026-11-05",
    soLuongSai: 3,
    lineDung: "A136 (ZF-02)",
    lineSai: "PKD (ZB-14)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Duy Việt",
    vendor: "NVCT",
  },
  {
    stt: 14,
    ngay: "2026-11-04",
    soLuongSai: 3,
    lineDung: "CTH (ZD-18)",
    lineSai: "LVL (ZC-22)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Minh Khang",
    vendor: "NVCT",
  },
  {
    stt: 15,
    ngay: "2026-11-03",
    soLuongSai: 2,
    lineDung: "TMY (ZC-20)",
    lineSai: "VHT (ZC-19)",
    note: "Đúng line - sai số thứ tự",
    user: "Trần Thành Doan",
    vendor: "NVCT",
  },
  {
    stt: 16,
    ngay: "2026-11-04",
    soLuongSai: 2,
    lineDung: "VH3 (ZA-06)",
    lineSai: "NDH (ZD-02)",
    note: "Sai line - sai số thứ tự",
    user: "Hồ Chí Hiếu",
    vendor: "NVCT",
  },
  {
    stt: 17,
    ngay: "2026-11-02",
    soLuongSai: 2,
    lineDung: "LPM (ZA-07)",
    lineSai: "A179 (ZB-07)",
    note: "Đúng số thứ tự - sai line",
    user: "Phan Minh Tâm",
    vendor: "NVCT",
  },
  {
    stt: 18,
    ngay: "2026-11-03",
    soLuongSai: 2,
    lineDung: "VH7 (ZE-16)",
    lineSai: "HNG (ZG-01)",
    note: "Sai line - sai số thứ tự",
    user: "Thang Minh Phúc Pst/ Phạm Hoàng Hải Dương GHM",
    vendor: "PST",
  },
  {
    stt: 19,
    ngay: "2026-11-05",
    soLuongSai: 2,
    lineDung: "A210 (ZF-13)",
    lineSai: "A242 (ZF-12)",
    note: "Đúng line - sai số thứ tự",
    user: "Đặng Văn Đăng Khôi VCO/Lê Văn Hào VCO",
    vendor: "VCO",
  },
  {
    stt: 20,
    ngay: "2026-11-02",
    soLuongSai: 2,
    lineDung: "LVL (ZC-22)",
    lineSai: "HMN (ZC-12)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Ngọc Quỳnh VCO",
    vendor: "VCO",
  },
  {
    stt: 21,
    ngay: "2026-11-04",
    soLuongSai: 2,
    lineDung: "OPS (ZA-03)",
    lineSai: "CHR (ZG-04)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Trọng Tấn VCO",
    vendor: "VCO",
  },
  {
    stt: 22,
    ngay: "2026-11-03",
    soLuongSai: 2,
    lineDung: "NVD (ZD-06)",
    lineSai: "AV4 (ZD-17)",
    note: "Đúng line - sai số thứ tự",
    user: "Huỳnh Hồ Long Du VCO",
    vendor: "VCO",
  },
  {
    stt: 23,
    ngay: "2026-11-04",
    soLuongSai: 2,
    lineDung: "VH4 (ZA-01)",
    lineSai: "SCV (ZE-13)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Trung Hiếu VCO",
    vendor: "VCO",
  },
  {
    stt: 24,
    ngay: "2026-11-05",
    soLuongSai: 1,
    lineDung: "RVS (ZD-10)",
    lineSai: "LTC (ZD-14)",
    note: "Đúng line - sai số thứ tự",
    user: "Chìu Linh Đạt GHM",
    vendor: "GHM",
  },
  {
    stt: 25,
    ngay: "2026-11-05",
    soLuongSai: 1,
    lineDung: "RVS (ZD-10)",
    lineSai: "LTC (ZD-14)",
    note: "Đúng line - sai số thứ tự",
    user: "Trần Thanh Mẫn VCo",
    vendor: "VCO",
  },
  {
    stt: 26,
    ngay: "2026-11-05",
    soLuongSai: 1,
    lineDung: "A195 (ZA-27)",
    lineSai: "A127 (ZA-14)",
    note: "Đúng line - sai số thứ tự",
    user: "Hồ Trần Phương Thảo VCO",
    vendor: "VCO",
  },
  {
    stt: 27,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "A214 (ZE-15)",
    lineSai: "VH7 (ZE-16)",
    note: "Đúng line - sai số thứ tự",
    user: "PUTAWAY06",
    vendor: "Khác",
  },
  {
    stt: 28,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "HTC (ZB-10)",
    lineSai: "TSO (ZD-08)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Duy Đạt",
    vendor: "NVCT",
  },
  {
    stt: 29,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "VTG (ZF-09)",
    lineSai: "Q50 (ZF-06)",
    note: "Đúng line - sai số thứ tự",
    user: "Đinh Đào Thùy Trang PST",
    vendor: "PST",
  },
  {
    stt: 30,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A121 (ZA-22)",
    lineSai: "A118 (ZA-23)",
    note: "Đúng line - sai số thứ tự",
    user: "Đoàn Thanh Phương",
    vendor: "NVCT",
  },
  {
    stt: 31,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "LVT (ZD-16)",
    lineSai: "TMY (ZC-20)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Tiến Dũng VCO",
    vendor: "VCO",
  },
  {
    stt: 32,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "LVY (ZD-12)",
    lineSai: "EHS (ZD-11)",
    note: "Đúng line - sai số thứ tự",
    user: "Trương Thị Hồng Ánh VCO",
    vendor: "VCO",
  },
  {
    stt: 33,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A196 (ZE-06)",
    lineSai: "A112 (ZE-10)",
    note: "Đúng line - sai số thứ tự",
    user: "Huỳnh Thanh Trọng",
    vendor: "NVCT",
  },
  {
    stt: 34,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A126 (ZC-08)",
    lineSai: "A171 (ZE-02)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Thanh Thảo VCO",
    vendor: "VCO",
  },
  {
    stt: 35,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "TMY (ZC-20)",
    lineSai: "VHT (ZC-19)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Thị Kim Thư VCO",
    vendor: "VCO",
  },
  {
    stt: 36,
    ngay: "2026-11-03",
    soLuongSai: 1,
    lineDung: "A117 (ZG-10)",
    lineSai: "HPD (ZG-06)",
    note: "Đúng line - sai số thứ tự",
    user: "Nguyễn Thị Thu Hằng VCO",
    vendor: "VCO",
  },
  {
    stt: 37,
    ngay: "2026-11-01",
    soLuongSai: 1,
    lineDung: "CHR (ZG-04)",
    lineSai: "A101 (ZG-05)",
    note: "Đúng line - sai số thứ tự",
    user: "Đỗ Minh Qui VCO/Nguyễn Anh Văn VCO",
    vendor: "VCO",
  },
  {
    stt: 38,
    ngay: "2026-11-01",
    soLuongSai: 1,
    lineDung: "CHR (ZG-04)",
    lineSai: "A101 (ZG-05)",
    note: "Đúng line - sai số thứ tự",
    user: "Phạm Chí Nghĩa",
    vendor: "NVCT",
  },
  {
    stt: 39,
    ngay: "2026-11-01",
    soLuongSai: 1,
    lineDung: "PHL (ZD-04)",
    lineSai: "A133 (ZG-12)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Mỹ Tâm VCO",
    vendor: "VCO",
  },
  {
    stt: 40,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "A120 (ZC-04)",
    lineSai: "A151 (ZB-04)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Hoàng Nguyên VCO",
    vendor: "VCO",
  },
  {
    stt: 41,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "A217 (ZC-13)",
    lineSai: "A169 (ZB-06)",
    note: "Sai line - sai số thứ tự",
    user: "Đỗ Ngọc Diễm Quỳnh Pst",
    vendor: "PST",
  },
  {
    stt: 42,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "A130 (ZC-07)",
    lineSai: "NTO (ZB-16)",
    note: "Sai line - sai số thứ tự",
    user: "Nguyễn Trung Quang",
    vendor: "NVCT",
  },
  {
    stt: 43,
    ngay: "2026-11-02",
    soLuongSai: 1,
    lineDung: "MZ2 (ZA-04)",
    lineSai: "VH3 (ZA-06)",
    note: "Đúng line - sai số thứ tự",
    user: "Võ Hồng Cang",
    vendor: "NVCT",
  },
  {
    stt: 44,
    ngay: "2026-11-05",
    soLuongSai: 1,
    lineDung: "NVD (ZD-06)",
    lineSai: "PTN (ZD-09)",
    note: "Đúng line - sai số thứ tự",
    user: "Phùng Thị Thu Hằng VCO",
    vendor: "VCO",
  },
  {
    stt: 45,
    ngay: "2026-11-05",
    soLuongSai: 1,
    lineDung: "CLD (ZE-19)",
    lineSai: "PGS (ZD-13)",
    note: "Sai line - sai số thứ tự",
    user: "Lâm Huỳnh Phúc VCO",
    vendor: "VCO",
  },
  {
    stt: 46,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "PHI (ZA-15)",
    lineSai: "NTU (ZB-02)",
    note: "Sai line - sai số thứ tự",
    user: "Chu Thiên Bảo",
    vendor: "NVCT",
  },
  {
    stt: 47,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "SFR (ZD-18)",
    lineSai: "PHL (ZD-04)",
    note: "Đúng line - sai số thứ tự",
    user: "Huỳnh Văn Thanh",
    vendor: "NVCT",
  },
  {
    stt: 48,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "HPD (ZG-06)",
    lineSai: "A204 (ZE-14)",
    note: "Sai line - sai số thứ tự",
    user: "Bùi Quang Vinh",
    vendor: "NVCT",
  },
  {
    stt: 49,
    ngay: "2026-11-01",
    soLuongSai: 1,
    lineDung: "CHR (ZG-04)",
    lineSai: "A204 (ZE-14)",
    note: "Sai line - sai số thứ tự",
    user: "Thang Minh Phúc PST/ Nguyễn Nhật Vy VCO",
    vendor: "PST",
  },
  {
    stt: 50,
    ngay: "2026-11-01",
    soLuongSai: 1,
    lineDung: "A209 (ZA-05)",
    lineSai: "A214 (ZE-15)",
    note: "Sai line - sai số thứ tự",
    user: "Lê Minh Khang",
    vendor: "NVCT",
  },
  {
    stt: 51,
    ngay: "2026-11-04",
    soLuongSai: 1,
    lineDung: "DS3 (ZC-17)",
    lineSai: "A205 (ZF-01)",
    note: "Sai line - sai số thứ tự",
    user: "Bùi Đức Mạnh VCO/Nguyễn Đăng Khôi VCo",
    vendor: "VCO",
  },
];

// Khởi chạy mặc định ẩn bộ nút thiếu kiện, chỉ hiện bộ nút sai line
window.onload = function () {
  document.getElementById("sai-line-vendor-group").style.display = "flex";
  document.getElementById("thieu-kien-vendor-group").style.display = "none";
  renderTable(rawData, "all");
  renderReportTable();
};

// Hàm render bảng dữ liệu chính
function renderTable(data, type) {
  const tbody = document.getElementById("table-body");
  const theadTr = document.querySelector("#data-table thead tr");
  tbody.innerHTML = "";
  document.getElementById("main-table-container").style.display = "block";
  document.getElementById("ranking-section").style.display = "none";

  if (type === "Thiếu kiện") {
    theadTr.innerHTML = `
      <th>STT</th>
      <th>Ngày</th>
      <th>Số lượng</th>
      <th>Wave</th>
      <th>Line</th>
      <th>Phân Loại (Note)</th>
      <th>User</th>
      <th>Vendor</th>
    `;
  } else {
    theadTr.innerHTML = `
      <th>STT</th>
      <th>Ngày</th>
      <th>Số lượng</th>
      <th>Line đúng</th>
      <th>Line bị chia sai</th>
      <th>Phân Loại (Note)</th>
      <th>User</th>
      <th>Vendor</th>
    `;
  }

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 20px; color: #777;">Không tìm thấy dữ liệu phù hợp</td></tr>`;
    return;
  }

  data.forEach((item, index) => {
    let v = (item.vendor || "Khác").toUpperCase();
    let badgeClass = "vendor-khac";
    if (v === "PST") badgeClass = "vendor-pst";
    else if (v === "VCO") badgeClass = "vendor-vco";
    else if (v === "NVCT") badgeClass = "vendor-nvct";
    else if (v === "GHM") badgeClass = "vendor-ghm";

    let noteColor = "#d93025";
    if (item.note === "Thiếu kiện") noteColor = "#9c27b0";

    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.ngay}</td>
            <td><strong>${item.soLuongSai}</strong></td>
            <td>${item.lineDung}</td>
            <td>${item.lineSai}</td>
            <td><span style="color: ${noteColor}; font-weight: 600;">${item.note}</span></td>
            <td>${item.user}</td>
            <td><span class="vendor-badge ${badgeClass}">${item.vendor}</span></td>
        `;
    tbody.appendChild(tr);
  });
}

// Hàm hiển thị bảng xếp hạng nhân viên theo Vendor cho từng mục riêng biệt
function showVendorRanking(category, vendorName, event) {
  // Xóa active các nút trong cùng nhóm vendor
  const parentGroup = event.target.closest(".vendor-button-group");
  parentGroup.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  event.target.classList.add("active");

  document.getElementById("main-table-container").style.display = "none";
  document.getElementById("ranking-section").style.display = "block";

  const rankingBody = document.getElementById("ranking-body");
  rankingBody.innerHTML = "";

  // Phân biệt rõ dữ liệu Thiếu kiện hay Sai line
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
  if (vendorName !== "ALL") {
    document.getElementById("ranking-title").innerText = `${titlePrefix} - Vendor: ${vendorName}`;
  } else {
    document.getElementById("ranking-title").innerText = `${titlePrefix} - Tất Cả Vendor`;
  }

  let totalErrors = 0;
  filtered.forEach((item) => {
    totalErrors += Number(item.soLuongSai);
  });

  // Nhóm cộng dồn số lượng theo user
  const userMap = {};
  filtered.forEach((item) => {
    if (!userMap[item.user]) {
      userMap[item.user] = { user: item.user, vendor: item.vendor, total: 0 };
    }
    userMap[item.user].total += Number(item.soLuongSai);
  });

  let sortedUsers = Object.values(userMap).sort((a, b) => b.total - a.total);

  if (sortedUsers.length === 0) {
    rankingBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: #777;">Không có dữ liệu cho Vendor này</td></tr>`;
    return;
  }

  sortedUsers.forEach((item, index) => {
    let rankBadge = `<span class="badge-normal">Top ${index + 1}</span>`;
    if (index === 0) rankBadge = `<span class="badge-top1">🥇 TOP 1</span>`;
    else if (index === 1) rankBadge = `<span class="badge-top2">🥈 TOP 2</span>`;
    else if (index === 2) rankBadge = `<span class="badge-top3">🥉 TOP 3</span>`;

    let percentage = totalErrors > 0 ? ((item.total / totalErrors) * 100).toFixed(2) : 0;

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
            <td><strong style="color: #d93025; font-size: 15px;">${item.total}</strong></td>
            <td><strong>${percentage}%</strong></td>
        `;
    rankingBody.appendChild(tr);
  });
}

// Hàm render Bảng báo cáo tổng hợp phân loại lỗi
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

// Lọc bảng khi bấm các nút ở top (Tất cả, Thiếu kiện, Sai line...)
function filterTable(type, event) {
  document.querySelectorAll(".button-group .btn").forEach((btn) => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  // Ẩn/Hiện bộ nút Vendor tương ứng
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
