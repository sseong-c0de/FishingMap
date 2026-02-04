export async function fetchTide(pageNo = "1") {
  const baseUrl = "/data-go/1192136/fcstFishingv2/GetFcstFishingApiServicev2";
  const params = {
    serviceKey: import.meta.env.VITE_DATA_GO_KR_KEY,
    type: "json",
    gubun: "갯바위",
    numOfRows: "300",
    pageNo,
    exclude: "lat,lot",
  };

  const url = new URL(baseUrl, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });
  const response = await fetch(url.toString());
  const text = await response.text();
  try {
    const data = JSON.parse(text);
    return data;
  } catch {
    return { raw: text };
  }
}

function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function nowDate() {
  return formatDate(new Date());
}

export function endDate(days = 6) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return formatDate(d);
}

// 1주일계산
// function getNext7Days() {
//   const start = new Date();
//   return Array.from({ length: 7 }, (_, i) => {
//     const d = new Date(start);
//     d.setDate(d.getDate() + i);
//     const y = d.getFullYear();
//     const m = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");

//     return `${y}${m}${day}`;
//   });
// }
// 1주일치 데이터받기
// export async function fetchTide7Days() {
//   const dates = getNext7Days();
//   const results = await Promise.all(
//     dates.map(async (reqDate) => {
//       const data = await fetchTide(reqDate);
//       return { reqDate, data };
//     })
//   );

//   return results;
// }
