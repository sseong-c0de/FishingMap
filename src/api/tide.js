function todayDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

export async function fetchTide(reqDate = todayDate()) {
  const baseUrl = "/data-go/1192136/fcstFishingv2/GetFcstFishingApiServicev2";
  const params = {
    serviceKey: import.meta.env.VITE_DATA_GO_KR_KEY,
    type: "json",
    gubun: "갯바위",
    reqDate,
    numOfRows: "300",
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

function getNext7Days() {
  const start = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${y}${m}${day}`;
  });
}

export async function fetchTide7Days() {
  const dates = getNext7Days();
  const results = await Promise.all(
    dates.map(async (reqDate) => {
      const data = await fetchTide(reqDate);
      return { reqDate, data };
    }),
  );

  return results;
}
