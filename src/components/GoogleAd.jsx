import { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Erro ao carregar anúncio", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center", minHeight: 90 }}
      data-ad-client="ca-pub-XXXXXXXXXXXX"   // substitua pelo seu ID do AdSense
      data-ad-slot="1234567890"              // substitua pelo slot do anúncio
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
}
