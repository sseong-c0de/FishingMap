export async function fetchTide(reqDate) {
  const baseUrl = "/data-go/1192136/fcstFishingv2/GetFcstFishingApiServicev2";
  const params = {
    serviceKey: import.meta.env.VITE_DATA_GO_KR_KEY,
    type: "json",
    gubun: "갯바위",
    reqDate,
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
